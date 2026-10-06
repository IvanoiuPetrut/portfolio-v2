import { CloudCog, LayoutTemplate, Workflow } from "lucide-react";
import type { Service } from "./types";

export const services = [
  {
    title: "Web apps",
    summary:
      "Customer-facing products and internal tools, built to be fast and easy to change.",
    deliverables: [
      "Next.js and React front ends",
      "Accessible, responsive UI",
      "Auth, dashboards and internal tools",
    ],
    proof:
      "At Visma: features for a payroll-critical app, and an incident status page used across the company.",
    icon: LayoutTemplate,
  },
  {
    title: "APIs and integrations",
    summary:
      "Back ends that connect your systems: clean APIs, real-time features and third-party services.",
    deliverables: [
      "REST APIs in Node.js and .NET",
      "Real-time features with WebSockets",
      "Third-party and AI API integrations",
    ],
    proof: "Hangout runs on my Express API, with Socket.IO, Prisma and Cognito sign-in.",
    icon: Workflow,
  },
  {
    title: "Cloud and reliability",
    summary:
      "Moving to the cloud, or already there and things keep breaking? I set up deployments, monitoring and automation so your app stays up.",
    deliverables: [
      "AWS setup and cloud migrations",
      "Docker and CI/CD pipelines",
      "Monitoring and task automation",
    ],
    proof: "AWS Certified Developer, currently leading a cloud migration at Visma.",
    icon: CloudCog,
  },
] as const satisfies readonly Service[];
