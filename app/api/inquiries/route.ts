import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, description } = await request.json();
    if (![name, email, phone, description].every(value => typeof value === "string" && value.trim())) return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    if (!process.env.MONGODB_URI) return NextResponse.json({ error: "Database is not configured." }, { status: 503 });
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    await client.db(process.env.MONGODB_DB || "refertechai").collection("inquiries").insertOne({ name: name.trim(), email: email.trim().toLowerCase(), phone: phone.trim(), description: description.trim(), createdAt: new Date() });
    await client.close();
    return NextResponse.json({ success: true }, { status: 201 });
  } catch { return NextResponse.json({ error: "Unable to send enquiry." }, { status: 500 }); }
}
