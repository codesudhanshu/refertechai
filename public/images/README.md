# Images

## Licence

Everything in `services/`, `pillars/`, `hero/`, `industries/`, `sections/`, `people/` and `about.jpg` came from
**Pexels**. The Pexels Licence allows free use including commercial use,
modification, and use without attribution.

`engineering.jpg` and `network.jpg` predate this and were already in the repo.

Nothing here was taken from a competitor's website. Reusing another company's
photography is a copyright problem, and their images are usually licensed to
them alone.

## Replacing them

These are stock. Real photography of your own team and offices will always
outperform it. To swap one, drop a file with the same name over the top —
nothing in the code needs to change.

| Folder | Used by | Naming |
|---|---|---|
| `services/` | service cards and detail pages | must match the service `slug` in `content/services.ts` |
| `pillars/` | the three cards under the split intro | referenced in `components/sections/ServicePillars.tsx` |
| `hero/` | homepage carousel slides | referenced in `content/heroSlides.ts` |
| `industries/` | sector cards on the home page and `/industries` | must match the industry `slug` in `content/industries.ts` |
| `sections/` | the split images in Why our shortlist is short, and the services intro | referenced in those components |
| `people/` | ⚠️ testimonial portraits — stock photos of people with **no connection to this business**. See the warning at the top of `content/testimonials.ts` before launch. | referenced in `content/testimonials.ts` |

Recommended: 900×640 or larger, JPEG, under ~150 KB after compression.
