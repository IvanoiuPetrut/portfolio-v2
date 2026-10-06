import Image from "next/image";
import { ViewTransition } from "react";
import type { Project, ProjectTone } from "@/content/types";
import { Sparkle } from "./sparkle";

const imageSizes = {
  hero: "(min-width: 1152px) 72rem, 100vw",
  card: "(min-width: 768px) 36rem, 100vw",
  tile: "(min-width: 640px) 20vw, 9rem",
} as const;

type ProjectArtProps = {
  project: Project;
  size?: keyof typeof imageSizes;
  className?: string;
};

const tones: Record<ProjectTone, string> = {
  mustard: "bg-accent text-on-accent [--outline:var(--on-accent)]",
  tangerine: "bg-accent-2 text-on-accent [--outline:var(--on-accent)]",
  forest: "bg-brand text-on-brand [--outline:var(--accent)]",
};

/** The cover artwork alone, for places that repeat a project and so cannot share its morph name. */
export const ProjectArt = ({ project, size = "card", className = "" }: ProjectArtProps) => {
  const isHero = size === "hero";

  return (
    <div className={`@container relative overflow-hidden rounded-2xl ${tones[project.tone]} ${className}`}>
      {project.cover ? (
        <Image
          src={project.cover}
          alt=""
          fill
          preload={isHero}
          sizes={imageSizes[size]}
          className="object-contain p-[4%]"
        />
      ) : (
        <div aria-hidden className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <Sparkle
            className={`absolute right-6 top-6 transition duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/project:rotate-90 group-hover/project:scale-125 motion-reduce:transition-none ${isHero ? "size-10" : "size-7"}`}
          />
          <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-80">
            {project.stack.slice(0, 3).join(" · ")}
          </p>
          <p
            className={`font-display text-outline mt-2 font-black uppercase leading-[0.85] ${isHero ? "text-[11cqw]" : "text-[14cqw]"}`}
          >
            {project.title}
          </p>
        </div>
      )}
    </div>
  );
};

type ProjectCoverProps = ProjectArtProps & { size?: "card" | "hero" };

export const ProjectCover = ({ project, size = "card", className = "" }: ProjectCoverProps) => (
  <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
    <ProjectArt project={project} size={size} className={className} />
  </ViewTransition>
);
