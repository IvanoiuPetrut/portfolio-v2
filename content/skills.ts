import { Accessibility, Cloud, Layers, PanelsTopLeft, Server, SquareCode, Workflow, Wrench } from "lucide-react";
import {
  siDatadog,
  siDocker,
  siDotnet,
  siFigma,
  siGithubactions,
  siGraphql,
  siHtml5,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siReact,
  siRedis,
  siTerraform,
  siTypescript,
  siVercel,
} from "simple-icons";
import type { SkillGroup } from "./types";

// simple-icons has no AWS, C# or VS Code marks for trademark reasons, so those use generic icons.
export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Frontend",
    icon: PanelsTopLeft,
    skills: [
      { name: "TypeScript", icon: siTypescript, level: "Expert" },
      { name: "React and Next.js", icon: siReact, level: "Expert" },
      { name: "HTML and CSS", icon: siHtml5, level: "Expert" },
      { name: "Accessibility", icon: Accessibility, level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: siNodedotjs, level: "Expert" },
      { name: "C# and .NET", icon: siDotnet, level: "Advanced" },
      { name: "PostgreSQL", icon: siPostgresql, level: "Advanced" },
      { name: "REST and GraphQL", icon: siGraphql, level: "Advanced" },
    ],
  },
  {
    title: "Cloud and data",
    icon: Layers,
    skills: [
      { name: "AWS (Lambda, S3, RDS)", icon: Cloud, level: "Advanced" },
      { name: "Redis", icon: siRedis, level: "Working" },
      { name: "Terraform", icon: siTerraform, level: "Working" },
      { name: "CI/CD pipelines", icon: Workflow, level: "Advanced" },
    ],
  },
  {
    title: "Everyday tools",
    icon: Wrench,
    skills: [
      { name: "VS Code", icon: SquareCode },
      { name: "GitHub Actions", icon: siGithubactions },
      { name: "Docker", icon: siDocker },
      { name: "Vercel", icon: siVercel },
      { name: "Figma", icon: siFigma },
      { name: "Postman", icon: siPostman },
      { name: "Datadog", icon: siDatadog },
    ],
  },
];
