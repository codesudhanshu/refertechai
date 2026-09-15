# ReferTech AI — Site Redesign Design Spec

**Date:** 2026-09-15
**Status:** Approved for planning
**Repo:** `refertechai/` (Next.js 16, React 19, App Router, TypeScript)

---

## 1. Problem

The current site is 106 lines across 7 pages. It works, but it does not read as an
IT services company and it carries five real defects.

### Defects found in audit

| # | Defect | Location | Impact |
|---|--------|----------|--------|
| 1 | `globals.css` imports DM Mono, DM Serif Display and Plus Jakarta Sans, but `--serif` and `--sans` name Playfair Display and Manrope. Neither is imported. | `app/globals.css:1-2` | Every page renders in Georgia and Arial fallbacks. The intended typography never loads. |
| 2 | `.header nav { display: none }` below 760px with no replacement control. | `app/globals.css` (media query) | Phone visitors cannot reach Services, About or Contact from the header. |
| 3 | A new `MongoClient` is constructed and connected on every POST. | `app/api/inquiries/route.ts:11` | Connection churn and cold-start latency on serverless; risk of exhausting the Atlas connection limit under load. |
| 4 | `POST /api/inquiries` has no rate limit, no honeypot and no length caps. | `app/api/inquiries/route.ts` | Any client can write unbounded documents into the `inquiries` collection. |
| 5 | `"lint": "next lint"` script with no ESLint config present. | `package.json:9` | `next lint` was removed in Next.js 16. The script fails. |

### Gaps

- No per-page metadata, Open Graph tags, sitemap, robots.txt or structured data.
- Entire codebase minified onto single lines. Not maintainable.
- Dark ink-and-lime palette reads as a boutique agency, not an IT services firm.
- No industries, case studies, technology stack, engagement models, stats,
  testimonials, FAQ or careers content — the sections every comparable site leads with.
- Two stock images total.
- No accessibility affordances: no skip link, no focus management, `<em>` used
  decoratively rather than semantically.

---

## 2. Decisions

Locked with the user during brainstorming:

| Decision | Choice |
|----------|--------|
| Design language | **Hybrid** — enterprise frame (Infosys/HCL grid discipline, white ground, restrained motion) with agency conversion blocks (stats band, logo bar, case studies, testimonials, FAQ). |
| Scope | Reskin the 7 existing pages **and** add `/industries`, `/work`, `/technologies`, `/careers`, plus dynamic `/services/[slug]`. |
| Styling stack | **Tailwind CSS v4** with design tokens in a single `@theme` block. |
| Palette | **Deep indigo + electric cyan** on white. Light theme only. |

### Reference research

Appinventiv and Appsinvo homepages were fetched and their section order recorded.
Infosys (403) and HCLTech (timeout) block automated fetching; their structure is
drawn from known enterprise patterns — mega-menu navigation, capabilities and
industries as peer top-level sections, a stats band, and an insights/newsroom rail.

Common section order across all four:
hero → credibility (badges or logos) → service pillars → stats → case studies →
capability or technology grid → testimonials → awards/compliance → FAQ → CTA.

The blueprints in section 5 follow that order.

---

## 3. Architecture

```
app/
  layout.tsx                  fonts via next/font, base metadata, Organization JSON-LD
  page.tsx                    home
  services/page.tsx           hub
  services/[slug]/page.tsx    6 statically generated detail pages
  industries/page.tsx
  work/page.tsx
  technologies/page.tsx
  careers/page.tsx
  about/page.tsx
  contact/page.tsx
  privacy-policy/page.tsx
  terms-and-conditions/page.tsx
  sitemap.ts
  robots.ts
  not-found.tsx
  error.tsx
  api/inquiries/route.ts
  globals.css                 Tailwind import + @theme tokens only

components/
  layout/    Header.tsx (client), Footer.tsx, Container.tsx
  ui/        Button.tsx, Card.tsx, Badge.tsx, SectionHeading.tsx,
             Stat.tsx, Accordion.tsx (client), LogoMarquee.tsx
  sections/  Hero.tsx, PageHero.tsx, TrustBar.tsx, StatsBand.tsx,
             ServiceGrid.tsx, IndustryStrip.tsx, ProcessTimeline.tsx,
             CaseStudyGrid.tsx, WorkFilter.tsx (client), TechStack.tsx,
             Testimonials.tsx, FAQ.tsx, CtaBand.tsx

content/     services.ts, industries.ts, caseStudies.ts, technologies.ts,
             faqs.ts, testimonials.ts, jobs.ts, stats.ts, company.ts

lib/         mongodb.ts, seo.ts, rateLimit.ts
```

### Boundaries

**`content/`** holds typed data modules and no JSX. Each exports a readonly array
with an explicit TypeScript interface. `/services/[slug]` derives its
`generateStaticParams` from `services.ts`, so adding a service is a one-file edit.
Copy changes never require touching a component.

**`components/sections/`** are presentational. Each takes its data as props and
fetches nothing of its own. They compose `components/ui/` primitives and are
reusable across pages — `CtaBand` and `FAQ` appear on most routes.

**`components/ui/`** are the only place that encodes visual style decisions
(sizes, variants, states). Nothing else hardcodes a colour or a radius.

**`lib/`** holds side-effecting infrastructure. `mongodb.ts` owns the cached
connection, `rateLimit.ts` owns the request counter, `seo.ts` owns the metadata
factory. No component imports from `lib/`.

`Header`, `Accordion`, `WorkFilter` and `ContactForm` are the only client
components. Every page and every other section is a server component. `WorkFilter`
receives the full case-study array as a prop and filters it in the browser, so
`/work` still renders statically with all content present in the initial HTML.

Sections used by exactly one page — the engagement-model rows on `/services`, the
culture and benefits blocks on `/careers`, the leadership block on `/about` — stay
inline in that page file rather than becoming shared components. A section is
promoted to `components/sections/` only on its second use.

`content/company.ts` holds the single source of truth for name, tagline, email,
office addresses, stated response time and social links. `Footer`, `/contact` and
the Organization JSON-LD all read from it.

---

## 4. Design system

### Colour tokens

| Token | Value | Use |
|-------|-------|-----|
| `--color-ink` | `#0B1220` | Headings, high-emphasis text |
| `--color-body` | `#475569` | Body copy |
| `--color-muted` | `#94A3B8` | Captions, eyebrows, meta |
| `--color-primary` | `#4F46E5` | Buttons, links, active states |
| `--color-primary-dark` | `#3730A3` | Hover, pressed, display headings |
| `--color-accent` | `#06B6D4` | Non-text marks, gradient stop, accent text on ink |
| `--color-accent-deep` | `#0E7490` | Accent-coloured **text** on light grounds |
| `--color-surface` | `#F8FAFC` | Alternating section bands |
| `--color-paper` | `#FFFFFF` | Page ground, cards |
| `--color-line` | `#E2E8F0` | Borders, dividers |

Contrast on white, measured: ink 18.72:1, body 7.58:1, primary 6.29:1,
primary-dark 9.93:1. All pass WCAG AA at every text size.

**Corrected during implementation.** An earlier draft of this spec put
`--color-accent` at 3.2:1 on white and allowed it for text at 24px and above.
Both were wrong: measured, `#06B6D4` on white is **2.43:1**, which fails even
the 3:1 large-text threshold, so no size floor rescues it. The palette
therefore carries two accents:

- `--color-accent` `#06B6D4` — non-text marks only (rules, dots, the logo bar,
  gradient stops), plus text on `--color-ink`, where it measures 7.71:1.
- `--color-accent-deep` `#0E7490` — every accent-coloured word on a light
  ground. 5.36:1 on paper, 5.12:1 on surface: AA at all sizes.

`--color-muted` at 2.56:1 on white is used only on `--color-ink` backgrounds,
where it reaches 7.30:1; it is never placed on white or on `--color-surface`.

Measured ratios: ink/paper 18.72, ink/surface 17.89, body/paper 7.58,
body/surface 7.24, primary/paper 6.29, primary/surface 6.01,
primary-dark/paper 9.93, paper/primary 6.29, paper/ink 18.72.

### Typography

- **Display — Sora**, weights 600 and 700. Headings and stat figures.
- **Body — Inter**, weights 400, 500 and 600. Everything else.

Both loaded through `next/font/google` with `display: "swap"` and exposed as CSS
variables on `<html>`. This self-hosts the files, eliminates the render-blocking
`@import`, removes layout shift, and resolves defect #1 at the root rather than
by patching the import list.

Scale, all `clamp()` for fluid sizing:

| Step | Size |
|------|------|
| `--text-hero` | `clamp(2.5rem, 6vw, 4.5rem)` |
| `--text-h1` | `clamp(2.25rem, 5vw, 3.5rem)` |
| `--text-h2` | `clamp(1.75rem, 3.5vw, 2.75rem)` |
| `--text-h3` | `clamp(1.25rem, 2vw, 1.5rem)` |
| `--text-body` | `1rem` at `1.7` line height |
| `--text-sm` | `0.875rem` |
| `--text-eyebrow` | `0.75rem`, uppercase, `0.12em` tracking |

### Layout and depth

- Container `1280px`, gutter `24px` on mobile rising to `40px` at `lg`.
- Section rhythm `py-20` mobile, `py-28` desktop.
- Radius: `12px` cards, `8px` buttons, `999px` pills.
- Shadows: `0 1px 2px rgb(11 18 32 / 0.04)` at rest,
  `0 12px 32px rgb(11 18 32 / 0.08)` on hover. No shadow deeper than that.
- Gradient wash used in exactly two places: the hero background and the closing
  CTA band, both `linear-gradient(135deg, primary, accent)` at 8% opacity over white.

### Motion

Hover transitions at `150ms ease-out`. Section reveals are CSS-only opacity and
4px translate, applied inside `@media (prefers-reduced-motion: no-preference)`.
No scroll-jacking, no parallax, no autoplaying video.

---

## 5. Page blueprints

Section order per route, top to bottom.

**`/`** — Hero (gradient wash, eyebrow, dual CTA, image) → TrustBar (logo
marquee) → ServiceGrid (6 cards) → StatsBand (4 figures) → IndustryStrip (8
chips) → CaseStudyGrid (3 cards) → ProcessTimeline (4 steps) → TechStack →
Testimonials (3) → FAQ (6) → CtaBand → Footer

**`/services`** — PageHero → six expanded service rows, each linking to its
detail page → engagement models (Dedicated team / Fixed scope / Staff
augmentation) → CtaBand

**`/services/[slug]`** — Hero → what's included (6 bullets) → technologies used →
delivery process → related case studies → service-specific FAQ → CtaBand

**`/industries`** — PageHero → 8 industry cards, each stating the challenge, what
we build, and the outcome → CtaBand

**`/work`** — PageHero → `WorkFilter` wrapping the case-study grid. Each card
carries client, challenge, solution and one headline metric. Industry filtering
happens in the browser over data already present in the HTML.

**`/technologies`** — PageHero → stack grouped into AI/ML, Frontend, Backend,
Cloud & DevOps, Data, and Web3 → CtaBand

**`/careers`** — PageHero → culture → benefits grid → open roles list → apply CTA

**`/about`** — PageHero → story → StatsBand → values (3) → leadership → CtaBand

**`/contact`** — Split layout: form on the left, office locations, email and
stated response time on the right. No CtaBand; the page is itself the CTA.

**`/privacy-policy`, `/terms-and-conditions`** — Existing copy preserved verbatim,
restyled into a prose layout with a maximum measure of 68 characters.

---

## 6. Data flow

### Static content

`content/*.ts` modules are imported directly by server components at build time.
No fetching, no runtime cost. Every page is statically rendered.

### Contact form

```
ContactForm (client)
  -> POST /api/inquiries
       -> honeypot check        filled: return 201, write nothing
       -> rate limit by IP      10 requests per hour, else 429
       -> field validation      required, length caps, email regex
       -> lib/mongodb.ts        cached client promise
       -> insertOne             inquiries collection
  <- 201 { success: true } | 400 | 429 | 503 | 500
```

`lib/mongodb.ts` caches the client promise on `globalThis` so hot Lambda
invocations and Next.js dev-server hot reloads reuse one pool instead of opening a
new connection per request. This resolves defect #3.

`lib/rateLimit.ts` is an in-memory `Map` of IP to a sliding window of timestamps.
It is per-instance, not global — deliberately. It stops casual and scripted abuse
without adding Redis to the stack. If the site later scales past a single
instance, the module's internals are swapped; its interface stays a single
`check(ip): boolean`.

Field caps: name 120, email 200, phone 40, description 5000 characters. Payloads
exceeding any cap are rejected with 400 before the database is touched.

---

## 7. Error handling

| Case | Behaviour |
|------|-----------|
| Form submitted with a missing field | 400. Client shows an inline message naming the field. |
| Invalid email format | 400. Same inline treatment. |
| Field over its length cap | 400 with the cap stated. |
| Honeypot filled | 201 returned, nothing written. A bot sees success and does not retry. |
| Rate limit exceeded | 429. Client shows "Too many requests — please email us directly." |
| `MONGODB_URI` unset | 503. Client shows the direct email fallback. |
| Database write fails | 500. Client shows the direct email fallback. The error is logged server-side and never surfaced to the user. |
| Unknown route | `app/not-found.tsx` with header, footer and links to the main routes. |
| Render error | `app/error.tsx` with a recovery action. |

The client form never loses user input on failure. Only a 201 clears the fields.

---

## 8. Placeholder content policy

Case studies, testimonials, client logos, statistics, awards and job openings are
claims about a real business. They ship as clearly-marked placeholder data, not as
fabricated fact.

- Every affected file in `content/` opens with a
  `// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH` banner listing what must be verified.
- Client logos render as neutral typographic wordmark boxes. No real company logo
  or trademark is reproduced.
- Testimonials carry obviously generic attributions: role and industry, no names.
- Statistics use round placeholder figures.
- `content/README.md` lists every file needing real data before the site goes live.

---

## 9. Testing and verification

No test runner exists in this repo and none is added — this is a static marketing
site with one API route. Verification is by build, type check and manual pass.

**Automated gates, all must be clean:**

1. `npx tsc --noEmit` — zero errors.
2. `npm run build` — succeeds, and every route in section 5 appears in the build
   output as statically generated, with `/api/inquiries` as a route handler.
3. `npx eslint .` — zero errors against the new `eslint.config.mjs`.

**Manual gates:**

4. Every route renders at 390px, 768px and 1280px with no horizontal scroll.
5. Mobile drawer opens, traps focus, closes on Escape and on backdrop click, and
   restores focus to the trigger.
6. Keyboard-only pass through the home page: skip link works, every interactive
   element has a visible focus ring, tab order matches visual order.
7. Contact form exercised against each row of the section 7 table.
8. Contrast spot-check of every text-on-background pair against section 4 figures.

---

## 10. Out of scope

- Dark mode. The brief is a light theme; a second theme doubles the token surface
  for no stated need.
- A blog or insights section with MDX. Considered and declined during
  brainstorming — it needs real article content that does not exist yet.
- A CMS. `content/*.ts` is the editing surface.
- Analytics, cookie consent, and any third-party script.
- Real photography and real logos. Existing stock images are reused; new imagery
  is the user's to supply.
- Migrating the rate limiter to a shared store.
