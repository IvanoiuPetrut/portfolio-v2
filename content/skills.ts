import type { SkillGroup, Tool } from "./types";

export const tools = [
  { abbr: "Vs", name: "VS Code" },
  { abbr: "Gh", name: "GitHub Actions" },
  { abbr: "Dk", name: "Docker" },
  { abbr: "Aw", name: "AWS" },
  { abbr: "Vc", name: "Vercel" },
  { abbr: "Fg", name: "Figma" },
  { abbr: "Pm", name: "Postman" },
  { abbr: "Dd", name: "Datadog" },
] as const satisfies readonly Tool[];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "TypeScript", level: "Expert" },
      { name: "React and Next.js", level: "Expert" },
      { name: "HTML and CSS", level: "Expert" },
      { name: "Accessibility", level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "C# and .NET", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "REST and GraphQL", level: "Advanced" },
    ],
  },
  {
    title: "Cloud and data",
    skills: [
      { name: "AWS (Lambda, S3, RDS)", level: "Advanced" },
      { name: "Redis", level: "Working" },
      { name: "Terraform", level: "Working" },
      { name: "CI/CD pipelines", level: "Advanced" },
    ],
  },
] as const satisfies readonly SkillGroup[];

export const practices = [
  "Domain modelling",
  "Testing strategy",
  "Code review",
  "Observability",
] as const;
