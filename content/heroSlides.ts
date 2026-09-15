// Hero carousel slides for an IT recruitment firm. Each describes an offering,
// not a claim about a past mandate, so no placeholder banner is needed.
//
// `image` points at files in /public/images/hero. These are Pexels stock
// photos (Pexels License: free for commercial use, no attribution required).
// Replace with your own photography when you have it.

export interface HeroSlide {
  id: string;
  title: string;
  highlight: string;
  lead: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  image: { src: string; alt: string };
}

export const heroSlides: readonly HeroSlide[] = [
  {
    id: "recruitment",
    title: "IT recruitment where a shortlist",
    highlight: "actually means something.",
    lead: "Three or four names, each screened by a recruiter who understands the work — not thirty CVs forwarded in the hope one sticks.",
    primary: { label: "Hire talent", href: "/hire" },
    secondary: { label: "Our services", href: "/services" },
    image: {
      src: "/images/hero/recruitment.jpg",
      alt: "A hiring manager interviewing a candidate",
    },
  },
  {
    id: "contract",
    title: "Contract technology staff,",
    highlight: "ready in days.",
    lead: "Engineers, DevOps and data specialists for a delivery push or a gap in the team — with contracting, payroll and compliance handled end to end.",
    primary: { label: "Talk to us", href: "/contact" },
    secondary: { label: "Contract staffing", href: "/services/contract-staffing" },
    image: {
      src: "/images/hero/contract.jpg",
      alt: "Developers working together in an office",
    },
  },
  {
    id: "executive",
    title: "Leadership search for roles",
    highlight: "you cannot advertise.",
    lead: "CTOs, engineering directors and heads of platform — approached discreetly, assessed against your real challenges, referenced properly.",
    primary: { label: "Start a search", href: "/contact" },
    secondary: { label: "Executive search", href: "/services/executive-search" },
    image: {
      src: "/images/hero/executive.jpg",
      alt: "Senior leaders in a boardroom discussion",
    },
  },
  {
    id: "candidates",
    title: "Looking for your next role?",
    highlight: "We'll be straight with you.",
    lead: "The real salary band, the real reason the role is open, and feedback either way. Your CV goes nowhere without you approving it first.",
    primary: { label: "See open roles", href: "/jobs" },
    secondary: { label: "Send your CV", href: "/contact" },
    image: {
      src: "/images/hero/candidates.jpg",
      alt: "A professional reviewing opportunities on a laptop",
    },
  },
];
