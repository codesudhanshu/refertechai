// IT Consulting Solutions. These describe advisory, delivery and managed
// service offerings — not claims about past engagements — so no placeholder
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
  technologies: readonly string[];
  faqs: readonly ServiceFaq[];
}

export const services: readonly Service[] = [
  {
    slug: "it-strategy-advisory",
    title: "IT Strategy & Advisory",
    summary:
      "Independent technical direction for leadership teams making decisions they cannot easily reverse.",
    description:
      "Most costly technology decisions get made with incomplete information and a vendor in the room. We come in without a product to sell, assess what you actually have, and give you a written position you can act on — including the option of doing nothing.",
    includes: [
      "Current-state architecture and application portfolio review",
      "Technology roadmap sequenced against business milestones",
      "Build, buy or partner analysis with real cost modelling",
      "Vendor and platform selection, run as a fair evaluation",
      "IT budget review with the largest line items explained",
      "Written report your team can execute without us",
    ],
    technologies: [
      "Architecture review",
      "TCO modelling",
      "Vendor evaluation",
      "Roadmapping",
      "Due diligence",
      "Governance",
    ],
    faqs: [
      {
        q: "How long does an advisory engagement take?",
        a: "Most run two to six weeks depending on the size of the estate. Findings reach you as they emerge rather than only in a final presentation.",
      },
      {
        q: "Will you recommend your own delivery services?",
        a: "Only where it is genuinely the right answer, and we will say so explicitly. The report is written so another vendor or your own team can execute it.",
      },
      {
        q: "Do you work with our incumbent vendors?",
        a: "Yes. Replacing a working vendor is expensive and disruptive, so it is a recommendation of last resort rather than an opening position.",
      },
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    summary:
      "Modernisation programmes that change how work actually happens, not just which software it happens in.",
    description:
      "Transformation fails when it is treated as a software rollout. We start with the processes people actually follow, decide what should change and what should simply be automated, and sequence the work so the business keeps running while it happens.",
    includes: [
      "Process discovery across the teams doing the work today",
      "Legacy application assessment and modernisation sequencing",
      "Target operating model and integration architecture",
      "Phased migration plan with rollback at every stage",
      "Change management, training and adoption tracking",
      "Benefits measurement against the case that funded it",
    ],
    technologies: [
      "Process mapping",
      "Legacy modernisation",
      "Integration architecture",
      "Change management",
      "Migration planning",
      "Adoption analytics",
    ],
    faqs: [
      {
        q: "Can this happen without stopping the business?",
        a: "That is the constraint every plan is built around. Work runs in phases with a rollback at each one, so a bad phase costs a sprint rather than a quarter.",
      },
      {
        q: "What usually goes wrong?",
        a: "Adoption, not technology. Systems get delivered and people keep using the spreadsheet. That is why training and adoption tracking are part of the programme rather than an afterthought.",
      },
      {
        q: "How do we know it worked?",
        a: "The measures are agreed before the work starts and reported against afterwards. If a phase does not move them, that is worth knowing early.",
      },
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    summary:
      "Cloud strategy, migration and infrastructure management built so the deploy is boring and the bill is predictable.",
    description:
      "Cloud work is judged on the day something breaks and on the day the invoice arrives. We design foundations where environments are defined in code rather than remembered, rollback is one command, and the three largest cost lines are ones you can explain.",
    includes: [
      "Cloud readiness assessment and migration strategy",
      "Infrastructure as code, with staging that matches production",
      "CI/CD pipelines with automated checks and one-command rollback",
      "Monitoring, logging and alerting that pages on symptoms not noise",
      "Cost optimisation and ongoing FinOps review",
      "Runbooks and handover so your team can operate it",
    ],
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Terraform",
      "Kubernetes",
      "OpenTelemetry",
    ],
    faqs: [
      {
        q: "Do we have to move to the cloud?",
        a: "No. Some workloads are cheaper and safer where they are. Migration is proposed only when there is a specific cost or capability reason, and we show the numbers first.",
      },
      {
        q: "Can you take over an environment nobody documented?",
        a: "That is a common starting point. The first deliverable is usually a written map of what exists and what is at risk, before anything is changed.",
      },
      {
        q: "Who runs it afterwards?",
        a: "Whoever you want. We hand over with runbooks and working sessions, and can stay on for managed support if you would rather we did.",
      },
    ],
  },
  {
    slug: "cybersecurity-consulting",
    title: "Cybersecurity Consulting",
    summary:
      "Risk assessment, compliance readiness and security architecture for teams that cannot afford to find out the hard way.",
    description:
      "Security advice is only useful if it is specific. We assess your actual systems and your actual obligations, rank what we find by likelihood and cost rather than by severity label, and give you a remediation plan with an order of work.",
    includes: [
      "Security posture and vulnerability assessment",
      "Threat modelling against your real architecture",
      "Identity, access and least-privilege review",
      "Compliance readiness for ISO 27001, SOC 2 and GDPR",
      "Incident response planning and tabletop exercises",
      "Remediation roadmap ranked by risk and cost to fix",
    ],
    technologies: [
      "Threat modelling",
      "IAM review",
      "Penetration testing",
      "ISO 27001",
      "SOC 2",
      "GDPR",
    ],
    faqs: [
      {
        q: "Do you do the remediation as well as the assessment?",
        a: "We can, but the report is written to stand alone so your team or another provider can act on it. An assessment only we can fix is a sales document, not advice.",
      },
      {
        q: "We need a certification for a client. Can you get us there?",
        a: "We can run the readiness work — gap analysis, control design, evidence collection — up to the point of audit. The certificate itself comes from an accredited auditor, not from us.",
      },
      {
        q: "How disruptive is the assessment?",
        a: "The review itself is mostly documentation and interviews. Anything that touches production is scheduled with you and scoped in writing first.",
      },
    ],
  },
  {
    slug: "data-ai-analytics",
    title: "Data, AI & Analytics",
    summary:
      "Data platforms, reporting and applied AI that answer questions the business is actually asking.",
    description:
      "Most organisations have more data than insight. We build the pipelines and models that turn it into something decisions can rest on — and we are direct about where AI genuinely helps versus where a well-built report would do the job for a fraction of the cost.",
    includes: [
      "Data platform and warehouse architecture",
      "Pipeline engineering, quality checks and lineage",
      "Reporting and self-service analytics for business teams",
      "Applied AI and machine learning where it earns its cost",
      "Document extraction and process automation",
      "Model evaluation, monitoring and governance",
    ],
    technologies: [
      "Snowflake",
      "Postgres",
      "dbt",
      "Airflow",
      "Power BI",
      "Applied AI",
    ],
    faqs: [
      {
        q: "Do we need AI, or just better reporting?",
        a: "Usually better reporting first. AI on top of unreliable data produces confident wrong answers, which is worse than no answer. We will tell you which one you need.",
      },
      {
        q: "Does our data need cleaning before we start?",
        a: "No. Messy input is the normal case and the pipeline is built to handle it. Waiting for clean data is how these projects stall indefinitely.",
      },
      {
        q: "How do you keep a model honest over time?",
        a: "Evaluation sets drawn from your real cases, plus monitoring on drift and cost. You get a pass rate you can track, not a demo that worked once.",
      },
    ],
  },
  {
    slug: "system-integration",
    title: "System Integration",
    summary:
      "Connecting the systems you already run so data stops being re-keyed between them.",
    description:
      "Most of the time lost inside a business goes to moving information from one screen into another. We build the connective tissue between your ERP, CRM, finance and support systems so records stay consistent without anyone maintaining them by hand.",
    includes: [
      "Integration architecture and middleware selection",
      "API design, development and lifecycle management",
      "ERP, CRM and finance system integration",
      "Legacy system interfacing where no API exists",
      "Error handling, retries and reconciliation reporting",
      "Monitoring so a failed sync is noticed before month end",
    ],
    technologies: [
      "REST",
      "GraphQL",
      "Message queues",
      "ETL",
      "Webhooks",
      "Middleware",
    ],
    faqs: [
      {
        q: "Our legacy system has no API. Is it still possible?",
        a: "Usually. Database-level integration, file exchange and screen-level automation are all options. Which one is right depends on how often the data changes and how much it matters if a sync fails.",
      },
      {
        q: "What happens when an integration breaks?",
        a: "It stops and alerts rather than silently writing bad data. Every run is logged, so you can see which step failed and what was left half-done.",
      },
      {
        q: "Do you replace our existing systems?",
        a: "No. The point of integration is to make what you have work together, which is nearly always cheaper than replacing any of it.",
      },
    ],
  },
  {
    slug: "managed-it-support",
    title: "Managed IT Support",
    summary:
      "Ongoing support, monitoring and optimisation for the systems that have to be up tomorrow morning.",
    description:
      "Once something is live it needs someone accountable for it at eight in the morning. We provide that cover with defined response times, proper escalation, and a monthly review that tells you what broke, what was fixed and what is likely to break next.",
    includes: [
      "Service desk with agreed response and resolution times",
      "Proactive monitoring and patch management",
      "Application and infrastructure support",
      "Backup, disaster recovery and restore testing",
      "Monthly service review with an actual trend line",
      "Continuous improvement backlog, not just ticket closing",
    ],
    technologies: [
      "Service desk",
      "SLA management",
      "Monitoring",
      "Patch management",
      "Backup & DR",
      "ITIL practices",
    ],
    faqs: [
      {
        q: "What response times do you offer?",
        a: "They are agreed per engagement against how much downtime actually costs you. We would rather commit to a time we can hold than quote one that looks good on a proposal.",
      },
      {
        q: "Do you support systems you did not build?",
        a: "Yes. That starts with a discovery period so we understand the estate before taking accountability for it.",
      },
      {
        q: "Is this just ticket closing?",
        a: "No. A support contract that only closes tickets guarantees the same tickets next month. The monthly review exists to reduce them.",
      },
    ],
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    summary:
      "Vetted engineers who join your team, work your process and ship in your codebase.",
    description:
      "Sometimes you know exactly what needs building and simply need more hands that are already good at it. We place engineers into your existing team — your standups, your repo, your review process — rather than running a parallel project on the side. You keep the roadmap.",
    includes: [
      "Role scoping against your actual stack, not a generic JD",
      "Technical screening by people who do the work themselves",
      "Shortlist in days, not weeks, with honest notes on each candidate",
      "Trial period before anyone becomes a long-term commitment",
      "Direct reporting into your leads, no account-manager layer",
      "Replacement cover if a placement is not working out",
    ],
    technologies: ["React", "Node.js", "Python", "Java", "AWS", "Kubernetes"],
    faqs: [
      {
        q: "How fast can someone start?",
        a: "A shortlist usually reaches you within a week for common stacks, longer for narrow specialisms. We would rather be slow and right than fast and wrong.",
      },
      {
        q: "Do they work our hours?",
        a: "Yes. Overlap with your team is agreed before placement, not negotiated afterwards.",
      },
      {
        q: "What if the fit is wrong?",
        a: "There is a trial window on every placement. If it is not working, we replace at our cost rather than asking you to absorb it.",
      },
    ],
  },
  {
    slug: "tech-talent-staffing",
    title: "Tech Talent & Staffing",
    summary:
      "Permanent, contract and leadership hiring for teams that run technical systems.",
    description:
      "Hiring for technology roles is hard because most recruiters cannot tell a strong engineer from a strong interviewee. We can, because we work in these systems ourselves. That means fewer, better candidates and far less of your team's time spent screening people who were never going to make it.",
    includes: [
      "Permanent, contract and contract-to-hire placements",
      "Leadership and executive search for technology roles",
      "Recruitment process outsourcing when hiring volume spikes",
      "Background and reference verification before an offer goes out",
      "Structured interview kits so your panel assesses consistently",
      "Market and salary intelligence for the roles you are opening",
    ],
    technologies: [
      "Engineering hiring",
      "Leadership search",
      "Contract staffing",
      "RPO",
      "Background verification",
      "Interview design",
    ],
    faqs: [
      {
        q: "How is this different from a normal recruitment agency?",
        a: "Our screening is done by people who work in these systems. A candidate reaches your panel having already been assessed technically, so your team spends time only on the ones worth meeting.",
      },
      {
        q: "Do you handle volume hiring?",
        a: "Yes, through RPO. We take on the sourcing, screening and coordination load and keep your team involved only where their judgment is needed.",
      },
      {
        q: "Can you help us design the interview itself?",
        a: "Often the fastest win. A badly designed loop rejects good people and passes bad ones, and that is fixable in a week.",
      },
    ],
  },
];
