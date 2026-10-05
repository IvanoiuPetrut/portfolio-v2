import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/types";
import { cardSurface, cardTitle } from "./card";
import { Pill } from "./pill";
import { ProjectCover } from "./project-cover";

type ProjectCardProps = { project: Project };

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <article
    className={`${cardSurface} group/project flex flex-col p-3 transition-[scale] duration-150 ease-out has-[a:active]:scale-98 motion-reduce:transition-none has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent-ink`}
  >
    <ProjectCover project={project} className="aspect-[4/3]" />
    <div className="flex flex-1 flex-col p-3 md:p-4">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
        {project.client} · {project.year}
      </p>
      <h3 className={`${cardTitle} mt-2`}>
        <Link
          href={`/projects/${project.slug}`}
          className="after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 max-w-prose leading-prose text-ink-muted">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech}>
            <Pill>{tech}</Pill>
          </li>
        ))}
      </ul>
      <p className="mt-auto flex items-center gap-1 pt-6 text-sm font-medium text-accent-ink">
        Read case study
        <ArrowUpRight aria-hidden className="size-4 transition group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5" />
      </p>
    </div>
  </article>
);
