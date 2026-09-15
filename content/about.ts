// Vision, mission, differentiators and process for an IT recruitment firm.
// Describes how the team works — no client or placement claims — so no
// placeholder banner is needed.

export interface Pillar {
  title: string;
  detail: string;
}

export const vision = {
  heading: "Our Vision",
  body: "A technology hiring market where a shortlist means something — where the three CVs on your desk have all been assessed by someone who understands the work, and where candidates are told the truth about the role before they leave the one they have.",
};

export const mission = {
  heading: "Our Mission",
  body: "To make technology hiring shorter and more accurate for employers, and more honest for candidates. Fewer CVs, better matched, with nothing hidden on either side of the table.",
};

export const differentiators: readonly Pillar[] = [
  {
    title: "Technical recruiters, not keyword matchers",
    detail:
      "Our recruiters specialise by technology area. They can tell the difference between someone who has listed a skill and someone who is good at it, which is why the shortlist is three names rather than thirty.",
  },
  {
    title: "We tell you when we cannot fill it",
    detail:
      "Some roles are priced wrong, scoped wrong or simply rare. We will say so early instead of running a search for six weeks to look busy.",
  },
  {
    title: "Candidates hear the truth",
    detail:
      "The real salary band, the real team situation, the real reason the role is open. Candidates who join knowing what they are joining stay, which is what the guarantee period actually depends on.",
  },
  {
    title: "Both sides of the table",
    detail:
      "Employers get a shorter, better-assessed pipeline. Candidates get roles that match what they said they wanted, not whatever mandate we are trying to close this month.",
  },
];

// Four-step hiring process.
export const process: readonly Pillar[] = [
  {
    title: "Brief",
    detail:
      "A conversation about the team, the stack and what the person will actually do — not a form.",
  },
  {
    title: "Source",
    detail:
      "Targeted search across active and passive candidates, approached directly.",
  },
  {
    title: "Assess",
    detail:
      "Technical and motivational screening, so your panel only meets people worth their time.",
  },
  {
    title: "Close",
    detail:
      "Offer, notice period, counter-offer handling, and a check-in after they start.",
  },
];
