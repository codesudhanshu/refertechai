// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH
// Verify before this file ships: every office, every team member, and every
// certification below.
//
// Nothing here has been confirmed. The rules applied while writing it:
//   - No invented street addresses. `address` is empty until someone fills it.
//   - No invented people. Team entries carry a role and an explicit
//     "To be confirmed" name, never a fabricated human.
//   - No claimed certifications. Each entry renders a visible "not yet
//     verified" state until `held` is set to true, so the section can be seen
//     in the design without asserting a credential the company may not hold.

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  timezone: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

export interface Certification {
  name: string;
  detail: string;
  held: boolean;
}

export const offices: readonly OfficeLocation[] = [
  {
    city: "Noida",
    country: "India",
    address: "",
    timezone: "IST · UTC+5:30",
  },
  {
    city: "Bengaluru",
    country: "India",
    address: "",
    timezone: "IST · UTC+5:30",
  },
  {
    city: "Dubai",
    country: "UAE",
    address: "",
    timezone: "GST · UTC+4",
  },
];

export const team: readonly TeamMember[] = [
  {
    name: "To be confirmed",
    role: "Founder & CEO",
    focus: "Technical direction and client partnerships",
  },
  {
    name: "To be confirmed",
    role: "Head of Engineering",
    focus: "Delivery, architecture and engineering standards",
  },
  {
    name: "To be confirmed",
    role: "Head of Talent",
    focus: "Staffing, executive search and candidate quality",
  },
  {
    name: "To be confirmed",
    role: "Head of AI",
    focus: "Agents, evaluation and applied machine learning",
  },
];

export const certifications: readonly Certification[] = [
  {
    name: "ISO 27001",
    detail: "Information security management",
    held: false,
  },
  {
    name: "SOC 2 Type II",
    detail: "Security, availability and confidentiality controls",
    held: false,
  },
  {
    name: "GDPR",
    detail: "EU data protection compliance",
    held: false,
  },
  {
    name: "MSME registered",
    detail: "Government of India registration",
    held: false,
  },
];
