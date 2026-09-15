// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH
// Verify before this file ships: every `quote`, `role` and `industry` below.
// These are illustrative of the kind of feedback the section is designed to
// hold. No client has said any of this.
// Replace with quotes you have written permission to publish, or delete the
// Testimonials section from the pages that render it.

export interface Testimonial {
  quote: string;
  role: string;
  industry: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Placeholder quote. Replace with a real, attributable client quote before launch, or remove this section.",
    role: "Head of Engineering",
    industry: "Financial services",
  },
  {
    quote:
      "Placeholder quote. Replace with a real, attributable client quote before launch, or remove this section.",
    role: "Chief Operating Officer",
    industry: "Logistics",
  },
  {
    quote:
      "Placeholder quote. Replace with a real, attributable client quote before launch, or remove this section.",
    role: "Product Director",
    industry: "Retail",
  },
];
