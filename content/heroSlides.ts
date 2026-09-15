// Hero carousel slides for an IT recruitment firm. Each describes an offering,
// not a claim about a past mandate, so no placeholder banner is needed.
//
// `image` points at files in /public/images. Only two stock photos exist in
// this repo, so slides reuse them until real photography is supplied —
// content/README.md tracks that.

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
      src: "/images/engineering.jpg",
      alt: "Technology team working together in an office",
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
      src: "/images/network.jpg",
      alt: "Distributed technology team connected across locations",
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
      src: "/images/engineering.jpg",
      alt: "Senior technology leaders in discussion",
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
      src: "/images/network.jpg",
      alt: "Candidate reviewing opportunities",
    },
  },
];
