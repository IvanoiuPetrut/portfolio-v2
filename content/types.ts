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
  resume?: string;
};

export type Service = {
  title: string;
  summary: string;
  deliverables: readonly string[];
  /** Where this was done before, so the offer is backed by real work. */
  proof: string;
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

export type Hobby = { label: string; detail: string; icon: LucideIcon; href?: string };

export type ProjectTone = "mustard" | "tangerine" | "forest";

export type ProjectLinkKind = "live" | "demo" | "repo";

export type ProjectLink = { label: string; href: string; kind: ProjectLinkKind };

export type Project = {
  slug: string;
  title: string;
  /** What it is, e.g. "Web app" or "Game". */
  kind: string;
  summary: string;
  stack: readonly string[];
  tone: ProjectTone;
  links: readonly ProjectLink[];
  cover?: StaticImageData;
  year?: number;
  client?: string;
  role?: string;
  duration?: string;
  stats?: readonly { value: string; label: string }[];
};
