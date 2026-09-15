import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "refertechai";

// The client promise is cached on globalThis so that hot serverless
// invocations and dev-server hot reloads reuse one connection pool instead of
// opening a new one per request. The client is deliberately never closed —
// closing it is what forced a fresh connect on every submission before.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

export async function getDb(): Promise<Db> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  if (!globalForMongo._mongoClientPromise) {
    // Drop the cached promise if the connect fails, otherwise a single
    // transient failure would be memoised and every later request would
    // reject against the same dead promise.
    globalForMongo._mongoClientPromise = new MongoClient(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    })
      .connect()
      .catch((error: unknown) => {
        globalForMongo._mongoClientPromise = undefined;
        throw error;
      });
  }

  const client = await globalForMongo._mongoClientPromise;
  return client.db(dbName);
}
