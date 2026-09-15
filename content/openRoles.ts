// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH
//
// These are CLIENT mandates shown to candidates, not internal ReferTech AI
// openings — those live in content/jobs.ts and appear on /careers.
//
// Every role below is illustrative. Advertising a role that is not open wastes
// candidates' time and damages the relationship the whole business depends on.
// The page renders a visible note while `verified` is false on any entry.
//
// Replace with real mandates, or set the array to [] — the page handles an
// empty list and invites speculative applications instead.

export interface OpenRole {
  id: string;
  title: string;
  discipline: string;
  location: string;
  type: "Permanent" | "Contract" | "Contract-to-hire";
  experience: string;
  skills: readonly string[];
  verified: boolean;
}

export const openRoles: readonly OpenRole[] = [
  {
    id: "senior-backend-java",
    title: "Senior Backend Engineer",
    discipline: "Software Engineering",
    location: "Bengaluru · Hybrid",
    type: "Permanent",
    experience: "6–9 years",
    skills: ["Java", "Spring Boot", "Microservices", "AWS"],
    verified: false,
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    discipline: "Cloud & DevOps",
    location: "Remote · India",
    type: "Contract",
    experience: "4–7 years",
    skills: ["Kubernetes", "Terraform", "AWS", "CI/CD"],
    verified: false,
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    discipline: "Data & AI",
    location: "Pune · Hybrid",
    type: "Permanent",
    experience: "3–6 years",
    skills: ["Python", "Snowflake", "dbt", "Airflow"],
    verified: false,
  },
  {
    id: "security-analyst",
    title: "Security Analyst",
    discipline: "Security",
    location: "Noida · On-site",
    type: "Permanent",
    experience: "2–5 years",
    skills: ["SIEM", "Incident Response", "Threat Hunting"],
    verified: false,
  },
  {
    id: "frontend-react",
    title: "Frontend Engineer",
    discipline: "Frontend & Mobile",
    location: "Remote · India",
    type: "Contract-to-hire",
    experience: "3–6 years",
    skills: ["React", "TypeScript", "Next.js"],
    verified: false,
  },
  {
    id: "engineering-manager",
    title: "Engineering Manager",
    discipline: "Leadership",
    location: "Gurugram · Hybrid",
    type: "Permanent",
    experience: "9–14 years",
    skills: ["Team leadership", "Delivery", "Hiring"],
    verified: false,
  },
  {
    id: "qa-automation",
    title: "QA Automation Engineer",
    discipline: "QA & Testing",
    location: "Chennai · Hybrid",
    type: "Permanent",
    experience: "3–6 years",
    skills: ["Selenium", "Playwright", "API testing"],
    verified: false,
  },
  {
    id: "dotnet-developer",
    title: ".NET Developer",
    discipline: "Software Engineering",
    location: "Dubai · On-site",
    type: "Contract",
    experience: "5–8 years",
    skills: [".NET Core", "C#", "Azure", "SQL Server"],
    verified: false,
  },
];
