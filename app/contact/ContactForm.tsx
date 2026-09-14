"use client";

import { FormEvent, useState } from "react";

const initial = { name: "", email: "", phone: "", description: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState("sending");
    try { const response = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) }); if (!response.ok) throw new Error(); setState("success"); setForm(initial); }
    catch { setState("error"); }
  }
  if (state === "success") return <div className="form-success"><span>✓</span><h2>Thank you.</h2><p>Your enquiry is with our team. We&apos;ll be in touch soon.</p><button onClick={() => setState("idle")}>Send another enquiry</button></div>;
  return <form onSubmit={submit} className="contact-form"><label>Name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label><label>Email<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label><label>Phone number<input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" /></label><label>Tell us about your project<textarea required value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="What are you looking to build?" rows={4} /></label><button className="button button-lime" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Send enquiry ↗"}</button>{state === "error" && <p className="form-error">Something went wrong. Please email us directly at sales@refertechai.com.</p>}</form>;
}
