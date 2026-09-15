# Content modules

Every string the site renders lives here. Pages and components hold no copy of
their own, so changing wording never means editing JSX.

## Before launch

Five files carry claims about the business that have **not** been verified.
Each opens with a `// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH` banner.

| File | Status | What must be replaced |
|---|---|---|
| `caseStudies.ts` | ⚠️ placeholder | Every `client`, `challenge`, `solution` and `metric`. All six entries are illustrative. Metrics currently read `Example` so nothing false is published. |
| `testimonials.ts` | ⚠️ placeholder | All three quotes. No client has said any of this. Replace with quotes you have written permission to publish, or delete the `Testimonials` section from `app/page.tsx`. |
| `stats.ts` | ⚠️ placeholder | All four `value` fields, currently `—`. Replace with counted figures or delete `StatsBand` from `app/page.tsx` and `app/about/page.tsx`. |
| `clients.ts` | ⚠️ placeholder | All eight names are invented. Replace with clients who have agreed to be named, or delete `TrustBar` from `app/page.tsx`. No real logo files are used — names render as plain typographic boxes. |
| `jobs.ts` | ⚠️ placeholder | All five roles. Replace with real openings, or set the array to `[]` — the careers page handles an empty list. |

Three further values need confirming rather than replacing:

| File | Field | Note |
|---|---|---|
| `company.ts` | `phone` | Empty. The UI skips it when blank. |
| `company.ts` | `offices` | Empty array. Contact page falls back to email only. |
| `company.ts` | `responseTime` | Currently `within one business day`. This is a commitment — confirm the team can meet it. |
| `faqs.ts` | engagement and ownership answers | Confirm they match how the business actually contracts. |

One asset is missing:

| Path | Note |
|---|---|
| `public/og-default.png` | 1200×630 social share image, referenced by `lib/seo.ts`. Until it exists, link previews fall back to no image. |

## Files that need no review

`services.ts`, `industries.ts` and `technologies.ts` describe capabilities, not
past engagements. They assert nothing that requires verification.

## Conventions

- Data only. No JSX, and no imports from `components/` or `lib/`.
- Arrays are `readonly` and typed with an exported interface.
- `stats.ts` exports its type as `StatItem`, not `Stat` — `components/ui/Stat.tsx`
  already exports a component by that name and the two would collide.
- `CaseStudy.industry` must match an `Industry.slug`.
- `CaseStudy.services` entries must match `Service.slug` values.
