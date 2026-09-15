// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH
//
// Every entry below is an INVENTED brand. No real company logo or trademark
// appears on this site. Putting another company's logo here — including one
// lifted from a competitor's partner wall — would be both trademark misuse
// and a false claim about who ReferTech AI works with.
//
// TO ADD A REAL PARTNER:
//   1. Get written permission from that company to display their logo.
//   2. Drop the file in  public/logos/<name>.svg  (SVG preferred; PNG with a
//      transparent background also works).
//   3. Add an entry here with `logo` set to "/logos/<name>.svg".
//
// Entries WITHOUT a `logo` render the generated wordmark lockup, so the
// section looks finished either way and you can migrate one partner at a time.

export interface Partner {
  name: string;
  /** Path under /public, e.g. "/logos/acme.svg". Omit to use the lockup. */
  logo?: string;
  /** Optional link to the partner's site. */
  href?: string;
}

export const partners: readonly Partner[] = [
  { name: "Northwind Logistics" },
  { name: "Meridian Health" },
  { name: "Atlas Components" },
  { name: "Harbour Financial" },
  { name: "Lumen Retail Group" },
  { name: "Cascade Energy" },
  { name: "Vantage Education" },
  { name: "Beacon Media" },
];
