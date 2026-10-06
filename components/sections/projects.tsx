import { getProjects } from "@/lib/projects";
import { ProjectCard } from "../ui/project-card";
import { Section } from "../ui/section";
import { SpotlightGrid } from "../ui/spotlight-grid";

export const Projects = () => (
  <Section
    id="work"
    index="02"
    eyebrow="Selected work"
    title="Things I’ve built"
    intro="Web apps, games and desktop tools. Each project page covers what it does, what it’s built with and where to try it."
    className="border-t border-line"
  >
    <SpotlightGrid className="grid gap-5 md:grid-cols-2">
      {getProjects().map((project) => (
        <li key={project.slug} className="flex">
          <ProjectCard project={project} />
        </li>
      ))}
    </SpotlightGrid>
  </Section>
);
