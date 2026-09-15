"use client";

import { FormEvent, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { company } from "@/content/company";

const INITIAL = { name: "", email: "", phone: "", description: "" };

type Status = "idle" | "sending" | "success";

interface FieldProps {
  id: string;
  // Kept separate from `id`: `id` is a useId-derived string that must be
  // unique in the document, while `name` is the semantic field name browsers
  // use for autofill.
  name: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

function Field({
  id,
  name,
  label,
  value,
  error,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
}: FieldProps & {
  type?: string;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        id={id}
        name={name}
        type={type}
        required
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={`rounded-btn border bg-paper px-4 py-3 text-sm text-ink transition-colors duration-150 placeholder:text-body/60 ${
          error ? "border-red-600" : "border-line focus:border-lime-text"
        }`}
      />
      {error ? (
        <span id={`${id}-error`} className="text-sm text-red-700">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const baseId = useId();

  const id = (field: string) => `${baseId}-${field}`;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFieldError({});
    setFormError(null);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, company: honeypot }),
      });

      if (response.ok) {
        // Inputs are cleared only on success. Every failure path below keeps
        // what the user typed.
        setForm(INITIAL);
        setStatus("success");
        return;
      }

      const body = (await response.json().catch(() => ({}))) as {
        error?: string;
        field?: string;
      };

      setStatus("idle");

      if (response.status === 400 && body.field) {
        setFieldError({ [body.field]: body.error ?? "Check this field." });
        return;
      }

      if (response.status === 429) {
        setFormError(
          `Too many requests from this connection. Please email us directly at ${company.email}.`,
        );
        return;
      }

      if (response.status === 503) {
        setFormError(
          `The enquiry form is temporarily unavailable. Please email us directly at ${company.email}.`,
        );
        return;
      }

      setFormError(
        body.error ??
          `Something went wrong. Please email us directly at ${company.email}.`,
      );
    } catch {
      setStatus("idle");
      setFormError(
        `Could not reach the server. Please email us directly at ${company.email}.`,
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-line bg-paper p-8">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-lg text-ink"
        >
          &#10003;
        </span>
        <h2 className="mt-6 text-h3 font-semibold">Thank you.</h2>
        <p className="mt-3 leading-relaxed text-body">
          Your enquiry is with our team. We reply {company.responseTime}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-lime-text transition-colors duration-150 hover:text-lime-deep"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-5">
      <Field
        id={id("name")}
        name="name"
        label="Name"
        value={form.name}
        error={fieldError.name}
        placeholder="Your name"
        autoComplete="name"
        onChange={(value) => setForm({ ...form, name: value })}
      />
      <Field
        id={id("email")}
        name="email"
        label="Email"
        type="email"
        value={form.email}
        error={fieldError.email}
        placeholder="you@company.com"
        autoComplete="email"
        onChange={(value) => setForm({ ...form, email: value })}
      />
      <Field
        id={id("phone")}
        name="phone"
        label="Phone number"
        type="tel"
        value={form.phone}
        error={fieldError.phone}
        placeholder="Your phone number"
        autoComplete="tel"
        onChange={(value) => setForm({ ...form, phone: value })}
      />

      <label htmlFor={id("description")} className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink">
          Tell us about your project
        </span>
        <textarea
          id={id("description")}
          name="description"
          required
          rows={5}
          value={form.description}
          placeholder="What are you looking to build?"
          aria-invalid={fieldError.description ? true : undefined}
          aria-describedby={
            fieldError.description ? `${id("description")}-error` : undefined
          }
          onChange={(event) =>
            setForm({ ...form, description: event.target.value })
          }
          className={`rounded-btn border bg-paper px-4 py-3 text-sm text-ink transition-colors duration-150 placeholder:text-body/60 ${
            fieldError.description
              ? "border-red-600"
              : "border-line focus:border-lime-text"
          }`}
        />
        {fieldError.description ? (
          <span
            id={`${id("description")}-error`}
            className="text-sm text-red-700"
          >
            {fieldError.description}
          </span>
        ) : null}
      </label>

      {/* Honeypot. Moved off-screen rather than display:none, which some bots
          detect and skip. Hidden from assistive tech and the tab order. */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor={id("company")}>Company</label>
        <input
          id={id("company")}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="mt-2">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </Button>
      </div>

      {formError ? (
        <p role="alert" className="text-sm text-red-700">
          {formError}
        </p>
      ) : null}
    </form>
  );
}
