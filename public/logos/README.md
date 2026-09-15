# Partner logos

Drop real partner logo files here, then list them in `content/partners.ts`.

## Rules

1. **Get written permission first.** A logo is a trademark. Displaying one for
   a company that has not agreed to be shown as a partner is both trademark
   misuse and a false claim about the business.
2. Do not copy logos from another company's site. A competitor's partner wall
   lists *their* partners, not yours.

## Adding one

1. Save the file here as `<name>.svg` (SVG preferred; PNG with a transparent
   background also works). Keep it roughly 3:1 and trimmed of whitespace.
2. In `content/partners.ts`, set `logo: "/logos/<name>.svg"` on that entry.

Entries with no `logo` fall back to a generated wordmark lockup, so the
section stays complete while you migrate partners one at a time.
