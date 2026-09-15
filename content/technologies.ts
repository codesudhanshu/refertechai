// Stack the team builds on. Capability statement, not a client claim, so no
// placeholder banner is needed.

export interface TechGroup {
  name: string;
  items: readonly string[];
}

export const technologyGroups: readonly TechGroup[] = [
  {
    name: "AI & ML",
    items: [
      "Claude",
      "Model Context Protocol",
      "LangGraph",
      "PyTorch",
      "Hugging Face",
      "Vector search",
      "RAG pipelines",
      "Computer vision",
    ],
  },
  {
    name: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
      "Vite",
      "Playwright",
      "Storybook",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Python",
      "Go",
      "FastAPI",
      "GraphQL",
      "gRPC",
      "Temporal",
      "REST",
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "OpenTelemetry",
    ],
  },
  {
    name: "Data",
    items: [
      "Postgres",
      "MongoDB",
      "Redis",
      "ClickHouse",
      "Snowflake",
      "dbt",
      "Kafka",
      "Airflow",
    ],
  },
  {
    name: "Web3",
    items: [
      "Solidity",
      "Foundry",
      "EVM chains",
      "ethers.js",
      "The Graph",
      "IPFS",
      "Wallet integration",
      "Contract auditing",
    ],
  },
];
