import { projects } from "@/content/projects";
import type { Project } from "@/content/types";

export const getProjects = (): readonly Project[] => projects;

export const getProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string): Project => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};
