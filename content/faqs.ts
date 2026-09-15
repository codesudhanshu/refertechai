// General FAQ shown on the home page. Describes how the team works — no
// client claims, so no placeholder banner is needed.
//
// One exception worth checking: the engagement-length and pricing answers
// should match how the business actually contracts.

export interface Faq {
  q: string;
  a: string;
}

export const generalFaqs: readonly Faq[] = [
  {
    q: "How do engagements usually start?",
    a: "With a conversation about the problem, not a proposal. If it looks like a fit, the next step is a short scoping exercise that produces a written plan with a scope, a sequence and a cost. You own that document whether or not you continue with us.",
  },
  {
    q: "Do you work with our existing team, or replace it?",
    a: "Whichever is more useful. We can own a piece of work end to end, or embed alongside your engineers where the momentum is needed. What we do not do is work in a way your team cannot take over later.",
  },
  {
    q: "What does the engagement model look like?",
    a: "Three options. A dedicated team for ongoing product work, a fixed scope for well-defined projects, and staff augmentation when you need specific skills for a period. The right one depends on how settled the requirements are.",
  },
  {
    q: "Who owns the code and the IP?",
    a: "You do. Source, infrastructure definitions and documentation are yours, in your repositories, from the first commit rather than at handover.",
  },
  {
    q: "How do you handle a project where the requirements change?",
    a: "By expecting it. Work runs in short cycles with something reviewable at the end of each one, so a change of direction costs a cycle rather than a quarter.",
  },
  {
    q: "What happens after launch?",
    a: "That depends on what you want. Some clients take over entirely, with runbooks and a handover period. Others keep us on for maintenance and the next phase of work. We plan for the first case regardless.",
  },
];
