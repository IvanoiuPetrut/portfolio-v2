import type { Profile } from "./types";
import photo from "./photo-of-me.webp";

export const profile = {
  name: "Petrut Ivanoiu",
  firstName: "Petrut",
  shortName: "Petrut I.",
  role: "Full-stack developer",
  about:
    "I build web apps, APIs and integrations for startups and small teams. By day I’m a developer at Visma, leading the cloud migration of a payroll-critical app. I started in operations, keeping business-critical systems running through night shifts, so I build software that’s easy to run and hard to break.",
  location: "Sibiu, Romania",
  email: "petrut.ivanoiu@mailbox.org",
  socials: {
    github: "https://github.com/IvanoiuPetrut",
    linkedin: "https://www.linkedin.com/in/ivanoiu-petrut-dragos/",
  },
  photo,
  resume: "/petrut-ivanoiu-resume.pdf",
} satisfies Profile;
