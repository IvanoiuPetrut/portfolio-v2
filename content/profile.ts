import type { Profile } from "./types";

// Placeholder contact details: replace before publishing.
export const profile = {
  name: "Petrut Ivanoiu",
  firstName: "Petrut",
  shortName: "Petrut I.",
  role: "Full-stack developer",
  about:
    "I build fast, dependable web apps, APIs and integrations for startups and small teams. You get one developer who owns the whole stack, from the database schema to the last pixel, and who explains trade-offs in plain language.",
  location: "Bucharest, Romania",
  email: "hello@example.dev",
  socials: {
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle",
  },
  availability: { open: true, note: "Booking projects from November" },
} satisfies Profile;
