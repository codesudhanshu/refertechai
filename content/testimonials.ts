// ⚠️ FABRICATED TESTIMONIALS — MUST BE REPLACED BEFORE THE SITE GOES LIVE ⚠️
//
// Every quote, name, job title and company below is invented, and the photos
// are Pexels stock of people who have no connection to this business.
//
// This is the most serious placeholder on the site. A quote with a face and a
// full name beside it reads to a visitor as a real person vouching for the
// company. Published as-is it is a fabricated endorsement, not a design
// placeholder — in most markets that is a consumer-protection problem as well
// as a credibility one.
//
// TO PUBLISH A REAL REVIEW:
//   1. Get written permission to quote the person, name them and name their
//      employer.
//   2. Replace `quote`, `name`, `role`, `company`, and put their own photo at
//      `image` (or leave it empty — the card falls back to initials).
//   3. Set `verified: true`.
//
// If real reviews are not ready by launch, delete the <Testimonials /> section
// from app/page.tsx rather than shipping this.

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Path under /public. Empty string falls back to initials. */
  image: string;
  rating: number;
  verified: boolean;
}

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "They spent the first two weeks telling us what was already working before proposing anything. The shortlist was three people and we hired two of them.",
    name: "Aarav Mehta",
    role: "Chief Technology Officer",
    company: "Northwind Payments",
    image: "/images/people/p1.jpg",
    rating: 5,
    verified: false,
  },
  {
    quote:
      "We had been through two agencies before this. The difference was honest notes on every candidate, including the reservations. Both hires are still with us.",
    name: "Priya Raghavan",
    role: "VP Engineering",
    company: "Lumen Retail Group",
    image: "/images/people/p2.jpg",
    rating: 5,
    verified: false,
  },
  {
    quote:
      "Contractors were on site inside a week with the paperwork already done. When the term ended the exit was as clean as the start.",
    name: "Daniel Okoye",
    role: "Head of Infrastructure",
    company: "Meridian Logistics",
    image: "/images/people/p3.jpg",
    rating: 5,
    verified: false,
  },
  {
    quote:
      "Our first security hire, in a team with nobody able to assess security people. They ran the screening and left us an interview loop we still use.",
    name: "Sara Lindqvist",
    role: "Chief Information Security Officer",
    company: "Atlas Components",
    image: "/images/people/p4.jpg",
    rating: 5,
    verified: false,
  },
  {
    quote:
      "They told us the role was priced below market in week one rather than searching for six weeks and blaming the candidates. We adjusted and filled it.",
    name: "Rohit Balan",
    role: "Director of Technology",
    company: "Cascade Energy",
    image: "/images/people/p5.jpg",
    rating: 5,
    verified: false,
  },
  {
    quote:
      "The graduate intake was the surprise. Fifteen trained on our stack, assessed before they reached us, productive far sooner than we expected.",
    name: "Hannah Weiss",
    role: "Head of Data",
    company: "Beacon Media",
    image: "/images/people/p6.jpg",
    rating: 5,
    verified: false,
  },
];
