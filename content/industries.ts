// Capability statements per sector. These describe what the team can build,
// not clients served, so no placeholder banner is needed.

export interface Industry {
  slug: string;
  name: string;
  challenge: string;
  weBuild: string;
  outcome: string;
}

export const industries: readonly Industry[] = [
  {
    slug: "financial-services",
    name: "Financial services",
    challenge:
      "Core systems that cannot go down, regulators who need every decision explained, and customers who expect the speed of a consumer app.",
    weBuild:
      "Risk and fraud tooling, document-heavy onboarding flows, reconciliation automation, and customer portals that sit safely on top of legacy cores.",
    outcome:
      "Manual review queues shrink and every automated decision carries an audit trail.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    challenge:
      "Clinical data trapped in formats nobody can query, and privacy obligations that make every integration slow.",
    weBuild:
      "Interoperability layers, clinical document extraction, patient-facing portals, and scheduling systems designed around how clinics actually run.",
    outcome:
      "Staff spend less time re-keying records and more time on care.",
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & e-commerce",
    challenge:
      "Catalogue, stock and pricing spread across systems that disagree with each other, especially during peak.",
    weBuild:
      "Storefronts that stay fast under load, inventory sync, recommendation and search, and merchandising tools the commercial team can run themselves.",
    outcome:
      "One reliable view of stock and price, and a checkout that holds up on the busiest day of the year.",
  },
  {
    slug: "logistics",
    name: "Logistics & supply chain",
    challenge:
      "Shipment status lives in email, spreadsheets and a partner portal nobody has access to.",
    weBuild:
      "Track-and-trace platforms, partner integrations, route and load planning tools, and exception alerting that fires before a delivery is late.",
    outcome:
      "Fewer status-chasing calls and earlier warning when something slips.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    challenge:
      "Machine data that never reaches the people making decisions, and quality checks that depend on one experienced pair of eyes.",
    weBuild:
      "Shop-floor dashboards, sensor and OT data pipelines, computer-vision quality inspection, and maintenance scheduling driven by actual usage.",
    outcome:
      "Problems are caught on the line rather than at final inspection.",
  },
  {
    slug: "real-estate",
    name: "Real estate & construction",
    challenge:
      "Documents, drawings and approvals scattered across inboxes, with no reliable record of the current version.",
    weBuild:
      "Project and asset management platforms, document intelligence over contracts and drawings, tenant portals, and approval workflows.",
    outcome:
      "One current version of every document and a visible approval trail.",
  },
  {
    slug: "education",
    name: "Education",
    challenge:
      "Learning platforms built for a lecture hall, used by students on a phone, and administered on spreadsheets.",
    weBuild:
      "Learning platforms, assessment and feedback tooling, student information integrations, and analytics that flag disengagement early.",
    outcome:
      "Administrators get time back and students who are falling behind are visible sooner.",
  },
  {
    slug: "media",
    name: "Media & entertainment",
    challenge:
      "Large archives that are expensive to store, slow to search and hard to monetise.",
    weBuild:
      "Content platforms, automated tagging and transcription, rights and licensing workflows, and delivery pipelines built for scale.",
    outcome:
      "Archive material becomes searchable and reusable instead of dormant.",
  },
];
