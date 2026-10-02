import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export type Profile = {
  name: string;
  firstName: string;
  shortName: string;
  role: string;
  about: string;
  location: string;
  email: string;
  socials: { github: string; linkedin: string };
  availability: { open: boolean; note: string };
  photo?: StaticImageData;
};

export type Service = {
  title: string;
  summary: string;
  deliverables: readonly string[];
  icon: LucideIcon;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
};

export type Tool = { abbr: string; name: string };

export type SkillLevel = "Expert" | "Advanced" | "Working";

export type SkillGroup = {
  title: string;
  skills: readonly { name: string; level: SkillLevel }[];
};

export type Hobby = { label: string; detail: string; icon: LucideIcon };

export type ProjectTone = "mustard" | "tangerine" | "forest";

export type Project = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  year: number;
  role: string;
  duration: string;
  stack: readonly string[];
  tone: ProjectTone;
  stats: readonly { value: string; label: string }[];
  links?: { live?: string; repo?: string };
  cover?: StaticImageData;
};
