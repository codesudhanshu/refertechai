// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH
//
// These are recruitment mandates. Verify before this file ships: every
// `client`, `roles`, `brief`, `approach` and every metric `value`.
//
// Client names are generic sector descriptors, not real organisations. Metric
// values are all "—" on purpose: a made-up time-to-fill or retention figure is
// a factual claim about the business, and those are the numbers buyers
// actually compare. Fill them in from your ATS before launch.
//
// The metric LABELS are real and are the ones worth reporting, so the cards
// show the right shape while the numbers are pending.

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  /** What was being hired, e.g. "12 × Platform Engineers". */
  roles: string;
  /** Type of engagement, shown as a chip. */
  engagement: string;
  brief: string;
  approach: string;
  metrics: readonly CaseMetric[];
  services: readonly string[];
}

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "platform-team-buildout",
    client: "Regional payments platform",
    industry: "financial-services",
    roles: "10 × Platform Engineers, 2 × SRE Leads",
    engagement: "Embedded RPO",
    brief:
      "A platform team of four had to reach fourteen inside two quarters. The internal recruiter was spending the week scheduling rather than sourcing, and engineering was losing a day a week to first-round screens.",
    approach:
      "Two embedded recruiters took over sourcing, screening and coordination under the client's employer brand. Engineering only met candidates at final stage, against an interview kit we built with their tech lead.",
    metrics: [
      { value: "—", label: "Days to first shortlist" },
      { value: "—", label: "Roles filled" },
      { value: "—", label: "Still in seat at 12 months" },
    ],
    services: ["rpo", "permanent-it-recruitment"],
  },
  {
    slug: "cto-search",
    client: "Healthcare software provider",
    industry: "healthcare",
    roles: "1 × Chief Technology Officer",
    engagement: "Retained executive search",
    brief:
      "A confidential leadership replacement that could not be advertised while the incumbent was still in post, in a market where most credible candidates were not looking.",
    approach:
      "Mapped the relevant leadership market, approached directly and discreetly, and kept the client unnamed until candidates were under NDA. Referenced with former direct reports, not just nominated referees.",
    metrics: [
      { value: "—", label: "Weeks brief to offer" },
      { value: "—", label: "Candidates presented" },
      { value: "—", label: "Offer accepted" },
    ],
    services: ["executive-search"],
  },
  {
    slug: "peak-season-contractors",
    client: "Specialty retail group",
    industry: "retail-ecommerce",
    roles: "8 × Engineers, 3 × QA",
    engagement: "Contract staffing",
    brief:
      "Engineering capacity had to double for a four-month peak, with no appetite for permanent headcount once it passed.",
    approach:
      "Contractors placed on our payroll with contracting, invoicing and statutory compliance handled end to end, working hours agreed before placement, and a clean exit scheduled at term end.",
    metrics: [
      { value: "—", label: "Days to first start" },
      { value: "—", label: "Contractors placed" },
      { value: "—", label: "Extended past term" },
    ],
    services: ["contract-staffing", "staff-augmentation"],
  },
  {
    slug: "graduate-intake",
    client: "Logistics technology operator",
    industry: "logistics",
    roles: "15 × Graduate Engineers",
    engagement: "Hire, train & deploy",
    brief:
      "Experienced engineers on their stack were scarce and priced above budget, but the actual requirement was aptitude rather than years of experience.",
    approach:
      "Aptitude-based screening, a twelve-week curriculum built around their stack and standards, and assessment gates before anyone was deployed. Conversion to the client's payroll after the agreed term.",
    metrics: [
      { value: "—", label: "Trainees deployed" },
      { value: "—", label: "Passed assessment gates" },
      { value: "—", label: "Converted to permanent" },
    ],
    services: ["hire-train-deploy"],
  },
  {
    slug: "first-security-hire",
    client: "Components manufacturer",
    industry: "manufacturing",
    roles: "1 × Security Engineer",
    engagement: "Permanent + verification",
    brief:
      "A first security hire into a team with nobody able to assess security candidates technically, and a board that wanted the appointment verified properly.",
    approach:
      "Specialist screening, an interview loop the client's panel could reuse for every subsequent security hire, and full employment, education and reference verification before the offer went out.",
    metrics: [
      { value: "—", label: "Weeks to offer" },
      { value: "—", label: "Candidates interviewed" },
      { value: "—", label: "Verification findings" },
    ],
    services: ["permanent-it-recruitment", "background-verification"],
  },
  {
    slug: "inclusive-pipeline",
    client: "Broadcast media group",
    industry: "media",
    roles: "6 × Engineering roles",
    engagement: "Diversity hiring + RPO",
    brief:
      "A diverse application pipeline that produced the same hiring profile every time it reached offer stage. The funnel was being measured at the top only.",
    approach:
      "Job descriptions rewritten to stop capable people self-deselecting, structured scoring introduced across the panel, and stage-by-stage funnel reporting so drop-off became visible.",
    metrics: [
      { value: "—", label: "Shortlist mix shift" },
      { value: "—", label: "Roles filled" },
      { value: "—", label: "Offer-stage mix shift" },
    ],
    services: ["diversity-hiring", "rpo"],
  },
];
