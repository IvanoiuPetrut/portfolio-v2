import { ArrowUpRight, House, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { cardSurface } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { OutlineEcho } from "@/components/ui/outline-echo";
import { Sparkle } from "@/components/ui/sparkle";
import { SpotlightGrid } from "@/components/ui/spotlight-grid";
import { profile } from "@/content/profile";
import { getProjectMeta, getProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Page not found" };

const codeStyle = "font-display text-[clamp(6rem,30vw,16rem)] font-black leading-[0.8]";

export default function NotFound() {
  return (
    <Container className="py-24 md:py-32">
      <div className="relative w-fit">
        <p className={codeStyle}>404</p>
        <OutlineEcho text="404" count={1} className={codeStyle} />
        <Sparkle className="spin-slow absolute -right-10 top-0 size-10 text-accent md:-right-14 md:size-12" />
      </div>

      <h1 className="font-display mt-10 text-4xl font-bold md:text-5xl">This page took the day off</h1>
      <p className="mt-4 max-w-prose text-lg leading-prose text-ink-muted">
        The link might be old, or the page moved somewhere better. Nothing’s broken on your end, promise.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">
          <House aria-hidden className="size-4" />
          Take me home
        </ButtonLink>
        <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
          <Mail aria-hidden className="size-4" />
          Tell me what you were after
        </ButtonLink>
      </div>

      <section aria-labelledby="suggestions-title" className="mt-20">
        <h2 id="suggestions-title" className="font-display text-2xl font-bold">
          Or take a look at one of these projects
        </h2>
        <SpotlightGrid className="mt-6 grid gap-5 md:grid-cols-2">
          {getProjects().map((project) => (
            <li
              key={project.slug}
              className={`${cardSurface} group has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent-ink`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="flex h-full flex-col p-6 focus-visible:outline-none"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                  {getProjectMeta(project)}
                </span>
                <span className="font-display mt-2 flex items-center gap-2 text-xl font-bold">
                  {project.title}
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 text-accent-ink transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
                <span className="mt-2 leading-prose text-ink-muted">{project.summary}</span>
              </Link>
            </li>
          ))}
        </SpotlightGrid>
      </section>
    </Container>
  );
}
