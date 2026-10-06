import { Cloud, CloudCog, Layers, Network, PanelsTopLeft, Server, Terminal, Workflow, Wrench } from "lucide-react";
import {
  siDatadog,
  siDocker,
  siDotnet,
  siFigma,
  siHtml5,
  siJavascript,
  siLinux,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siReact,
  siTerraform,
  siTypescript,
  siVercel,
  siVuedotjs,
} from "simple-icons";
import type { SkillGroup } from "./types";

// Most important first. simple-icons has no AWS, Azure, C# or PowerShell marks for trademark reasons, so those use generic icons.
export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Frontend",
    icon: PanelsTopLeft,
    skills: [
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
      { name: "HTML and CSS", icon: siHtml5 },
      { name: "Vue", icon: siVuedotjs },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: ".NET 10 and C#", icon: siDotnet },
      { name: "Node.js and Express", icon: siNodedotjs },
      { name: "REST APIs", icon: Network },
      { name: "Python", icon: siPython },
      { name: "PowerShell", icon: Terminal },
    ],
  },
  {
    title: "Cloud and DevOps",
    icon: Layers,
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: CloudCog },
      { name: "Docker", icon: siDocker },
      { name: "CI/CD pipelines", icon: Workflow },
      { name: "Linux", icon: siLinux },
    ],
  },
  {
    title: "Everyday tools",
    icon: Wrench,
    skills: [
      { name: "Terraform", icon: siTerraform },
      { name: "Vercel", icon: siVercel },
      { name: "Figma", icon: siFigma },
      { name: "Datadog", icon: siDatadog },
    ],
  },
];
