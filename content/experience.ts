import type { ExperienceItem } from "./types";

export const experience = [
  {
    period: "2023 — now",
    role: "Freelance full-stack developer",
    company: "Independent",
    summary:
      "Product builds and rescues for SaaS startups, agencies and local businesses across Europe.",
  },
  {
    period: "2020 — 2023",
    role: "Senior software engineer",
    company: "Northwind Payroll",
    summary:
      "Led the move from a legacy monolith to a Next.js front end over typed .NET APIs serving 40k users.",
  },
  {
    period: "2018 — 2020",
    role: "Software engineer",
    company: "Brightlane Studio",
    summary:
      "Shipped e-commerce and booking sites for agency clients, owning delivery from kickoff to launch.",
  },
  {
    period: "2016 — 2018",
    role: "Junior developer",
    company: "Cobalt Logistics",
    summary:
      "Built tracking dashboards and carrier integrations for a regional freight company.",
  },
] as const satisfies readonly ExperienceItem[];

export const workValues = [
  "#Pragmatic",
  "#Communicative",
  "#Test-minded",
  "#Accessible-by-default",
] as const;
