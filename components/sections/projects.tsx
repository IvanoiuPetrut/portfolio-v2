import { getProjects } from "@/lib/projects";
import { ProjectCard } from "../ui/project-card";
import { Section } from "../ui/section";

export const Projects = () => (
  <Section
    id="work"
    index="02"
    eyebrow="Selected work"
    title="Recent client projects"
    intro="A few projects I led from first call to launch. Each case study covers the problem, the approach and the results."
    className="border-t border-line"
  >
    <ul className="grid gap-6 md:grid-cols-2">
      {getProjects().map((project) => (
        <li key={project.slug} className="flex">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  </Section>
);
