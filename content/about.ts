// Vision, mission, differentiators and process. These describe how the team
// works and what it believes — no claims about clients or results — so no
// placeholder banner is needed.

export interface Pillar {
  title: string;
  detail: string;
}

export const vision = {
  heading: "Our Vision",
  body: "A market where the distance between a good technical idea and a working system is measured in weeks, not quarters — and where the team that built it can still explain every decision a year later.",
};

export const mission = {
  heading: "Our Mission",
  body: "To give ambitious teams both halves of what they actually need: engineers who ship, and the people to keep shipping after we leave. Build the system, then build the team that owns it.",
};

// Four differentiators, written as flat statements rather than adjectives.
export const differentiators: readonly Pillar[] = [
  {
    title: "We build and we staff",
    detail:
      "Most firms do one. Doing both means we screen engineers the way we would hire our own, and we scope projects knowing what it actually takes to staff them.",
  },
  {
    title: "Senior people on the real work",
    detail:
      "No account-manager layer between you and the engineers. The person who scoped the work is accountable for delivering it.",
  },
  {
    title: "We say no to the wrong build",
    detail:
      "If a database solves it, we will not sell you a blockchain. Turning down bad-fit work is cheaper for everyone than delivering it badly.",
  },
  {
    title: "Handover is the deliverable",
    detail:
      "Runbooks, documentation and a team that can operate the system without us. We plan for your independence from day one.",
  },
];

// Four-step delivery process.
export const process: readonly Pillar[] = [
  {
    title: "Discover",
    detail: "Start with the business, the people and the opportunity.",
  },
  {
    title: "Design",
    detail: "Turn the right idea into a clear product and technical path.",
  },
  {
    title: "Deliver",
    detail: "Build in focused cycles, with visibility at every step.",
  },
  {
    title: "Evolve",
    detail: "Measure, learn and keep moving after launch.",
  },
];
