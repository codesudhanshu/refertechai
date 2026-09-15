# ReferTech AI Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the ReferTech AI marketing site as a light-theme enterprise IT services site on Tailwind v4, expand it from 7 to 16 pages across 11 route patterns, and fix the five defects found in audit.

**Architecture:** Typed data modules in `content/` feed server components that compose `components/ui/` primitives through `components/sections/` blocks. Only four components ship to the browser. Infrastructure with side effects is isolated in `lib/`. Every route is statically generated; `/api/inquiries` is the single route handler.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4, MongoDB driver 6, `next/font/google`.

**Spec:** `docs/superpowers/specs/2026-09-15-refertech-redesign-design.md`

## Global Constraints

- Node package manager is npm. Existing lockfile is `package-lock.json`.
- Tailwind CSS **v4** only. Tokens live in one `@theme` block in `app/globals.css`. No `tailwind.config.js` — v4 is CSS-first.
- Colour values, exact, no substitutions: ink `#0B1220`, body `#475569`, muted `#94A3B8`, primary `#4F46E5`, primary-dark `#3730A3`, accent `#06B6D4`, surface `#F8FAFC`, paper `#FFFFFF`, line `#E2E8F0`.
- `--color-accent` may only be used on text 24px or larger at weight 600+, or on non-text marks. Never on body copy.
- `--color-muted` may only appear on an `--color-ink` background. Never on white or `--color-surface`.
- Fonts: Sora (display, weights 600/700) and Inter (body, weights 400/500/600), both via `next/font/google`. No `@import url(...)` for fonts anywhere.
- Light theme only. No dark-mode variants, no `dark:` classes, no `prefers-color-scheme` blocks.
- Client components allowed: `Header`, `Accordion`, `WorkFilter`, `ContactForm`. Nothing else gets `"use client"`.
- Gradient washes appear in exactly two components: `Hero` and `CtaBand`. `linear-gradient(135deg, primary, accent)` at 8% opacity over white.
- Container max width `1280px`. Gutter `24px`, rising to `40px` at `lg`. Section rhythm `py-20` mobile, `py-28` at `lg`.
- Radius: `12px` cards, `8px` buttons, `999px` pills. Shadow at rest `0 1px 2px rgb(11 18 32 / 0.04)`, on hover `0 12px 32px rgb(11 18 32 / 0.08)`. Nothing deeper.
- All motion wrapped in `@media (prefers-reduced-motion: no-preference)`.
- Legal copy in `app/privacy-policy/page.tsx` and `app/terms-and-conditions/page.tsx` is preserved **verbatim**. Restyle the markup; do not reword a sentence.
- Every file in `content/` that carries a business claim opens with the banner `// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH` and a list of what must be verified.
- No real company logos or trademarks. Client logos render as typographic wordmark boxes.
- No analytics, no cookie banner, no third-party script, no CMS, no MDX.
- Source files are written multi-line and readable. The existing single-line minified style is abandoned.
- Verification cycle for every task: `npx tsc --noEmit`, then `npx eslint .`, then `npm run build`. All three clean before commit.

---

## File Structure

| Path | Responsibility |
|---|---|
| `app/globals.css` | Tailwind import, `@theme` tokens, base element styles, reduced-motion reveal utility. Nothing component-specific. |
| `app/layout.tsx` | Font variables on `<html>`, base metadata, skip link, Organization JSON-LD. |
| `app/*/page.tsx` | Route composition only. Imports content, passes to sections. |
| `app/sitemap.ts`, `app/robots.ts` | Next.js metadata routes. |
| `app/api/inquiries/route.ts` | Contact submission handler. Validation, honeypot, rate limit, insert. |
| `content/*.ts` | Typed readonly data. No JSX, no imports from `components/` or `lib/`. |
| `lib/mongodb.ts` | Cached client promise. Sole owner of the connection. |
| `lib/rateLimit.ts` | In-memory sliding window. Interface is `check(ip)`. |
| `lib/seo.ts` | `buildMetadata()` factory. Sole owner of OG/Twitter defaults. |
| `components/ui/*` | Visual primitives. The only place sizes, variants and states are encoded. |
| `components/layout/*` | Header, Footer, Container. |
| `components/sections/*` | Presentational blocks. Props in, markup out, no data fetching. |

---

## Task 1: Toolchain, tokens and fonts

Replaces the broken font pipeline (defect #1), removes the dead lint script (defect #5), and establishes the design system every later task consumes.

**Files:**
- Modify: `package.json`
- Create: `eslint.config.mjs`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Rewrite: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: nothing.
- Produces: Tailwind token names used by every later task — `bg-paper`, `bg-surface`, `text-ink`, `text-body`, `text-muted`, `text-primary`, `bg-primary`, `bg-primary-dark`, `text-accent`, `border-line`, `font-display`, `font-body`, `text-hero`, `text-h1`, `text-h2`, `text-h3`, `text-eyebrow`, `shadow-card`, `shadow-card-hover`, `rounded-card`, `rounded-btn`. Also the `.reveal` utility class and the CSS variables `--font-display` / `--font-body`.

- [ ] **Step 1: Install dependencies**

```bash
npm install tailwindcss@^4 @tailwindcss/postcss@^4
npm install -D eslint@^9 eslint-config-next@^16
```

- [ ] **Step 2: Fix the scripts block**

In `package.json`, replace `"lint": "next lint"` with `"lint": "eslint ."` and add `"typecheck": "tsc --noEmit"`.

- [ ] **Step 3: Create `postcss.config.mjs`**

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

- [ ] **Step 4: Create `eslint.config.mjs`**

```js
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

// eslint-config-next v16 ships native flat configs, so FlatCompat is not
// needed here — routing them through it throws on a circular plugin object.
const config = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...coreWebVitals,
  ...typescript,
];

export default config;
```

Do **not** install `@eslint/eslintrc` or use `FlatCompat`. The v16 configs are
already flat arrays; passing them through `FlatCompat.extends()` fails with
`TypeError: Converting circular structure to JSON`.

- [ ] **Step 5: Create `next.config.ts`**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

- [ ] **Step 6: Rewrite `app/globals.css`**

Delete the entire existing file — including the broken `@import url('https://fonts.googleapis.com/...')` on line 1, which is the root of defect #1. Replace with:

```css
@import "tailwindcss";

@theme {
  --color-ink: #0b1220;
  --color-body: #475569;
  --color-muted: #94a3b8;
  --color-primary: #4f46e5;
  --color-primary-dark: #3730a3;
  --color-accent: #06b6d4;
  --color-surface: #f8fafc;
  --color-paper: #ffffff;
  --color-line: #e2e8f0;

  --font-display: var(--font-sora), ui-sans-serif, system-ui, sans-serif;
  --font-body: var(--font-inter), ui-sans-serif, system-ui, sans-serif;

  --text-hero: clamp(2.5rem, 6vw, 4.5rem);
  --text-hero--line-height: 1.04;
  --text-hero--letter-spacing: -0.03em;
  --text-h1: clamp(2.25rem, 5vw, 3.5rem);
  --text-h1--line-height: 1.08;
  --text-h1--letter-spacing: -0.025em;
  --text-h2: clamp(1.75rem, 3.5vw, 2.75rem);
  --text-h2--line-height: 1.15;
  --text-h2--letter-spacing: -0.02em;
  --text-h3: clamp(1.25rem, 2vw, 1.5rem);
  --text-h3--line-height: 1.3;
  --text-eyebrow: 0.75rem;
  --text-eyebrow--line-height: 1.2;
  --text-eyebrow--letter-spacing: 0.12em;

  --radius-card: 12px;
  --radius-btn: 8px;

  --shadow-card: 0 1px 2px rgb(11 18 32 / 0.04);
  --shadow-card-hover: 0 12px 32px rgb(11 18 32 / 0.08);

  --container-site: 1280px;
}

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: var(--color-paper);
    color: var(--color-body);
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 {
    color: var(--color-ink);
    font-family: var(--font-display);
    font-weight: 700;
  }

  :focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
    border-radius: 2px;
  }
}

@layer utilities {
  .reveal {
    opacity: 1;
  }

  .gradient-wash {
    background-image:
      linear-gradient(135deg,
        color-mix(in oklab, var(--color-primary) 8%, transparent),
        color-mix(in oklab, var(--color-accent) 8%, transparent));
  }
}

@media (prefers-reduced-motion: no-preference) {
  @layer utilities {
    .reveal {
      opacity: 0;
      transform: translateY(4px);
      animation: reveal-in 0.4s ease-out forwards;
    }
  }

  @keyframes reveal-in {
    to {
      opacity: 1;
      transform: none;
    }
  }
}
```

Note the ordering: `.reveal` defaults to fully visible, and motion is added only inside the `prefers-reduced-motion: no-preference` block. Content is never hidden from a user who has reduced motion enabled.

- [ ] **Step 7: Wire fonts in `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReferTech AI — Technology that moves business forward",
  description:
    "ReferTech AI builds AI systems, software products, cloud infrastructure and blockchain applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 8: Verify the toolchain**

```bash
npx tsc --noEmit && npx eslint . && npm run build
```

Expected: all three clean. The build output still lists the 7 existing routes — they now render unstyled, because their old class names no longer exist. That is expected at this point and is corrected from Task 5 onward.

- [ ] **Step 9: Confirm the font defect is gone**

```bash
grep -r "fonts.googleapis.com" app/ && echo "FAIL: font import still present" || echo "OK: no remote font import"
grep -rE "Playfair|Manrope" app/ && echo "FAIL: unimported font still referenced" || echo "OK: no dangling font names"
```

Expected: both lines print `OK`.

- [ ] **Step 10: Commit**

```bash
git add package.json package-lock.json eslint.config.mjs next.config.ts postcss.config.mjs app/globals.css app/layout.tsx
git commit -m "feat: add tailwind v4 design tokens and self-hosted fonts"
```

---

## Task 2: Content layer

Every later task reads from these modules. Types defined here are load-bearing — later tasks reference these exact names.

**Files:**
- Create: `content/company.ts`, `content/services.ts`, `content/industries.ts`, `content/caseStudies.ts`, `content/technologies.ts`, `content/testimonials.ts`, `content/faqs.ts`, `content/jobs.ts`, `content/stats.ts`, `content/clients.ts`
- Create: `content/README.md`

**Interfaces:**
- Consumes: nothing.
- Produces: the exported types and constants below. Every field name here is used verbatim by Tasks 6–11.

```ts
// content/company.ts
export interface Office { city: string; country: string; address: string; }
export const company: {
  name: string;            // "ReferTech AI"
  legalName: string;
  tagline: string;
  email: string;           // "sales@refertechai.com"
  phone: string;
  url: string;             // "https://refertechai.com"
  responseTime: string;    // "within one business day"
  offices: readonly Office[];
  social: readonly { label: string; href: string }[];
};

// content/services.ts
export interface Service {
  slug: string;            // url segment, e.g. "ai-agents"
  title: string;
  summary: string;         // one line, used on cards
  description: string;     // paragraph, used on detail hero
  includes: readonly string[];      // exactly 6
  technologies: readonly string[];
  faqs: readonly { q: string; a: string }[];  // 3 per service
}
export const services: readonly Service[];  // exactly 6

// content/industries.ts
export interface Industry {
  slug: string;
  name: string;
  challenge: string;
  weBuild: string;
  outcome: string;
}
export const industries: readonly Industry[];  // exactly 8

// content/caseStudies.ts
export interface CaseStudy {
  slug: string;
  client: string;          // placeholder, e.g. "Regional payments platform"
  industry: string;        // must match an Industry.slug
  challenge: string;
  solution: string;
  metric: { value: string; label: string };
  services: readonly string[];  // Service.slug values
}
export const caseStudies: readonly CaseStudy[];  // 6

// content/technologies.ts
export interface TechGroup { name: string; items: readonly string[]; }
export const technologyGroups: readonly TechGroup[];
// exactly 6 groups: "AI & ML", "Frontend", "Backend", "Cloud & DevOps", "Data", "Web3"

// content/testimonials.ts
export interface Testimonial { quote: string; role: string; industry: string; }
export const testimonials: readonly Testimonial[];  // 3

// content/faqs.ts
export const generalFaqs: readonly { q: string; a: string }[];  // 6

// content/jobs.ts
export interface Job {
  title: string; team: string; location: string; type: string;
}
export const jobs: readonly Job[];  // 5

// content/stats.ts
// Named StatItem, not Stat — components/ui/Stat.tsx exports a component
// called Stat, and the two would collide wherever a page imports both.
export interface StatItem { value: string; label: string; }
export const stats: readonly StatItem[];  // exactly 4

// content/clients.ts
export const clientNames: readonly string[];  // 8 generic wordmarks
```

- [ ] **Step 1: Write `content/company.ts`**

Real data, not placeholder — the email `sales@refertechai.com` is already live in the current site and the name and tagline come from the existing copy. No banner needed on this file. Use one office entry with a city and country only, leaving `address` as an empty string, so nothing false is asserted.

- [ ] **Step 2: Write `content/services.ts`**

Carry over the 6 existing services from `app/components.tsx` verbatim as `title` and `summary` — that copy is approved and shipped. Slugs: `ai-agents`, `ai-workflows`, `web-product`, `cloud-devops`, `blockchain`, `technology-consulting`. Write `description`, `includes` (6 each), `technologies` and `faqs` (3 each) fresh. This file describes capabilities, not claims about past clients, so it needs no placeholder banner.

- [ ] **Step 3: Write `content/industries.ts`**

8 industries: Financial services, Healthcare, Retail & e-commerce, Logistics, Manufacturing, Real estate, Education, Media. Capability statements only — no client claims, no banner.

- [ ] **Step 4: Write the four files that carry business claims**

`caseStudies.ts`, `testimonials.ts`, `stats.ts` and `clients.ts` each open with:

```ts
// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH
// Verify before this file ships: <list the specific fields>
// Nothing in this file has been confirmed against real engagements.
```

`clientNames` holds generic descriptors (`"Northwind Logistics"`, `"Meridian Health"`) rendered as typographic boxes — never a real company name or logo file. `testimonials` entries carry `role` and `industry` only, no personal names. `stats` uses round figures.

- [ ] **Step 5: Write `content/technologies.ts`, `content/faqs.ts`, `content/jobs.ts`**

`jobs.ts` takes the placeholder banner — open roles are a factual claim. The other two do not.

- [ ] **Step 6: Write `content/README.md`**

A table listing each file, whether it carries the placeholder banner, and exactly which fields must be replaced with verified data before launch.

- [ ] **Step 7: Verify**

```bash
npx tsc --noEmit && npx eslint .
grep -L "PLACEHOLDER DATA" content/caseStudies.ts content/testimonials.ts content/stats.ts content/clients.ts content/jobs.ts
```

Expected: typecheck and lint clean; the `grep -L` prints nothing, meaning all five claim-bearing files carry the banner.

- [ ] **Step 8: Commit**

```bash
git add content/
git commit -m "feat: add typed content modules with placeholder-data banners"
```

---

## Task 3: Infrastructure layer

Fixes defect #3 (connection per request) and defect #4 (unprotected endpoint).

**Files:**
- Create: `lib/mongodb.ts`, `lib/rateLimit.ts`, `lib/seo.ts`
- Rewrite: `app/api/inquiries/route.ts`

**Interfaces:**
- Consumes: `content/company.ts`.
- Produces:
```ts
// lib/mongodb.ts
export function getDb(): Promise<Db>;

// lib/rateLimit.ts
export function check(ip: string): boolean;  // true = allowed

// lib/seo.ts
export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;       // "/services" — leading slash, no host
}): Metadata;
```

- [ ] **Step 1: Write `lib/mongodb.ts`**

```ts
import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "refertechai";

// The client promise is cached on globalThis so that hot serverless
// invocations and dev-server hot reloads reuse one connection pool
// instead of opening a new one per request.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

export async function getDb(): Promise<Db> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    }).connect();
  }

  const client = await globalForMongo._mongoClientPromise;
  return client.db(dbName);
}
```

The client is never closed. That is deliberate and is the correction to defect #3 — closing it is what forced a fresh connect on every request.

- [ ] **Step 2: Write `lib/rateLimit.ts`**

```ts
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 10;

const hits = new Map<string, number[]>();

// Per-instance sliding window. Stops casual and scripted abuse without
// adding a shared store to the stack. If the site scales past one
// instance, swap these internals; the check(ip) interface stays.
export function check(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return false;
  }

  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return true;
}
```

- [ ] **Step 3: Write `lib/seo.ts`**

```ts
import type { Metadata } from "next";
import { company } from "@/content/company";

export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${company.url}${input.path === "/" ? "" : input.path}`;

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: company.name,
      title: input.title,
      description: input.description,
      url,
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: ["/og-default.png"],
    },
  };
}
```

`metadataBase` is set once in `app/layout.tsx` (Task 12), not here — setting it per page would duplicate it into every route's metadata.

If `public/og-default.png` does not exist yet, Task 12 Step 5 will show the OG image 404ing. Generating that image is the user's to supply; note it in `content/README.md` alongside the placeholder data.

- [ ] **Step 4: Rewrite `app/api/inquiries/route.ts`**

```ts
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
```

- [ ] **Step 5: Confirm `@/` path alias resolves**

Check `tsconfig.json` has `"paths": { "@/*": ["./*"] }` under `compilerOptions`. Add it if absent.

- [ ] **Step 6: Exercise the endpoint**

```bash
npm run dev &
sleep 6
echo "--- missing field -> expect 400"
curl -s -o /dev/null -w "%{http_code}\n" -X POST localhost:3000/api/inquiries \
  -H "Content-Type: application/json" -d '{"name":"A","email":"a@b.co"}'
echo "--- bad email -> expect 400"
curl -s -o /dev/null -w "%{http_code}\n" -X POST localhost:3000/api/inquiries \
  -H "Content-Type: application/json" \
  -d '{"name":"A","email":"nope","phone":"1","description":"x"}'
echo "--- honeypot filled -> expect 201, nothing written"
curl -s -o /dev/null -w "%{http_code}\n" -X POST localhost:3000/api/inquiries \
  -H "Content-Type: application/json" \
  -d '{"name":"A","email":"a@b.co","phone":"1","description":"x","company":"bot"}'
echo "--- over cap -> expect 400"
curl -s -o /dev/null -w "%{http_code}\n" -X POST localhost:3000/api/inquiries \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"$(printf 'x%.0s' {1..200})\",\"email\":\"a@b.co\",\"phone\":\"1\",\"description\":\"x\"}"
echo "--- 12 rapid valid posts -> last ones expect 429"
for i in $(seq 1 12); do
  curl -s -o /dev/null -w "%{http_code} " -X POST localhost:3000/api/inquiries \
    -H "Content-Type: application/json" \
    -d '{"name":"A","email":"a@b.co","phone":"1","description":"x"}'
done; echo
kill %1
```

Expected: `400`, `400`, `201`, `400`, then ten non-429 codes followed by `429 429`. Without `MONGODB_URI` set the valid posts return `503`, which still proves the rate limiter fires before the database is reached.

- [ ] **Step 7: Verify and commit**

```bash
npx tsc --noEmit && npx eslint . && npm run build
git add lib/ app/api/ tsconfig.json
git commit -m "fix: cache mongo connection and harden inquiries endpoint"
```

---

## Task 4: UI primitives

**Files:**
- Create: `components/layout/Container.tsx`
- Create: `components/ui/Button.tsx`, `Card.tsx`, `Badge.tsx`, `SectionHeading.tsx`, `Stat.tsx`, `Accordion.tsx`, `LogoMarquee.tsx`, `Section.tsx`

**Interfaces:**
- Consumes: Task 1 tokens.
- Produces:
```tsx
// Container.tsx — max-w-[1280px], px-6 lg:px-10, mx-auto
export function Container(p: { className?: string; children: ReactNode }): JSX.Element;

// Section.tsx — vertical rhythm + optional surface band. Wraps Container.
export function Section(p: {
  tone?: "paper" | "surface";   // default "paper"
  className?: string;
  children: ReactNode;
}): JSX.Element;

// Button.tsx — renders <Link> when href is given, else <button>
export function Button(p: {
  href?: string;
  variant?: "primary" | "outline" | "ghost";  // default "primary"
  size?: "md" | "lg";                          // default "md"
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  children: ReactNode;
}): JSX.Element;

// Card.tsx — renders <Link> when href is given, else <article>
export function Card(p: {
  href?: string; className?: string; children: ReactNode;
}): JSX.Element;

// Badge.tsx — pill, border-line, text-sm
export function Badge(p: { children: ReactNode; className?: string }): JSX.Element;

// SectionHeading.tsx
export function SectionHeading(p: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";   // default "left"
  action?: ReactNode;          // right-aligned link, desktop only
}): JSX.Element;

// Stat.tsx — value in font-display text-4xl text-accent, label text-sm
export function Stat(p: { value: string; label: string }): JSX.Element;

// Accordion.tsx — "use client"
export function Accordion(p: {
  items: readonly { q: string; a: string }[];
}): JSX.Element;

// LogoMarquee.tsx — typographic wordmark boxes, duplicated track,
// animation only inside prefers-reduced-motion: no-preference
export function LogoMarquee(p: { names: readonly string[] }): JSX.Element;
```

- [ ] **Step 1: Write `Container.tsx` and `Section.tsx`**

`Section` applies `py-20 lg:py-28` and, when `tone="surface"`, `bg-surface`. It renders `<section>` wrapping `<Container>`.

- [ ] **Step 2: Write `Button.tsx`**

Variants: `primary` is `bg-primary text-white hover:bg-primary-dark`; `outline` is `border border-line text-ink hover:border-primary hover:text-primary`; `ghost` is `text-primary hover:text-primary-dark` with an arrow. All get `rounded-btn`, `transition-colors duration-150 ease-out`, `font-medium`, and a visible focus ring from the base `:focus-visible` rule. Sizes: `md` is `px-5 py-2.5 text-sm`, `lg` is `px-7 py-3.5 text-base`.

- [ ] **Step 3: Write `Card.tsx`, `Badge.tsx`, `Stat.tsx`, `SectionHeading.tsx`**

`Card` is `rounded-card border border-line bg-paper p-6 shadow-card transition-shadow duration-150 hover:shadow-card-hover`. `Stat.value` uses `text-accent` at `text-4xl font-display font-700` — 36px bold, which satisfies the accent-usage constraint. `Stat.label` uses `text-body`, never `text-muted`, because it sits on white.

- [ ] **Step 4: Write `Accordion.tsx`**

Client component. Tracks one open index in state. Each item is a `<button>` with `aria-expanded` and `aria-controls`, and a panel with `role="region"` and `hidden` toggled via the `hidden` attribute. Chevron rotates 180 degrees with a 150ms transition.

- [ ] **Step 5: Write `LogoMarquee.tsx`**

Server component. Renders the names twice in a flex track for a seamless loop. The `animation` property is declared only inside `@media (prefers-reduced-motion: no-preference)` in a local `<style>`-free approach: add the keyframes to `globals.css` under the existing reduced-motion block and apply the class here. With reduced motion the track is a static, horizontally scrollable row.

- [ ] **Step 6: Verify and commit**

```bash
npx tsc --noEmit && npx eslint . && npm run build
git add components/ app/globals.css
git commit -m "feat: add ui primitives and layout container"
```

---

## Task 5: Header and Footer

Fixes defect #2 (dead mobile nav).

**Files:**
- Create: `components/layout/Header.tsx` (client), `components/layout/Footer.tsx`
- Modify: `app/layout.tsx` (skip link, Organization JSON-LD)
- Delete: `app/components.tsx` — after Task 11 no page imports it. Deletion happens in Task 11; this task only stops adding new importers.

**Interfaces:**
- Consumes: `content/company.ts`, `content/services.ts`, `content/industries.ts`, `components/ui/Button`.
- Produces: `<Header />` and `<Footer />`, both prop-free.

Nav structure:

| Item | Type |
|---|---|
| Services | mega-menu — 6 services from `services.ts`, each linking `/services/<slug>` |
| Industries | mega-menu — 8 from `industries.ts`, linking `/industries#<slug>` |
| Work | link `/work` |
| Technologies | link `/technologies` |
| Company | mega-menu — About, Careers, Contact |
| Start a project | primary Button `/contact` |

- [ ] **Step 1: Write the desktop header**

Sticky, `h-20`, `bg-paper/90 backdrop-blur`, `border-b border-line`. Logo is the existing three-bar `Mark` recoloured to `bg-primary`, plus the `REFERTECH AI` wordmark in `font-display`. Mega-menus open on hover and on focus-within, and close on Escape.

- [ ] **Step 2: Write the mobile drawer**

Below `lg`, the nav is replaced by a hamburger button with `aria-expanded` and `aria-controls="mobile-nav"`. The drawer is a full-height panel with a backdrop. It must:
- trap focus inside while open,
- close on Escape, on backdrop click and on route change,
- restore focus to the hamburger on close,
- set `document.body.style.overflow = "hidden"` while open and restore it on close.

Nested groups (Services, Industries) render as inline expandable lists, not as hover menus.

- [ ] **Step 3: Write the footer**

Four columns from content modules — Services, Industries, Company, Contact — plus a bottom bar with the copyright year, Privacy Policy and Terms links. Email and offices read from `content/company.ts`.

- [ ] **Step 4: Add the skip link and JSON-LD to `app/layout.tsx`**

Skip link is the first focusable element: visually hidden until focused, then pinned top-left, linking to `#main`. Every page's outermost element gets `id="main"`. JSON-LD is an `Organization` object built from `content/company.ts`, injected via `<script type="application/ld+json">` with `dangerouslySetInnerHTML` and `JSON.stringify`.

- [ ] **Step 5: Manual gate — mobile nav**

```bash
npm run dev
```

At 390px width: the hamburger is visible, opens the drawer, Tab cycles only inside it, Escape closes it and focus returns to the hamburger, and every nav destination is reachable. This is the acceptance test for defect #2.

- [ ] **Step 6: Verify and commit**

```bash
npx tsc --noEmit && npx eslint . && npm run build
git add components/layout/ app/layout.tsx
git commit -m "feat: add header with working mobile drawer and footer"
```

---

## Task 6: Shared sections

**Files:**
- Create in `components/sections/`: `Hero.tsx`, `PageHero.tsx`, `TrustBar.tsx`, `StatsBand.tsx`, `ServiceGrid.tsx`, `IndustryStrip.tsx`, `ProcessTimeline.tsx`, `CaseStudyGrid.tsx`, `TechStack.tsx`, `Testimonials.tsx`, `FAQ.tsx`, `CtaBand.tsx`, `WorkFilter.tsx`

**Interfaces:**
- Consumes: Task 2 types, Task 4 primitives.
- Produces:
```tsx
Hero(p: { eyebrow: string; title: ReactNode; lead: string;
          primary: { label: string; href: string };
          secondary: { label: string; href: string };
          image: { src: string; alt: string } })
PageHero(p: { eyebrow: string; title: ReactNode; lead?: string })
TrustBar(p: { names: readonly string[] })
StatsBand(p: { items: readonly StatItem[]; tone?: "paper" | "surface" })
ServiceGrid(p: { items: readonly Service[] })
IndustryStrip(p: { items: readonly Industry[] })
ProcessTimeline(p: { steps: readonly { name: string; detail: string }[] })
CaseStudyGrid(p: { items: readonly CaseStudy[]; limit?: number })
TechStack(p: { groups: readonly TechGroup[] })
Testimonials(p: { items: readonly Testimonial[] })
FAQ(p: { items: readonly { q: string; a: string }[]; title?: string })
CtaBand(p: { title?: ReactNode; lead?: string })
WorkFilter(p: { items: readonly CaseStudy[]; industries: readonly Industry[] })  // "use client"
```

- [ ] **Step 1: `Hero.tsx`**

Two-column at `lg`, stacked below. Left: eyebrow, `text-hero` headline, lead at `text-lg text-body max-w-xl`, two buttons. Right: `next/image` with `fill`, `rounded-card`, `sizes="(max-width: 1024px) 100vw, 45vw"`, `priority`. Background is `gradient-wash` from Task 1. `py-20 lg:py-28`.

- [ ] **Step 2: `PageHero.tsx`**

Single column, left-aligned, `bg-surface`, `border-b border-line`, `py-16 lg:py-24`. `text-h1` headline.

- [ ] **Step 3: `TrustBar.tsx`, `StatsBand.tsx`**

`TrustBar` is a thin band: the label `Trusted by teams building at scale` plus `LogoMarquee`. `StatsBand` is a 2-column grid on mobile, 4 on `lg`, each cell a `Stat`.

- [ ] **Step 4: `ServiceGrid.tsx`, `IndustryStrip.tsx`, `CaseStudyGrid.tsx`, `TechStack.tsx`**

`ServiceGrid` is 1/2/3 columns at base/`md`/`lg`, each a `Card` linking `/services/<slug>` with an arrow that shifts 2px right on hover. `IndustryStrip` is a wrapped row of `Badge` pills linking `/industries#<slug>`. `CaseStudyGrid` cards show industry badge, client, challenge, and the metric in `text-accent` at `text-3xl font-display` (30px bold — satisfies the accent constraint). `TechStack` is one bordered column per group with the items as a pill list.

- [ ] **Step 5: `Testimonials.tsx`, `FAQ.tsx`, `CtaBand.tsx`**

`Testimonials` is a 3-column grid of quote cards; attribution is `role · industry` with no name. `FAQ` wraps `Accordion` with a `SectionHeading`. `CtaBand` uses `gradient-wash`, a `text-h2` headline, and a primary `Button` to `/contact`; defaults are supplied so most pages render `<CtaBand />` bare.

- [ ] **Step 6: `WorkFilter.tsx`**

Client component. Receives the full case-study array as a prop and holds only the selected industry slug in state. Filter buttons use `aria-pressed`. It renders `CaseStudyGrid` with the filtered slice. Because the data arrives as props from a server component, all case studies are present in the initial HTML and the route stays statically rendered.

- [ ] **Step 7: Verify and commit**

```bash
npx tsc --noEmit && npx eslint . && npm run build
git add components/sections/
git commit -m "feat: add shared page sections"
```

---

## Task 7: Home page

**Files:**
- Rewrite: `app/page.tsx`

**Interfaces:**
- Consumes: every Task 6 section, every Task 2 content module.
- Produces: nothing downstream.

- [ ] **Step 1: Compose the page**

Order, exactly as spec §5: `Header` → `Hero` → `TrustBar` → `ServiceGrid` → `StatsBand` → `IndustryStrip` → `CaseStudyGrid` (limit 3) → `ProcessTimeline` → `TechStack` → `Testimonials` → `FAQ` (`generalFaqs`) → `CtaBand` → `Footer`.

Alternate `tone="surface"` on every other `Section` so bands read as distinct. Hero image is the existing `/images/engineering.jpg`. `ProcessTimeline` steps are the four already in the current home page — Discover, Design, Deliver, Evolve — carried over verbatim.

- [ ] **Step 2: Add metadata**

```tsx
export const metadata = buildMetadata({
  title: "ReferTech AI — Technology that moves business forward",
  description:
    "We design and engineer AI systems, software products, cloud infrastructure and blockchain applications for teams building what's next.",
  path: "/",
});
```

- [ ] **Step 3: Manual gate**

At 390px, 768px and 1280px: no horizontal scroll, every section legible, hero image not distorted.

- [ ] **Step 4: Verify and commit**

```bash
npx tsc --noEmit && npx eslint . && npm run build
git add app/page.tsx
git commit -m "feat: rebuild home page"
```

---

## Task 8: Services hub and detail pages

**Files:**
- Rewrite: `app/services/page.tsx`
- Create: `app/services/[slug]/page.tsx`

**Interfaces:**
- Consumes: `content/services.ts`, `content/caseStudies.ts`, Task 6 sections.
- Produces: 6 static routes `/services/<slug>`.

- [ ] **Step 1: Rewrite the hub**

`PageHero` → six expanded rows, each with title, description, the 6 `includes` as a two-column checklist, and a link to the detail page → an engagement-models block (Dedicated team / Fixed scope / Staff augmentation) written inline in this file per the spec's one-use rule → `CtaBand`.

- [ ] **Step 2: Write the detail route**

```tsx
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} — ReferTech AI`,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}
```

Call `notFound()` for an unknown slug. Page order: hero → what's included → technologies → process → related case studies (filter `caseStudies` where `services` contains this slug) → service FAQ → `CtaBand`.

Check the Next.js 16 signature for `params` in this project before writing — if it is a Promise, await it in both functions and in the component.

- [ ] **Step 3: Verify all six routes build**

```bash
npm run build | grep -E "/services"
```

Expected: the hub plus six `/services/<slug>` entries, all marked static.

- [ ] **Step 4: Commit**

```bash
git add app/services/
git commit -m "feat: rebuild services hub and add service detail pages"
```

---

## Task 9: Industries, Work, Technologies, Careers

**Files:**
- Create: `app/industries/page.tsx`, `app/work/page.tsx`, `app/technologies/page.tsx`, `app/careers/page.tsx`

**Interfaces:**
- Consumes: Task 2 content, Task 6 sections.
- Produces: 4 static routes.

- [ ] **Step 1: `/industries`**

`PageHero` → 8 cards, each with `id={slug}` so the header mega-menu anchors land correctly, showing challenge, what we build, and outcome → `CtaBand`.

- [ ] **Step 2: `/work`**

`PageHero` → `WorkFilter` → `CtaBand`. Add a visible note above the grid stating the case studies are illustrative until real engagement data replaces them, consistent with the placeholder policy.

- [ ] **Step 3: `/technologies`**

`PageHero` → `TechStack` → `CtaBand`.

- [ ] **Step 4: `/careers`**

`PageHero` → culture paragraph → benefits grid (inline, one-use) → open roles list from `jobs.ts`, each row linking to `mailto:` with a prefilled subject → `CtaBand`.

- [ ] **Step 5: Metadata for all four**

Each exports `metadata` via `buildMetadata` with its own title, description and path.

- [ ] **Step 6: Verify and commit**

```bash
npx tsc --noEmit && npx eslint . && npm run build
git add app/industries/ app/work/ app/technologies/ app/careers/
git commit -m "feat: add industries, work, technologies and careers pages"
```

---

## Task 10: About and Contact

**Files:**
- Rewrite: `app/about/page.tsx`, `app/contact/page.tsx`, `app/contact/ContactForm.tsx`

**Interfaces:**
- Consumes: `content/company.ts`, `content/stats.ts`, Task 6 sections, Task 3 endpoint contract.
- Produces: nothing downstream.

- [ ] **Step 1: Rewrite `/about`**

`PageHero` → story (the existing About copy, carried over) → `StatsBand` → the three existing values → a leadership block written inline → `CtaBand`.

- [ ] **Step 2: Rewrite `/contact`**

Two columns at `lg`. Left: `ContactForm`. Right: email, offices from `company.offices`, and `company.responseTime`. No `CtaBand` — the page is the CTA.

- [ ] **Step 3: Rewrite `ContactForm.tsx`**

Must add, on top of the current behaviour:
- a honeypot input named `company`, wrapped in a container with `aria-hidden="true"`, `tabIndex={-1}`, `autoComplete="off"`, positioned off-screen — never `display: none`, which some bots detect;
- per-field error state driven by the `field` key in the 400 response body;
- distinct messages for 429 and 503 per spec §7;
- inputs never cleared except on 201;
- `aria-invalid` and `aria-describedby` on any field carrying an error;
- a submit button disabled only while the request is in flight.

- [ ] **Step 4: Manual gate — walk the whole error table**

Run the dev server and exercise each row of spec §7 through the real form: missing field, bad email, over-cap description, honeypot (fill it via devtools), 11 rapid submissions, and `MONGODB_URI` unset. Confirm input is preserved in every failure case.

- [ ] **Step 5: Verify and commit**

```bash
npx tsc --noEmit && npx eslint . && npm run build
git add app/about/ app/contact/
git commit -m "feat: rebuild about and contact pages with hardened form"
```

---

## Task 11: Legal pages, error routes, and removing the old component file

**Files:**
- Rewrite: `app/privacy-policy/page.tsx`, `app/terms-and-conditions/page.tsx`
- Create: `app/not-found.tsx`, `app/error.tsx`
- Delete: `app/components.tsx`

- [ ] **Step 1: Restyle both legal pages**

Markup and classes change; **every sentence of the copy is preserved verbatim**. Layout is a prose column at `max-w-[68ch]`, `text-body`, headings in `font-display`, with the existing `Last updated` line kept.

- [ ] **Step 2: Diff the legal copy to prove nothing was reworded**

```bash
git stash && node -e "
const fs=require('fs');
const strip=f=>fs.readFileSync(f,'utf8').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
fs.writeFileSync('/tmp/before-privacy.txt',strip('app/privacy-policy/page.tsx'));
fs.writeFileSync('/tmp/before-terms.txt',strip('app/terms-and-conditions/page.tsx'));
" && git stash pop && node -e "
const fs=require('fs');
const strip=f=>fs.readFileSync(f,'utf8').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
fs.writeFileSync('/tmp/after-privacy.txt',strip('app/privacy-policy/page.tsx'));
fs.writeFileSync('/tmp/after-terms.txt',strip('app/terms-and-conditions/page.tsx'));
" && diff /tmp/before-privacy.txt /tmp/after-privacy.txt; diff /tmp/before-terms.txt /tmp/after-terms.txt
```

Expected: the only differences are import lines and class names, never prose. Inspect any prose difference and restore the original wording.

- [ ] **Step 3: Write `app/not-found.tsx` and `app/error.tsx`**

`not-found` renders Header, a `text-h1` message, links to Services, Work, Industries and Contact, and Footer. `error.tsx` is a client component taking `{ error, reset }` and offering a retry button.

- [ ] **Step 4: Delete the old component file**

```bash
grep -rn "from \"\./components\"\|from \"\.\./components\"" app/ || echo "OK: no importers remain"
rm app/components.tsx
```

Expected: the grep prints `OK` before the delete. If any importer remains, that page was missed — go back and rebuild it.

- [ ] **Step 5: Verify and commit**

```bash
npx tsc --noEmit && npx eslint . && npm run build
git add -A app/
git commit -m "feat: restyle legal pages, add error routes, drop legacy components file"
```

---

## Task 12: SEO surface

**Files:**
- Create: `app/sitemap.ts`, `app/robots.ts`
- Modify: `app/layout.tsx` (metadataBase, template title)
- Create: `public/og-default.png` reference in `lib/seo.ts`

**Interfaces:**
- Consumes: `content/services.ts`, `content/company.ts`, `lib/seo.ts`.

- [ ] **Step 1: `app/sitemap.ts`**

Return every static route plus the 6 generated `/services/<slug>` entries, each with `lastModified`, `changeFrequency` and a `priority` — `1.0` for `/`, `0.8` for services and industries, `0.5` for legal.

- [ ] **Step 2: `app/robots.ts`**

Allow all, disallow `/api/`, and point `sitemap` at `${company.url}/sitemap.xml`.

- [ ] **Step 3: Title template**

In `app/layout.tsx`, set `title: { default: "...", template: "%s — ReferTech AI" }` and `metadataBase: new URL(company.url)`. Then sweep every `buildMetadata` call added in Tasks 7 through 11 and strip the ` — ReferTech AI` suffix from each `title`, letting the template append it. Missing one produces `Services — ReferTech AI — ReferTech AI` in the browser tab.

```bash
grep -rn "ReferTech AI\"" app/*/page.tsx app/*/*/page.tsx app/page.tsx | grep -i "title"
```

Expected after the sweep: only `app/layout.tsx` carries the brand in a title.

- [ ] **Step 4: Add Service JSON-LD**

On each `/services/[slug]` page, inject a `Service` object with `name`, `description`, `provider` referencing the Organization, and `serviceType`.

- [ ] **Step 5: Verify the generated output**

```bash
npm run build && npm start &
sleep 6
curl -s localhost:3000/sitemap.xml | head -30
curl -s localhost:3000/robots.txt
curl -s localhost:3000/ | grep -c "application/ld+json"
curl -s localhost:3000/ | grep -o '<meta property="og:[^>]*>' | head
kill %1
```

Expected: sitemap lists all 16 URLs, robots names the sitemap, the home page carries one JSON-LD block, and OG tags are present.

- [ ] **Step 6: Commit**

```bash
git add app/sitemap.ts app/robots.ts app/layout.tsx lib/seo.ts
git commit -m "feat: add sitemap, robots, structured data and og metadata"
```

---

## Task 13: Final verification pass

No new features. This task exists to run spec §9 end to end and fix whatever it surfaces.

- [ ] **Step 1: Automated gates**

```bash
npx tsc --noEmit && npx eslint . && npm run build
```

All three clean. The build output must list all 11 route patterns — 16 pages once `/services/[slug]` expands — every one static except `/api/inquiries`.

- [ ] **Step 2: Confirm every audit defect is closed**

```bash
grep -r "fonts.googleapis.com" app/ && echo "FAIL #1" || echo "PASS #1 fonts"
grep -rn "next lint" package.json && echo "FAIL #5" || echo "PASS #5 lint script"
grep -n "client.close()" app/api/inquiries/route.ts && echo "FAIL #3" || echo "PASS #3 mongo"
grep -n "honeypot\|rateLimit\|check(ip)" app/api/inquiries/route.ts >/dev/null && echo "PASS #4 endpoint" || echo "FAIL #4"
```

Defect #2 has no grep — it is the Task 5 Step 5 manual gate. Re-run it here.

- [ ] **Step 3: Responsive sweep**

All 16 pages at 390px, 768px and 1280px. No horizontal scroll anywhere.

- [ ] **Step 4: Keyboard and screen-reader pass on the home page**

Skip link is the first Tab stop and works. Every interactive element shows a focus ring. Tab order matches visual order. Mega-menus are reachable by keyboard. The drawer traps and restores focus.

- [ ] **Step 5: Contrast audit**

Check every text-on-background pair against spec §4. Specifically confirm no `text-muted` sits on white or `bg-surface`, and no `text-accent` is used below 24px or below weight 600.

```bash
grep -rn "text-muted" app/ components/ | grep -v "bg-ink"
```

Inspect each hit and confirm its background is `--color-ink`.

- [ ] **Step 6: Placeholder banner audit**

```bash
grep -L "PLACEHOLDER DATA" content/caseStudies.ts content/testimonials.ts content/stats.ts content/clients.ts content/jobs.ts
```

Expected: no output. Then read `content/README.md` and confirm it lists every one of those files.

- [ ] **Step 7: Commit any fixes and tag the work complete**

```bash
git add -A
git commit -m "fix: address findings from final verification pass"
```
