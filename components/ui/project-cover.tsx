import Image from "next/image";
import { ViewTransition } from "react";
import type { Project, ProjectTone } from "@/content/types";
import { Sparkle } from "./sparkle";

type ProjectCoverProps = {
  project: Project;
  size?: "card" | "hero";
  className?: string;
};

const tones: Record<ProjectTone, string> = {
  mustard: "bg-accent text-on-accent [--outline:var(--on-accent)]",
  tangerine: "bg-accent-2 text-on-accent [--outline:var(--on-accent)]",
  forest: "bg-brand text-on-brand [--outline:var(--accent)]",
};

export const ProjectCover = ({ project, size = "card", className = "" }: ProjectCoverProps) => {
  const isHero = size === "hero";

  return (
    <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
      <div className={`@container relative overflow-hidden rounded-2xl ${tones[project.tone]} ${className}`}>
        {project.cover ? (
          <Image
            src={project.cover}
            alt=""
            fill
            preload={isHero}
            sizes={isHero ? "(min-width: 1152px) 72rem, 100vw" : "(min-width: 768px) 36rem, 100vw"}
            className="object-cover"
          />
        ) : (
          <div aria-hidden className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <Sparkle className={`absolute right-6 top-6 ${isHero ? "size-10" : "size-7"}`} />
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
    </ViewTransition>
  );
};
