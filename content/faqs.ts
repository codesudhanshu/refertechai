// General FAQ for an IT recruitment firm. Describes how the business works.
//
// Confirm before launch: the fee model, guarantee window and turnaround times
// below should match how the business actually contracts.

export interface Faq {
  q: string;
  a: string;
}

export const generalFaqs: readonly Faq[] = [
  {
    q: "How does an engagement start?",
    a: "With a briefing call about the team, the stack and what the person will actually be doing — not a job description emailed over. That call is where most of the mis-hires get prevented, so we ask for someone technical to be on it.",
  },
  {
    q: "How many candidates will we see per role?",
    a: "Usually three to five. A recruiter sending you twenty CVs has not screened them, they have forwarded them. If we cannot fill a role we will say so rather than pad the pipeline to look busy.",
  },
  {
    q: "What is the fee model?",
    a: "Permanent placements are a percentage of fixed annual salary, payable on joining, with a replacement guarantee. Contract is a margin on the day rate. RPO is a monthly retainer. Whichever applies is agreed in writing before any work starts.",
  },
  {
    q: "What happens if a hire does not work out?",
    a: "Inside the agreed guarantee window we replace the role at no additional fee. The window is stated in the terms rather than left to interpretation afterwards.",
  },
  {
    q: "Do you recruit outside India?",
    a: "Yes. We place across India, the Gulf and international remote roles, and handle the contracting and compliance that comes with each. Where we do not have coverage for a market we will tell you rather than take the mandate anyway.",
  },
  {
    q: "How do you treat candidates?",
    a: "They are told the real salary band, the real reason the role is open and the real state of the team before they interview. Candidates who join knowing what they are joining tend to stay, which is what the guarantee actually depends on.",
  },
];
