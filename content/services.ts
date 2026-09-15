// IT recruitment services. ReferTech AI places technology talent — it does
// not build software, run migrations or deliver IT projects. Nothing here
// should describe technical delivery work.
//
// These describe what is offered, not who has been placed, so no placeholder
// banner is needed.

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  includes: readonly string[];
  /** Roles and skills this service typically covers. */
  technologies: readonly string[];
  faqs: readonly ServiceFaq[];
}

export const services: readonly Service[] = [
  {
    slug: "permanent-it-recruitment",
    title: "Permanent IT Recruitment",
    summary:
      "Full-time technology hires, screened against your stack before they reach your panel.",
    description:
      "Most recruiters match keywords on a CV. Ours are specialists who understand the difference between someone who has used a technology and someone who is good at it. You get a short list with honest notes instead of a long list that wastes your engineers' afternoons.",
    includes: [
      "Role scoping against your actual stack, team and seniority need",
      "Targeted sourcing across active and passive candidates",
      "Screening by recruiters who specialise in that technology area",
      "Structured interview kits so your panel assesses consistently",
      "Offer negotiation, notice-period management and counter-offer handling",
      "Replacement guarantee inside the agreed window",
    ],
    technologies: [
      "Software engineering",
      "DevOps & SRE",
      "Data & analytics",
      "Cloud & infrastructure",
      "Cybersecurity",
      "QA & testing",
    ],
    faqs: [
      {
        q: "How many candidates will we see?",
        a: "Usually three to five for a standard role. Sending twenty means we have not screened them. If we cannot fill a role we will tell you rather than pad the pipeline.",
      },
      {
        q: "What is the fee model?",
        a: "A percentage of fixed annual salary, payable on joining, with a replacement guarantee. The exact rate depends on seniority and volume and is agreed in writing before we start.",
      },
      {
        q: "What if the hire leaves quickly?",
        a: "Inside the agreed guarantee window we replace the role at no additional fee. The window is stated in the terms, not left vague.",
      },
    ],
  },
  {
    slug: "contract-staffing",
    title: "Contract & Temporary Staffing",
    summary:
      "Technology contractors for a defined period, with contracting and compliance handled end to end.",
    description:
      "For a delivery push, a migration, a parental-leave gap or a budget that will not carry permanent headcount. We place contractors on our payroll or yours, handle the paperwork so they can start rather than wait, and manage extensions and exits cleanly.",
    includes: [
      "Availability within days for common technology skills",
      "Contracting, invoicing and statutory compliance managed for you",
      "Time-zone and working-hours overlap agreed before placement",
      "Timesheet and approval workflow, with consolidated invoicing",
      "Extension, conversion to permanent or clean exit at term end",
      "Cover arranged if a contractor becomes unavailable mid-term",
    ],
    technologies: [
      "Project-based engineering",
      "Migration & upgrade teams",
      "Support & maintenance",
      "Specialist short-term skills",
      "Backfill cover",
      "Peak-season capacity",
    ],
    faqs: [
      {
        q: "Who employs the contractor?",
        a: "Either us or you, depending on how you want to run it. On our payroll we carry the employment obligations, statutory contributions and compliance.",
      },
      {
        q: "How quickly can someone start?",
        a: "For mainstream skills, days rather than weeks. Narrow specialisms take longer and we will say so before you plan around a date.",
      },
      {
        q: "Can a contractor convert to permanent?",
        a: "Yes, and it is common. Conversion terms are agreed at the start so there is no argument about it later.",
      },
    ],
  },
  {
    slug: "contract-to-hire",
    title: "Contract-to-Hire",
    summary:
      "A working trial period before either side commits to a permanent offer.",
    description:
      "Interviews are a poor predictor of how someone works. Contract-to-hire puts the candidate in the real role for an agreed period, so the permanent decision is made on evidence rather than on how well they interviewed.",
    includes: [
      "Agreed trial length and conversion terms set before day one",
      "Candidate briefed that the role is contract-to-hire, never sprung on them",
      "Contractor payroll and compliance handled during the trial",
      "Structured check-ins at the midpoint and before conversion",
      "Pre-agreed conversion fee with no surprise uplift",
      "Clean exit and replacement if either side decides against it",
    ],
    technologies: [
      "Engineering roles",
      "Platform & DevOps",
      "Data roles",
      "Security roles",
      "Technical leads",
      "Support functions",
    ],
    faqs: [
      {
        q: "How long is the trial?",
        a: "Three to six months is typical. Long enough to see real work, short enough that a good candidate does not walk away over the uncertainty.",
      },
      {
        q: "Does the candidate know?",
        a: "Always, from the first conversation. Placing someone into a trial they were not told about is how you lose good people and your reputation with them.",
      },
      {
        q: "What does conversion cost?",
        a: "A fee agreed up front, usually reducing the longer the contract period runs. It is in the terms before anyone starts.",
      },
    ],
  },
  {
    slug: "executive-search",
    title: "Executive & Leadership Search",
    summary:
      "CTOs, engineering directors and heads of platform — roles where a wrong hire costs a year.",
    description:
      "Senior technology hires are rarely found on job boards. They are approached, discreetly, by someone who can hold a credible conversation about the role. The process is slower and more thorough because the cost of getting it wrong is measured in quarters.",
    includes: [
      "Confidential mapping of the relevant leadership market",
      "Direct, discreet approach rather than advertising the role",
      "Assessment against your actual technical and organisational challenges",
      "Structured referencing with prior peers and direct reports",
      "Support through offer, notice period and counter-offer",
      "Onboarding check-ins through the first six months",
    ],
    technologies: [
      "CTO & VP Engineering",
      "Engineering Director",
      "Head of Platform",
      "Head of Data",
      "CISO & security leadership",
      "Delivery & programme leadership",
    ],
    faqs: [
      {
        q: "How long does a search take?",
        a: "Eight to sixteen weeks from brief to offer for most leadership roles. Anyone promising a CTO in three weeks is sending you their existing bench.",
      },
      {
        q: "Is the search confidential?",
        a: "Yes, including from the market. Where the role is a replacement, the mandate can run without naming you until a candidate is under NDA.",
      },
      {
        q: "Do you work on retainer?",
        a: "For leadership search, usually. Retained work buys dedicated research time, which is what actually finds people who are not looking.",
      },
    ],
  },
  {
    slug: "rpo",
    title: "Recruitment Process Outsourcing",
    summary:
      "Recruiters embedded with your team when hiring volume outgrows internal capacity.",
    description:
      "When you are hiring twenty engineers rather than two, agency-by-agency fees stop making sense. RPO puts dedicated recruiters inside your process, using your employer brand and your tone, and involves your engineers only where their judgment is genuinely needed.",
    includes: [
      "Dedicated recruiters working as an extension of your team",
      "Your employer brand and tone of voice, not ours",
      "Sourcing, screening, scheduling and candidate communication",
      "Interview-loop design and panel training",
      "Pipeline and funnel reporting you can actually act on",
      "Monthly review against agreed hiring targets",
    ],
    technologies: [
      "Volume engineering hiring",
      "Multi-location hiring",
      "Campus & early careers",
      "Niche skill campaigns",
      "Employer brand support",
      "Hiring process design",
    ],
    faqs: [
      {
        q: "When does RPO make more sense than per-role fees?",
        a: "Usually past eight to ten hires in a period, or when the coordination load is the bottleneck rather than the sourcing.",
      },
      {
        q: "Do candidates know they are talking to an agency?",
        a: "They know they are talking to a recruiter working for you. We represent your brand, and we do not misrepresent who we are if asked.",
      },
      {
        q: "What happens at the end of the engagement?",
        a: "You keep the process, the templates, the interview kits and the pipeline. The point is to leave your team more capable of hiring, not dependent on us.",
      },
    ],
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    summary:
      "Technology professionals who join your team, work your process and report to your leads.",
    description:
      "You keep the roadmap and the standards; we supply the people. Augmented staff sit in your standups, your repositories and your review process rather than working as a separate outsourced unit with its own agenda.",
    includes: [
      "Skills matched to your existing stack and ways of working",
      "Direct reporting into your leads, no account-manager layer",
      "Ramp-up support through the first weeks",
      "Flexible scaling up or down as the work changes",
      "Payroll, compliance and contracting handled by us",
      "Replacement cover if a placement is not working out",
    ],
    technologies: [
      "Engineering capacity",
      "Platform & infrastructure",
      "Data engineering",
      "QA & automation",
      "Support engineering",
      "Technical writing",
    ],
    faqs: [
      {
        q: "How is this different from contract staffing?",
        a: "Mostly in how it is managed. Augmented staff are embedded in your team long-term against a capability gap; contractors are usually engaged against a defined piece of work and a date.",
      },
      {
        q: "Who manages them day to day?",
        a: "Your leads. We handle the employment relationship and step in only if something needs resolving on that side.",
      },
      {
        q: "Can we scale the team down?",
        a: "Yes, with the notice period agreed in the contract. Flexibility in both directions is the reason people use this model.",
      },
    ],
  },
  {
    slug: "background-verification",
    title: "Background Verification",
    summary:
      "Employment, education, identity and reference checks completed before an offer is signed.",
    description:
      "Most bad hires that make it through were verifiable beforehand. We check what a candidate has claimed — previous employment, qualifications, identity, references — and report anything unresolved plainly rather than burying it.",
    includes: [
      "Employment history and dates verified with prior employers",
      "Education and professional qualification checks",
      "Identity and address verification",
      "Reference calls with former managers, not just nominated referees",
      "Criminal record and database checks where legally permitted",
      "Written report with every discrepancy flagged clearly",
    ],
    technologies: [
      "Employment verification",
      "Education verification",
      "Identity checks",
      "Reference checks",
      "Database screening",
      "Compliance reporting",
    ],
    faqs: [
      {
        q: "How long does verification take?",
        a: "Three to seven working days for a standard check. International history takes longer, and we give you an expected date rather than a vague estimate.",
      },
      {
        q: "Is candidate consent required?",
        a: "Yes, always, in writing before any check begins. Verification run without consent is not usable and not lawful.",
      },
      {
        q: "What if something comes back unclear?",
        a: "It is reported as unclear rather than as a pass or a fail. The hiring decision is yours; our job is to make sure you have the facts.",
      },
    ],
  },
  {
    slug: "diversity-hiring",
    title: "Diversity Hiring",
    summary:
      "Widening the pipeline and removing the parts of a process that quietly filter people out.",
    description:
      "Most diversity hiring stalls because the funnel is measured at the top and the process is never examined. We source beyond the usual referral networks and then look at where candidates actually drop out — which is often the job description or the interview loop, not the sourcing.",
    includes: [
      "Sourcing beyond referral networks and the same few employers",
      "Job descriptions rewritten to stop capable people self-deselecting",
      "Structured, consistently scored interviews",
      "Diverse interview panels where you have the people for it",
      "Funnel reporting by stage, so drop-off is visible",
      "Measured on who gets hired, not on who was sourced",
    ],
    technologies: [
      "Inclusive sourcing",
      "Job description review",
      "Structured interviewing",
      "Panel training",
      "Returnship programmes",
      "Funnel analytics",
    ],
    faqs: [
      {
        q: "Does this mean lowering the bar?",
        a: "No. It means removing the things that reject capable people for reasons unrelated to the job. A structured interview raises the bar because it stops decisions being made on rapport.",
      },
      {
        q: "Where do most programmes fail?",
        a: "At the interview stage, not sourcing. Plenty of companies bring in a diverse pipeline and then hire the same profile they always have.",
      },
      {
        q: "How do we know it is working?",
        a: "Stage-by-stage funnel data. If the mix at offer does not differ from the mix at application, the process is doing the filtering.",
      },
    ],
  },
  {
    slug: "hire-train-deploy",
    title: "Hire, Train & Deploy",
    summary:
      "Screened graduates trained on your stack, then deployed into your team.",
    description:
      "For roles where experienced talent is scarce or expensive, and the actual requirement is aptitude. We hire for capability, train on the specific technologies you use, and deploy people who are productive from the start rather than learning your stack on your time.",
    includes: [
      "Aptitude-based screening and technical assessment",
      "Training curriculum built around your stack and standards",
      "Trainer-led delivery with project work, not video courses",
      "Assessment gates before anyone is deployed to you",
      "Deployment with a defined ramp-up and mentoring period",
      "Conversion to your payroll after the agreed term",
    ],
    technologies: [
      "Graduate engineering",
      "Java & .NET",
      "JavaScript & frontend",
      "Cloud & DevOps foundations",
      "Data & analytics",
      "Testing & QA",
    ],
    faqs: [
      {
        q: "How long is the training?",
        a: "Typically eight to sixteen weeks depending on the stack and how far from job-ready the intake is.",
      },
      {
        q: "What if a trainee does not make the grade?",
        a: "They do not get deployed. Assessment gates exist so you are not the one discovering it.",
      },
      {
        q: "Who pays during training?",
        a: "We do. You pay on deployment, which is the point at which you get value.",
      },
    ],
  },
];
