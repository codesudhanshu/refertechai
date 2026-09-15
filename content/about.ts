// Vision, mission, differentiators and process. These describe how the team
// works and what it believes — no claims about clients or results — so no
// placeholder banner is needed.

export interface Pillar {
  title: string;
  detail: string;
}

export const vision = {
  heading: "Our Vision",
  body: "A market where technology advice comes without a vendor agenda attached, and where the organisation receiving it is left more capable than it was — not more dependent on the consultancy that gave it.",
};

export const mission = {
  heading: "Our Mission",
  body: "To give organisations both halves of what they actually need: advice that survives contact with implementation, and the people to keep it running after we leave. Recommend it, build it, then staff the team that owns it.",
};

// Four differentiators, written as flat statements rather than adjectives.
export const differentiators: readonly Pillar[] = [
  {
    title: "We advise, deliver and staff",
    detail:
      "Most consultancies stop at the recommendation. We implement what we advise and can staff the team that runs it afterwards, so nobody hands you a report and walks away.",
  },
  {
    title: "Senior people on the real work",
    detail:
      "No account-manager layer between you and the consultants. The person who scoped the engagement is accountable for delivering it.",
  },
  {
    title: "Independent of the vendors",
    detail:
      "We hold no reseller margin on any platform, so a recommendation is a recommendation. Where doing nothing is the right answer, we will say that too.",
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
