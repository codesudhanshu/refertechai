// Roles and skill areas ReferTech AI recruits for. This is a statement of
// recruiting coverage, not a claim that the company builds in these
// technologies — it places the people who do.

export interface TechGroup {
  name: string;
  items: readonly string[];
}

export const technologyGroups: readonly TechGroup[] = [
  {
    name: "Software Engineering",
    items: [
      "Java",
      "Python",
      ".NET / C#",
      "Node.js",
      "Go",
      "PHP",
      "Ruby",
      "C++",
    ],
  },
  {
    name: "Frontend & Mobile",
    items: [
      "React",
      "Angular",
      "Vue",
      "TypeScript",
      "React Native",
      "Flutter",
      "iOS / Swift",
      "Android / Kotlin",
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Kubernetes",
      "Docker",
      "Terraform",
      "CI/CD",
      "Site Reliability",
    ],
  },
  {
    name: "Data & AI",
    items: [
      "Data Engineering",
      "Data Science",
      "Machine Learning",
      "Snowflake",
      "Databricks",
      "Power BI",
      "Tableau",
      "ETL / dbt",
    ],
  },
  {
    name: "Security & Infrastructure",
    items: [
      "Cybersecurity",
      "SOC Analysts",
      "IAM",
      "Network Engineering",
      "Penetration Testing",
      "GRC & Compliance",
      "Systems Administration",
      "IT Support",
    ],
  },
  {
    name: "Product, QA & Leadership",
    items: [
      "Product Management",
      "Business Analysis",
      "QA & Automation",
      "Scrum Masters",
      "Delivery Managers",
      "Engineering Managers",
      "Solution Architects",
      "CTO & VP Engineering",
    ],
  },
];
