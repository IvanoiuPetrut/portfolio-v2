import { Gauge, LayoutTemplate, Workflow } from "lucide-react";
import type { Service } from "./types";

export const services = [
  {
    title: "Web apps",
    summary:
      "Customer-facing products and internal tools, designed for speed and built to be easy to change.",
    deliverables: [
      "Next.js and React front ends",
      "Accessible, responsive UI",
      "Auth, payments and dashboards",
    ],
    icon: LayoutTemplate,
  },
  {
    title: "APIs and integrations",
    summary:
      "Back ends that connect your systems: clean APIs, background jobs and third-party services.",
    deliverables: [
      "REST and webhook APIs",
      "Stripe, CRM and ERP integrations",
      "Data models and migrations",
    ],
    icon: Workflow,
  },
  {
    title: "Performance and rescue",
    summary:
      "Slow, fragile or half-finished codebase? I find the bottlenecks and stabilise what you have.",
    deliverables: [
      "Core Web Vitals audits",
      "Query and caching fixes",
      "Test coverage and CI setup",
    ],
    icon: Gauge,
  },
] as const satisfies readonly Service[];
