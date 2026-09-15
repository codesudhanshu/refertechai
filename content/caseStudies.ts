// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH
// Verify before this file ships: every `client`, `challenge`, `solution` and
// `metric` below. Client names are generic descriptors rather than real
// organisations, and no metric here has been measured.
// Nothing in this file has been confirmed against real mandates.

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  metric: CaseStudyMetric;
  services: readonly string[];
}

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "platform-team-buildout",
    client: "Regional payments platform",
    industry: "financial-services",
    challenge:
      "A platform team of four needed to reach fourteen in two quarters, and internal recruiters were spending their week scheduling rather than sourcing.",
    solution:
      "Embedded RPO recruiters running sourcing, screening and coordination, with the engineering panel involved only at final stage.",
    metric: { value: "Example", label: "placeholder metric" },
    services: ["rpo", "permanent-it-recruitment"],
  },
  {
    slug: "cto-search",
    client: "Healthcare software provider",
    industry: "healthcare",
    challenge:
      "A confidential leadership replacement that could not be advertised while the incumbent was still in post.",
    solution:
      "Retained executive search with a mapped market, direct approach and candidates under NDA before the client was named.",
    metric: { value: "Example", label: "placeholder metric" },
    services: ["executive-search"],
  },
  {
    slug: "peak-season-contractors",
    client: "Specialty retail group",
    industry: "retail-ecommerce",
    challenge:
      "Engineering capacity needed to double for a four-month peak, with no appetite for permanent headcount afterwards.",
    solution:
      "Contract staffing on our payroll with contracting and compliance handled, and a clean exit at term end.",
    metric: { value: "Example", label: "placeholder metric" },
    services: ["contract-staffing", "staff-augmentation"],
  },
  {
    slug: "graduate-intake",
    client: "Logistics technology operator",
    industry: "logistics",
    challenge:
      "Experienced engineers on their stack were scarce and expensive, but the actual requirement was aptitude rather than years.",
    solution:
      "Hire, train and deploy: aptitude screening, a twelve-week curriculum on their stack, then deployment behind assessment gates.",
    metric: { value: "Example", label: "placeholder metric" },
    services: ["hire-train-deploy"],
  },
  {
    slug: "security-hiring",
    client: "Components manufacturer",
    industry: "manufacturing",
    challenge:
      "A first security hire, in a team with nobody able to assess security candidates technically.",
    solution:
      "Specialist screening plus an interview loop designed for the client's panel to use on every subsequent security hire.",
    metric: { value: "Example", label: "placeholder metric" },
    services: ["permanent-it-recruitment", "background-verification"],
  },
  {
    slug: "inclusive-pipeline",
    client: "Broadcast media group",
    industry: "media",
    challenge:
      "A diverse application pipeline that produced the same hiring profile every time it reached offer stage.",
    solution:
      "Job descriptions rewritten, structured scoring introduced, and stage-by-stage funnel reporting to show where candidates were dropping out.",
    metric: { value: "Example", label: "placeholder metric" },
    services: ["diversity-hiring", "rpo"],
  },
];
