import type { Project } from "./types";

// Each slug needs a matching body at content/projects/<slug>.mdx.
export const projects = [
  {
    slug: "ledgerly",
    title: "Ledgerly",
    client: "Ledgerly (seed-stage SaaS)",
    summary:
      "Invoicing and expense tracking for freelancers, from blank repo to paying customers in 14 weeks.",
    year: 2025,
    role: "Lead full-stack developer",
    duration: "14 weeks",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS"],
    tone: "mustard",
    stats: [
      { value: "14 wks", label: "idea to launch" },
      { value: "1.2k", label: "paying users in year one" },
      { value: "99.95%", label: "uptime since launch" },
    ],
    links: { live: "https://example.com" },
  },
  {
    slug: "harbor-booking",
    title: "Harbor",
    client: "Marina Group Adriatic",
    summary:
      "A booking platform for three marinas that replaced phone calls and spreadsheets with live berth availability.",
    year: 2024,
    role: "Full-stack developer",
    duration: "5 months",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Mapbox"],
    tone: "tangerine",
    stats: [
      { value: "68%", label: "bookings now self-serve" },
      { value: "−9 h", label: "admin work per week" },
      { value: "3", label: "marinas on one system" },
    ],
    links: { live: "https://example.com" },
  },
  {
    slug: "relay-tracking-api",
    title: "Relay API",
    client: "Cobalt Freight",
    summary:
      "A shipment tracking API with signed webhooks that lets 40 carrier partners push status updates in real time.",
    year: 2024,
    role: "Backend developer",
    duration: "3 months",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS Lambda"],
    tone: "forest",
    stats: [
      { value: "2.1M", label: "events per day" },
      { value: "p95 120 ms", label: "API latency" },
      { value: "40", label: "carriers integrated" },
    ],
    links: { repo: "https://github.com" },
  },
  {
    slug: "atlas-admin-rescue",
    title: "Atlas Admin",
    client: "Atlas Clinics",
    summary:
      "A performance rescue of a slow internal admin dashboard, cutting page loads from 8 seconds to under 2.",
    year: 2023,
    role: "Performance consultant",
    duration: "6 weeks",
    stack: ["React", ".NET", "SQL Server", "Redis"],
    tone: "mustard",
    stats: [
      { value: "−76%", label: "median page load" },
      { value: "8 → 1.9 s", label: "worst report screen" },
      { value: "0", label: "regressions after release" },
    ],
  },
] as const satisfies readonly Project[];
