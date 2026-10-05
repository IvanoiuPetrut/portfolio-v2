import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import type { SimpleIcon } from "simple-icons";

export type Profile = {
  name: string;
  firstName: string;
  shortName: string;
  role: string;
  about: string;
  location: string;
  email: string;
  socials: { github: string; linkedin: string };
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

export type SkillLevel = "Expert" | "Advanced" | "Working";

export type Skill = {
  name: string;
  icon: SimpleIcon | LucideIcon;
  level?: SkillLevel;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: readonly Skill[];
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
