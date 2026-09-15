# Content modules

Every string the site renders lives here. Pages and components hold no copy of
their own, so changing wording never means editing JSX.

## What this business is

ReferTech AI is an **IT recruitment and staffing firm**. It places technology
talent. It does not build software, run migrations or deliver IT projects.

Before writing any service, headline or capability claim, check whether it
describes placing people or doing technical work. If it is technical work, it
does not belong on this site.

## Before launch

Five files carry claims about the business that have **not** been verified.
Each opens with a `// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH` banner.

| File | Status | What must be replaced |
|---|---|---|
| `caseStudies.ts` | ⚠️ placeholder | Every `client`, `challenge`, `solution` and `metric`. All six entries are illustrative. Metrics currently read `Example` so nothing false is published. |
| `testimonials.ts` | 🚨 **fabricated** | Every quote, **name**, job title, company and photo is invented. With a face and a full name beside it, a quote reads as a real person vouching for the company — published as-is this is a fabricated endorsement, not a design placeholder. Replace with permissioned real reviews, or delete the `<Testimonials />` section from `app/page.tsx` before launch. |
| `stats.ts` | ⚠️ placeholder | All four `value` fields, currently `—`. Replace with counted figures or delete `StatsBand` from `app/page.tsx` and `app/about/page.tsx`. |
| `jobs.ts` | ⚠️ placeholder | Internal ReferTech AI openings, shown on `/careers`. Replace with real openings or set to `[]`. |
| `openRoles.ts` | ⚠️ placeholder | **Client mandates** shown to candidates on `/jobs` — a different thing from `jobs.ts`. Advertising a role that is not open wastes candidates' time. Replace or set to `[]`. |
| `partners.ts` | ⚠️ placeholder | All eight are invented brands. See `public/logos/README.md` before adding a real one. |
| `presence.ts` | ⚠️ placeholder | Team only. Offices and certifications are no longer rendered anywhere — the sections were removed — but the data is kept in case they return. |

Three further values need confirming rather than replacing:

| File | Field | Note |
|---|---|---|
| `company.ts` | `phone` | Empty. The UI skips it when blank. |
| `company.ts` | `offices` | Empty array. Contact page falls back to email only. |
| `company.ts` | `responseTime` | Currently `within one business day`. This is a commitment — confirm the team can meet it. |
| `faqs.ts` | engagement and ownership answers | Confirm they match how the business actually contracts. |

## Images

`public/images/` holds two stock photos. The hero carousel has four slides and
reuses those two, so the same picture appears twice as it cycles. Supplying
four distinct images and pointing `heroSlides.ts` at them is the fix — nothing
else needs changing.

The 1200×630 social share card is generated at build time by
`app/opengraph-image.tsx` from the brand tokens, so there is no static share
image to supply.

## presence.ts — how the gaps are handled

This file follows three rules so the sections can be seen in the design without
publishing anything false:

- **No invented addresses.** `address` is an empty string; the office card
  renders the city, country and timezone and omits the street line.
- **No invented people.** Team entries carry a real role and the literal name
  `To be confirmed`. A fabricated human on an about page is the most
  misleading kind of placeholder.
- **No claimed certifications.** Every entry has `held: false` and renders a
  visible "Not yet certified" chip plus a footnote saying these are targets.
  Flip `held` to `true` only when a certificate actually exists.

## Files that need no review

`services.ts`, `industries.ts`, `technologies.ts`, `about.ts`, `faqs.ts` and
`heroSlides.ts`
describe capabilities, beliefs and engagement models — not past engagements.
They assert nothing that requires verification.

## Conventions

- Data only. No JSX, and no imports from `components/` or `lib/`.
- Arrays are `readonly` and typed with an exported interface.
- `stats.ts` exports its type as `StatItem`, not `Stat` — `components/ui/Stat.tsx`
  already exports a component by that name and the two would collide.
- `CaseStudy.industry` must match an `Industry.slug`.
- `CaseStudy.services` entries must match `Service.slug` values.
