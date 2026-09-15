// Hiring and staffing engagement models. Describes what is offered, not who
// has been placed, so no placeholder banner is needed.

export interface HiringModel {
  slug: string;
  name: string;
  detail: string;
  bestFor: string;
  includes: readonly string[];
}

export const hiringModels: readonly HiringModel[] = [
  {
    slug: "permanent",
    name: "Permanent hiring",
    detail:
      "Full-time engineers, designers and technical leads placed on your payroll. Screened technically before they reach your panel, so your team interviews people who can actually do the job.",
    bestFor: "Core team roles you expect to keep for years",
    includes: [
      "Technical screening by working engineers",
      "Structured interview kit for your panel",
      "Reference and background verification",
      "Replacement guarantee within the agreed window",
    ],
  },
  {
    slug: "contract",
    name: "Contract & temporary staffing",
    detail:
      "Engineers for a defined period — a delivery push, a migration, a parental-leave gap. They work your process and hand over cleanly when the term ends.",
    bestFor: "Fixed-duration capacity without a permanent headcount",
    includes: [
      "Availability within days for common stacks",
      "Time-zone overlap agreed before placement",
      "Compliance and contracting handled end to end",
      "Extension or conversion to permanent at any point",
    ],
  },
  {
    slug: "executive-search",
    name: "Executive search",
    detail:
      "Engineering managers, heads of platform, CTOs. Roles where a wrong hire costs a year, so the process is slower, more discreet and more thorough.",
    bestFor: "Leadership roles that set technical direction",
    includes: [
      "Confidential mapping of the relevant market",
      "Direct approach rather than job-board sourcing",
      "Structured assessment against your actual challenges",
      "Support through offer, notice period and onboarding",
    ],
  },
  {
    slug: "rpo",
    name: "Recruitment process outsourcing",
    detail:
      "We take on sourcing, screening and coordination as an extension of your team, and involve your engineers only where their judgment is genuinely needed.",
    bestFor: "Hiring volume that outgrows your internal capacity",
    includes: [
      "Dedicated recruiters embedded with your team",
      "Your employer brand and tone, not ours",
      "Pipeline reporting you can actually act on",
      "Interview-loop design and panel training",
    ],
  },
  {
    slug: "background-verification",
    name: "Background verification",
    detail:
      "Employment history, education, identity and reference checks completed before an offer is signed rather than discovered afterwards.",
    bestFor: "Regulated industries and any senior or privileged role",
    includes: [
      "Employment and education verification",
      "Identity and address checks",
      "Reference calls with prior managers",
      "Written report with anything unresolved flagged clearly",
    ],
  },
  {
    slug: "diversity-hiring",
    name: "Diversity hiring",
    detail:
      "Widening the top of the funnel and removing the parts of a process that quietly filter people out. Measured on who gets hired, not on how many were sourced.",
    bestFor: "Teams that want the pipeline to actually change",
    includes: [
      "Sourcing beyond the usual referral networks",
      "Job descriptions rewritten to stop self-deselection",
      "Structured, consistently scored interviews",
      "Funnel reporting by stage so drop-off is visible",
    ],
  },
];
