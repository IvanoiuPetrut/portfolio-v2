import type { ExperienceItem } from "./types";

export const experience = [
  {
    period: "2024 — now",
    role: "Software developer, front end",
    company: "Visma",
    summary:
      "Building user-facing features with React and Next.js, and working across the stack with AWS, Docker, CI/CD pipelines and .NET 10.",
  },
  {
    period: "2024 — now",
    role: "Technical trainer",
    company: "Swiss Webacademy",
    summary:
      "Teaching a full-stack course in Vue.js and Node.js, made up of several modules and hands-on projects, with feedback and support throughout.",
  },
  {
    period: "2023 — 2024",
    role: "System engineer",
    company: "Visma",
    summary:
      "Oversaw and resolved issues in critical business applications across on-premise, AWS and Azure. Built a status page for managing incidents and Python scripts that automate repetitive tasks.",
  },
  {
    period: "2022 — 2023",
    role: "Technical trainee",
    company: "Visma",
    summary:
      "Worked in operations on highly critical business applications, monitoring them around the clock, including night shifts.",
  },
  {
    period: "2022",
    role: "Front-end developer",
    company: "Graffino",
    summary:
      "Built a responsive web application that works well across devices and screen sizes.",
  },
] as const satisfies readonly ExperienceItem[];

export const workValues = [
  "#Pragmatic",
  "#Communicative",
  "#Test-minded",
  "#Accessible-by-default",
] as const;
