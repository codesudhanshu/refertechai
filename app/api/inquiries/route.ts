import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { check } from "@/lib/rateLimit";

const CAPS = { name: 120, email: 200, phone: 40, description: 5000 } as const;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!check(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please email us directly." },
      { status: 429 },
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a real user never sees this field, so a filled value means a
  // bot. Return 201 and write nothing — a success response stops retries.
  if (typeof payload.company === "string" && payload.company.trim()) {
    return NextResponse.json({ success: true }, { status: 201 });
  }

  const fields: Record<string, string> = {};
  for (const [key, cap] of Object.entries(CAPS)) {
    const value = payload[key];

    if (typeof value !== "string" || !value.trim()) {
      return NextResponse.json(
        { error: `${key} is required.`, field: key },
        { status: 400 },
      );
    }

    if (value.length > cap) {
      return NextResponse.json(
        { error: `${key} must be ${cap} characters or fewer.`, field: key },
        { status: 400 },
      );
    }

    fields[key] = value.trim();
  }

  if (!EMAIL.test(fields.email)) {
    return NextResponse.json(
      { error: "Enter a valid email address.", field: "email" },
      { status: 400 },
    );
  }

  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      { error: "Database is not configured." },
      { status: 503 },
    );
  }

  try {
    const db = await getDb();
    await db.collection("inquiries").insertOne({
      name: fields.name,
      email: fields.email.toLowerCase(),
      phone: fields.phone,
      description: fields.description,
      createdAt: new Date(),
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("inquiry insert failed", error);
    return NextResponse.json(
      { error: "Unable to send enquiry." },
      { status: 500 },
    );
  }
}
