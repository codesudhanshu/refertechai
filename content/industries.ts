// Recruiting coverage per sector. These describe the roles the team recruits
// for and the hiring constraints each sector brings — not clients served — so
// no placeholder banner is needed.

export interface Industry {
  slug: string;
  name: string;
  challenge: string;
  weRecruit: string;
  outcome: string;
}

export const industries: readonly Industry[] = [
  {
    slug: "financial-services",
    name: "Financial services",
    challenge:
      "Core systems that cannot go down, regulators who need every decision explained, and customers who expect the speed of a consumer app.",
    weRecruit:
      "Core banking and payments engineers, risk and fraud specialists, regulatory reporting analysts, and security staff cleared for regulated environments.",
    outcome:
      "Manual review queues shrink and every automated decision carries an audit trail.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    challenge:
      "Clinical data trapped in formats nobody can query, and privacy obligations that make every integration slow.",
    weRecruit:
      "Interoperability and HL7/FHIR engineers, clinical data specialists, and platform staff comfortable with patient-data handling obligations.",
    outcome:
      "Staff spend less time re-keying records and more time on care.",
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & e-commerce",
    challenge:
      "Catalogue, stock and pricing spread across systems that disagree with each other, especially during peak.",
    weRecruit:
      "Commerce platform engineers, search and recommendation specialists, and peak-season contract capacity that scales back down afterwards.",
    outcome:
      "One reliable view of stock and price, and a checkout that holds up on the busiest day of the year.",
  },
  {
    slug: "logistics",
    name: "Logistics & supply chain",
    challenge:
      "Shipment status lives in email, spreadsheets and a partner portal nobody has access to.",
    weRecruit:
      "Integration engineers, optimisation and routing specialists, and support staff who can cover operations that never stop.",
    outcome:
      "Fewer status-chasing calls and earlier warning when something slips.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    challenge:
      "Machine data that never reaches the people making decisions, and quality checks that depend on one experienced pair of eyes.",
    weRecruit:
      "OT and IT convergence engineers, industrial data specialists, and plant-side technology staff who will actually work on site.",
    outcome:
      "Problems are caught on the line rather than at final inspection.",
  },
  {
    slug: "real-estate",
    name: "Real estate & construction",
    challenge:
      "Documents, drawings and approvals scattered across inboxes, with no reliable record of the current version.",
    weRecruit:
      "Property technology engineers, document and workflow specialists, and analysts who understand how deals and approvals actually move.",
    outcome:
      "One current version of every document and a visible approval trail.",
  },
  {
    slug: "education",
    name: "Education",
    challenge:
      "Learning platforms built for a lecture hall, used by students on a phone, and administered on spreadsheets.",
    weRecruit:
      "Learning platform engineers, student information system specialists, and analysts working to academic-calendar deadlines.",
    outcome:
      "Administrators get time back and students who are falling behind are visible sooner.",
  },
  {
    slug: "media",
    name: "Media & entertainment",
    challenge:
      "Large archives that are expensive to store, slow to search and hard to monetise.",
    weRecruit:
      "Streaming and content platform engineers, media asset specialists, and rights and licensing technologists.",
    outcome:
      "Archive material becomes searchable and reusable instead of dormant.",
  },
];
