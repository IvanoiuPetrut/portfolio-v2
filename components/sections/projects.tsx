import { getProjects } from "@/lib/projects";
import { ProjectCard } from "../ui/project-card";
import { Section } from "../ui/section";
import { SpotlightGrid } from "../ui/spotlight-grid";

export const Projects = () => (
  <Section
    id="work"
    index="02"
    eyebrow="Selected work"
    title="Recent client projects"
    intro="A few projects I led from first call to launch. Each case study covers the problem, the approach and the results."
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
