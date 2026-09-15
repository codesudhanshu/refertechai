// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH
// Verify before this file ships: every `client`, `challenge`, `solution` and
// `metric` below. Client names are deliberately generic descriptors rather than
// real organisations, and no metric here has been measured.
// Nothing in this file has been confirmed against real engagements.

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
    slug: "payments-fraud-triage",
    client: "Regional payments platform",
    industry: "financial-services",
    challenge:
      "Every flagged transaction went to a human reviewer, and the queue grew faster than the team could clear it.",
    solution:
      "An agent that gathers the context a reviewer would collect manually, drafts a recommendation with its reasoning, and escalates anything it is not confident about.",
    metric: { value: "Example", label: "placeholder metric" },
    services: ["data-ai-analytics", "cloud-infrastructure"],
  },
  {
    slug: "clinic-intake-automation",
    client: "Multi-site clinic group",
    industry: "healthcare",
    challenge:
      "Patient intake forms arrived as scans and were re-typed into the records system by hand.",
    solution:
      "A document pipeline that extracts and validates each field, flags anything ambiguous for review, and writes clean records to the existing system.",
    metric: { value: "Example", label: "placeholder metric" },
    services: ["system-integration"],
  },
  {
    slug: "commerce-replatform",
    client: "Specialty retail brand",
    industry: "retail-ecommerce",
    challenge:
      "The storefront slowed sharply under campaign traffic and the merchandising team could not change anything without a developer.",
    solution:
      "A rebuilt storefront with a performance budget enforced in CI, plus merchandising tools the commercial team runs without engineering.",
    metric: { value: "Example", label: "placeholder metric" },
    services: ["digital-transformation", "cloud-infrastructure"],
  },
  {
    slug: "freight-visibility",
    client: "Freight forwarding operator",
    industry: "logistics",
    challenge:
      "Shipment status was scattered across partner portals and email, so customers called to ask where their freight was.",
    solution:
      "A visibility platform that pulls partner feeds into one timeline and raises an exception alert before a delivery misses its window.",
    metric: { value: "Example", label: "placeholder metric" },
    services: ["system-integration", "digital-transformation"],
  },
  {
    slug: "line-quality-inspection",
    client: "Components manufacturer",
    industry: "manufacturing",
    challenge:
      "Surface defects were caught at final inspection, after the cost of the part had already been incurred.",
    solution:
      "Camera-based inspection on the line itself, with borderline cases routed to an operator rather than auto-rejected.",
    metric: { value: "Example", label: "placeholder metric" },
    services: ["data-ai-analytics", "cloud-infrastructure"],
  },
  {
    slug: "archive-search",
    client: "Broadcast archive holder",
    industry: "media",
    challenge:
      "Decades of footage was stored but effectively unsearchable, so it was rarely reused.",
    solution:
      "Automated transcription and tagging across the archive, behind a search interface producers can actually use.",
    metric: { value: "Example", label: "placeholder metric" },
    services: ["system-integration", "digital-transformation"],
  },
];
