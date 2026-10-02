import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/types";
import { Pill } from "./pill";
import { ProjectCover } from "./project-cover";

type ProjectCardProps = { project: Project };

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <article className="reveal group relative flex flex-col rounded-3xl border border-line bg-surface p-3 transition duration-300 hover:-translate-y-1 hover:border-accent-ink has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent-ink motion-reduce:hover:translate-y-0">
    <ProjectCover project={project} className="aspect-[4/3]" />
    <div className="flex flex-1 flex-col p-4 md:p-5">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
        {project.client} · {project.year}
      </p>
      <h3 className="font-display mt-2 text-3xl font-bold">
        <Link
          href={`/projects/${project.slug}`}
          className="after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 leading-7 text-ink-muted">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech}>
            <Pill>{tech}</Pill>
          </li>
        ))}
      </ul>
      <p className="mt-auto flex items-center gap-1 pt-6 text-sm font-medium text-accent-ink">
        Read case study
        <ArrowUpRight aria-hidden className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </p>
    </div>
  </article>
);
