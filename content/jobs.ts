// PLACEHOLDER DATA — REPLACE BEFORE LAUNCH
// Verify before this file ships: every `title`, `team`, `location` and `type`
// below. Advertising a role that is not open wastes candidates' time and is a
// factual claim about the business.
// Replace with real openings, or set this array to [] — the careers page
// handles an empty list and shows a speculative-application message instead.

export interface Job {
  title: string;
  team: string;
  location: string;
  type: string;
}

export const jobs: readonly Job[] = [
  {
    title: "Senior AI Engineer",
    team: "AI",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Full-Stack Engineer",
    team: "Product",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Cloud & Platform Engineer",
    team: "Infrastructure",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Engineering Manager",
    team: "Product",
    location: "Remote",
    type: "Full-time",
  },
];
