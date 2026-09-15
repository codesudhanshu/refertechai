// Hero carousel slides. Each is a capability statement, not a claim about a
// past engagement, so no placeholder banner is needed.
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
    id: "consulting",
    title: "IT consulting that ends in",
    highlight: "a working system.",
    lead: "Strategy, cloud, security and data advisory — delivered by the same people who implement it, so the recommendation and the result are the same team's problem.",
    primary: { label: "Start a project", href: "/contact" },
    secondary: { label: "Our services", href: "/services" },
    image: {
      src: "/images/engineering.jpg",
      alt: "Engineer working at a multi-monitor workstation",
    },
  },
  {
    id: "cloud",
    title: "Cloud and infrastructure",
    highlight: "without the surprise invoice.",
    lead: "Migration, infrastructure as code and ongoing FinOps review — environments you can rebuild from a repo and a bill whose three largest lines you can explain.",
    primary: { label: "Talk to us", href: "/contact" },
    secondary: { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
    image: {
      src: "/images/network.jpg",
      alt: "Abstract visualisation of a connected network",
    },
  },
  {
    id: "security",
    title: "Security advice that names",
    highlight: "what to fix first.",
    lead: "Posture assessment, threat modelling and ISO 27001, SOC 2 and GDPR readiness — findings ranked by likelihood and cost to fix, not by severity label.",
    primary: { label: "Request an assessment", href: "/contact" },
    secondary: { label: "Cybersecurity Consulting", href: "/services/cybersecurity-consulting" },
    image: {
      src: "/images/network.jpg",
      alt: "Abstract visualisation of a secured network",
    },
  },
  {
    id: "staffing",
    title: "Engineers screened by",
    highlight: "people who do the work.",
    lead: "Permanent, contract and executive hiring for technology roles, plus RPO and background verification — so your panel only meets candidates worth their time.",
    primary: { label: "Hire talent", href: "/hire" },
    secondary: { label: "How hiring works", href: "/hire" },
    image: {
      src: "/images/engineering.jpg",
      alt: "Engineers collaborating in an office",
    },
  },
];
