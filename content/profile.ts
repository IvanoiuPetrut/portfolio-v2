import type { Profile } from "./types";
import photo from "./photo-of-me.webp";

export const profile = {
  name: "Petrut Ivanoiu",
  firstName: "Petrut",
  shortName: "Petrut I.",
  role: "Full-stack developer",
  about:
    "I build fast, dependable web apps, APIs and integrations for startups and small teams. You get one developer who owns the whole stack, from the database schema to the last pixel, and who explains trade-offs in plain language.",
  location: "Bucharest, Romania",
  email: "petrut.ivanoiu@mailbox.org",
  socials: {
    github: "https://github.com/IvanoiuPetrut",
    linkedin: "https://www.linkedin.com/in/ivanoiu-petrut-dragos/",
  },
  photo,
  resume: "/petrut-ivanoiu-resume.pdf",
} satisfies Profile;
