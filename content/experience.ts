import type { ExperienceItem } from "./types";

// The Visma roles stay together so the progression reads as one story.
export const experience = [
  {
    period: "2024 — now",
    role: "Software developer",
    company: "Visma",
    summary:
      "Leading the migration of a payroll-critical application from one cloud provider to another, and building its user-facing features in React and Next.js. Day to day I also work with .NET 10, AWS, Docker and CI/CD pipelines.",
  },
  {
    period: "2023 — 2024",
    role: "System engineer",
    company: "Visma",
    summary:
      "Kept critical business applications healthy across on-premise, AWS and Azure. Built a status page app that streamlines how the company’s incident managers create incidents, and Python scripts that save about two hours of manual work every week.",
  },
  {
    period: "2022 — 2023",
    role: "Technical trainee",
    company: "Visma",
    summary:
      "Started in operations, monitoring business-critical applications around the clock, night shifts included.",
  },
  {
    period: "2024 — now",
    role: "Technical trainer",
    company: "Swiss Webacademy",
    summary:
      "Teaching a full-stack course in Vue.js and Node.js to a small group, built around hands-on projects, with close feedback and support throughout.",
  },
  {
    period: "2022",
    role: "Front-end developer",
    company: "Graffino",
    summary:
      "Built Weather App, the responsive weather web app in my projects, following industry best practices so it works well on any device and screen size.",
  },
] as const satisfies readonly ExperienceItem[];

export const highlights = [
  "AWS Certified Developer – Associate",
  "Top of my class, BSc Computer Science",
  "Award winner, GameDev.js Jam 2024",
] as const;
