// Capability descriptions. These describe what the team offers, not claims
// about past engagements, so no placeholder banner is needed.
//
// `title` and `summary` are carried over verbatim from the previous site.

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
    slug: "ai-agents",
    title: "AI Agents",
    summary:
      "Purpose-built agents that research, reason, act and hand off—with your data, tools and guardrails.",
    description:
      "An agent is only useful when it can reach the systems where work actually happens. We build agents that read your data, call your tools, escalate when they are unsure, and leave a trail you can audit. Scoped narrowly, evaluated continuously, and shipped behind the controls your business already runs on.",
    includes: [
      "Use-case scoping and feasibility review before a line of code is written",
      "Retrieval over your own documents, tickets and databases",
      "Tool and API integration so the agent can act, not just answer",
      "Guardrails, escalation paths and human-in-the-loop checkpoints",
      "Evaluation harness with regression tests on real prompts",
      "Observability, cost tracking and per-request tracing",
    ],
    technologies: [
      "Claude",
      "Model Context Protocol",
      "LangGraph",
      "Vector search",
      "Python",
      "TypeScript",
    ],
    faqs: [
      {
        q: "How do you stop an agent from doing something it should not?",
        a: "Two ways. The agent only gets the tools its task requires, so it cannot reach systems outside its scope. And any action with real consequences routes through an approval step before it executes.",
      },
      {
        q: "Can it work with our existing systems?",
        a: "Yes. Most of the effort in an agent project is integration, not prompting. We connect to the APIs and databases you already run rather than asking you to move your data somewhere new.",
      },
      {
        q: "How do we know whether it is actually working?",
        a: "Every build ships with an evaluation set drawn from your real cases. You get a pass rate you can track over time, not a demo that works once.",
      },
    ],
  },
  {
    slug: "ai-workflows",
    title: "AI Workflows",
    summary:
      "Connected automations that remove repetitive work across your business systems and teams.",
    description:
      "Most of the time lost inside a business is not lost to hard problems. It is lost to copying a number from one system into another. We map where that happens, then build the connective tissue that removes it — with the judgment calls handled by a model and the deterministic steps handled by code.",
    includes: [
      "Process mapping to find where manual handoffs actually cost time",
      "Document extraction and classification from PDFs, email and forms",
      "System-to-system sync across CRM, ERP, support and finance tools",
      "Deterministic code for rule-based steps, models only where judgment is needed",
      "Failure handling, retries and alerting when a run does not complete",
      "A dashboard showing what ran, what it cost and what needed a human",
    ],
    technologies: [
      "Claude",
      "Temporal",
      "Node.js",
      "Python",
      "Postgres",
      "Webhooks",
    ],
    faqs: [
      {
        q: "Where does this usually pay off first?",
        a: "Anywhere a person reads one screen and types into another. Invoice handling, support triage, onboarding paperwork and reporting are the four that come up most.",
      },
      {
        q: "What happens when the automation gets something wrong?",
        a: "It stops and routes to a person rather than guessing. Every run is logged, so you can see exactly which step failed and why.",
      },
      {
        q: "Do we need clean data before starting?",
        a: "No. Messy input is the normal case and the extraction step is built to handle it. Waiting for clean data is usually how these projects stall.",
      },
    ],
  },
  {
    slug: "web-product",
    title: "Web & Product",
    summary:
      "Fast, resilient web applications and platforms people actually enjoy using.",
    description:
      "A product is judged on the third visit, not the first. We build web applications that stay fast as the data grows, stay clear as the feature set grows, and stay maintainable as the team changes. Design and engineering work from the same brief rather than handing files across a wall.",
    includes: [
      "Product discovery, user flows and a clickable prototype before build",
      "Design system with real components, not a static mockup",
      "Accessible, responsive front end tested on real devices",
      "API and data model designed for the queries you will actually run",
      "Authentication, roles and permissions",
      "Performance budget enforced in CI, not checked at the end",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Postgres",
      "Tailwind CSS",
      "Playwright",
    ],
    faqs: [
      {
        q: "Can you work with our existing design team?",
        a: "Yes. We can take finished designs and build them, or run design ourselves. What we ask for either way is a shared component library so the handoff is code, not screenshots.",
      },
      {
        q: "What about an existing codebase we already have?",
        a: "We start by reading it and writing down what we found, including the parts we would change and the parts we would leave alone. Rewrites are a last resort, not an opening move.",
      },
      {
        q: "How do you handle accessibility?",
        a: "It is part of the component work rather than an audit at the end. Keyboard navigation, focus management and contrast are checked as each component is built.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    summary:
      "Secure cloud foundations, CI/CD and observability designed to grow without drama.",
    description:
      "Infrastructure work is judged on the day something breaks. We build cloud foundations where the deploy is boring, the rollback is one command, and the dashboard tells you what went wrong before a customer does. Everything is defined in code, so the environment can be rebuilt rather than remembered.",
    includes: [
      "Infrastructure as code, with staging that genuinely matches production",
      "CI/CD pipelines with automated checks and one-command rollback",
      "Container orchestration and autoscaling sized to real traffic",
      "Secrets management, network boundaries and least-privilege access",
      "Logging, metrics, tracing and alerts that page on symptoms not noise",
      "Cost review, with the three largest line items explained",
    ],
    technologies: [
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "OpenTelemetry",
    ],
    faqs: [
      {
        q: "Do we have to move clouds?",
        a: "No. We work in the cloud you already use. Migration is only worth proposing when there is a specific cost or capability reason, and we would show you the numbers first.",
      },
      {
        q: "Can you take over an environment nobody documented?",
        a: "That is a common starting point. The first deliverable is usually a written map of what exists and what is at risk, before anything is changed.",
      },
      {
        q: "What does handover look like?",
        a: "Runbooks, architecture diagrams and a working session with your team. The goal is that you can operate it without us.",
      },
    ],
  },
  {
    slug: "blockchain",
    title: "Blockchain",
    summary:
      "Useful Web3 products, smart contracts and decentralized experiences built for real adoption.",
    description:
      "Most problems do not need a blockchain, and we will say so. When the problem genuinely calls for verifiable ownership or a shared ledger between parties who do not trust each other, we build it carefully — because contract code cannot be patched the way a web app can.",
    includes: [
      "Honest feasibility review, including whether a chain is needed at all",
      "Smart contract design, implementation and gas optimisation",
      "Test suite covering adversarial cases, not just the happy path",
      "Third-party audit coordination and remediation",
      "Wallet integration and a front end that non-crypto users can follow",
      "Indexing and off-chain services for querying at speed",
    ],
    technologies: [
      "Solidity",
      "Foundry",
      "EVM chains",
      "ethers.js",
      "The Graph",
      "IPFS",
    ],
    faqs: [
      {
        q: "Will you tell us if we do not need a blockchain?",
        a: "Yes, and it happens often. If a database with signed audit logs solves the problem, that is the cheaper and safer answer and we will recommend it.",
      },
      {
        q: "How do you handle contract security?",
        a: "Adversarial tests during development, an external audit before mainnet, and a deliberate upgrade or pause strategy decided up front rather than after an incident.",
      },
      {
        q: "Can regular users actually use it?",
        a: "That is the design constraint. Wallet setup, gas and signing are the points where products lose people, so they get the most attention.",
      },
    ],
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    summary:
      "Clear technical direction for ambitious products, complex systems and next-stage growth.",
    description:
      "Sometimes the useful deliverable is a decision, not a deployment. We come in to assess what you have, tell you plainly where the risk sits, and give you a sequenced plan your own team can execute. You get a document you can act on, not a slide deck.",
    includes: [
      "Architecture review with findings ranked by risk and cost to fix",
      "Codebase and technical due diligence",
      "Build, buy or partner analysis with real numbers",
      "Sequenced technical roadmap tied to business milestones",
      "Team structure and hiring recommendations",
      "A written report your team can act on without us",
    ],
    technologies: [
      "Architecture review",
      "Due diligence",
      "Roadmapping",
      "Cost modelling",
      "Threat modelling",
      "Team design",
    ],
    faqs: [
      {
        q: "How long does a review take?",
        a: "Most run two to four weeks depending on the size of the system. You get the findings as they emerge, not only at the end.",
      },
      {
        q: "Do we have to hire you to build it afterwards?",
        a: "No. The report is written so your own team or another vendor can execute it. That is the point of writing it down.",
      },
      {
        q: "Will you talk to our engineers directly?",
        a: "Yes. The people maintaining the system usually know exactly where the problems are, and that is the fastest way to find them.",
      },
    ],
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    summary:
      "Vetted engineers who join your team, work your process and ship in your codebase.",
    description:
      "Sometimes you know exactly what to build and simply need more hands that are already good at it. We place engineers into your existing team — your standups, your repo, your review process — rather than running a parallel project on the side. You keep the roadmap; we keep the bench warm.",
    includes: [
      "Role scoping against your actual stack, not a generic JD",
      "Technical screening by engineers who do the work themselves",
      "Shortlist in days, not weeks, with honest notes on each candidate",
      "Trial period before anyone becomes a long-term commitment",
      "Direct reporting into your leads, no account-manager layer",
      "Replacement cover if a placement is not working out",
    ],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "Java",
      "AWS",
      "Kubernetes",
    ],
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
      "Permanent, contract and leadership hiring for teams building technical products.",
    description:
      "Hiring engineers is hard because most recruiters cannot tell a good engineer from a good interviewee. We can, because we build software ourselves. That means fewer, better candidates and far less of your team's time spent screening people who were never going to make it.",
    includes: [
      "Permanent, contract and contract-to-hire placements",
      "Leadership and executive search for engineering and product roles",
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
        a: "Our screening is done by people who write code. A candidate reaches your panel having already been assessed technically, so your engineers spend their time on the ones worth meeting.",
      },
      {
        q: "Do you handle volume hiring?",
        a: "Yes, through RPO. We take on the sourcing, screening and coordination load and keep your team in the loop only where their judgment is needed.",
      },
      {
        q: "Can you help us design the interview itself?",
        a: "Often the fastest win. A badly designed loop rejects good people and passes bad ones, and that is fixable in a week.",
      },
    ],
  },
];
