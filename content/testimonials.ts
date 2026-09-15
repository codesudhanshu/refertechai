// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH
//
// These reviews are ILLUSTRATIVE. No client has said any of this, and the
// attributions are roles and sectors rather than invented people — putting a
// fabricated person's name and photo behind a quote is the most misleading
// thing a marketing site can do.
//
// The section renders a visible note saying so while `verified` is false on
// any entry. To publish a real review:
//   1. Get written permission to quote the person and name their company.
//   2. Replace `quote`, set `name` and `company`, and set `verified: true`.
//   3. Once every entry is verified the note disappears automatically.

export interface Testimonial {
  quote: string;
  /** Real person's name. Leave empty until you have permission to publish it. */
  name: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
  verified: boolean;
}

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "They spent the first two weeks telling us what was already working before proposing anything new. The roadmap we got was something our own team could actually execute, and they said plainly which parts did not need them at all.",
    name: "",
    role: "Chief Technology Officer",
    company: "",
    industry: "Financial services",
    rating: 5,
    verified: false,
  },
  {
    quote:
      "The migration ran over four weekends with a rollback ready each time. We used it once. Nobody outside the team noticed anything had changed, which is exactly what we were paying for.",
    name: "",
    role: "Head of Infrastructure",
    company: "",
    industry: "Logistics",
    rating: 5,
    verified: false,
  },
  {
    quote:
      "We had been through two agencies before this. The difference was that the shortlist came with honest notes — including the reservations. Three candidates, two offers, both still with us eighteen months on.",
    name: "",
    role: "VP Engineering",
    company: "",
    industry: "Retail & e-commerce",
    rating: 5,
    verified: false,
  },
  {
    quote:
      "The security review named what to fix first and what could wait a year. That ordering saved us more than the engagement cost, because we stopped spending on things that were never going to be exploited.",
    name: "",
    role: "Chief Information Security Officer",
    company: "",
    industry: "Healthcare",
    rating: 5,
    verified: false,
  },
  {
    quote:
      "Handover was a real handover. Runbooks, two working sessions, and a month where they answered questions without invoicing for it. We have run the platform ourselves since.",
    name: "",
    role: "Director of Technology",
    company: "",
    industry: "Manufacturing",
    rating: 5,
    verified: false,
  },
  {
    quote:
      "They talked us out of the thing we called them about. The reporting layer they built instead cost a third of what we had budgeted and answered the question we actually had.",
    name: "",
    role: "Head of Data",
    company: "",
    industry: "Media",
    rating: 5,
    verified: false,
  },
];
