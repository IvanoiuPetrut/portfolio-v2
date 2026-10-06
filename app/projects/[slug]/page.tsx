import { ArrowLeft, ArrowRight, ExternalLink, Play } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ContactCta } from "@/components/sections/contact-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { OutlineEcho } from "@/components/ui/outline-echo";
import { Pill } from "@/components/ui/pill";
import { ProjectCover } from "@/components/ui/project-cover";
import { GithubIcon } from "@/components/ui/social-icons";
import type { ProjectLinkKind } from "@/content/types";
import { getNextProject, getProject, getProjects } from "@/lib/projects";

export const dynamicParams = false;

export const generateStaticParams = () =>
  getProjects().map((project) => ({ slug: project.slug }));

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

const linkIcons: Record<ProjectLinkKind, ReactNode> = {
  live: <ExternalLink aria-hidden className="size-4" />,
  demo: <Play aria-hidden className="size-4" />,
  repo: <GithubIcon className="size-4" />,
};

const titleStyle =
  "font-display text-[clamp(3.5rem,11vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.02em]";

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { default: CaseStudy } = await import(`@/content/projects/${slug}.mdx`);
  const next = getNextProject(slug);

  const facts = [
    { label: "Type", value: project.kind },
    { label: "Client", value: project.client },
    { label: "Role", value: project.role },
    { label: "Year", value: project.year && String(project.year) },
    { label: "Duration", value: project.duration },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value));

  return (
    <>
      <article>
        <Container className="pt-10 md:pt-14">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft aria-hidden className="size-4" />
            All work
          </Link>

          <header data-dock-trigger className="mt-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-ink">Project</p>
            <h1 className={`${titleStyle} mt-4 break-words`}>{project.title}</h1>
            <OutlineEcho text={project.title} count={1} className={`${titleStyle} break-words`} />
            <p className="mt-8 max-w-prose text-xl leading-prose md:text-2xl">{project.summary}</p>

            <dl className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-bg p-5">
                  <dt className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">{fact.label}</dt>
                  <dd className="mt-2 font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <Pill>{tech}</Pill>
                  </li>
                ))}
              </ul>
              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, index) => (
                    <ButtonLink key={link.href + link.label} href={link.href} variant={index === 0 ? "primary" : "secondary"}>
                      {linkIcons[link.kind]}
                      {link.label}
                    </ButtonLink>
                  ))}
                </div>
              )}
            </div>
          </header>

          <ProjectCover project={project} size="hero" className="mt-12 aspect-[16/9]" />

          {project.stats && (
            <ul aria-label="Results" className="mt-6 grid gap-4 sm:grid-cols-3">
              {project.stats.map((stat) => (
                <li key={stat.label} className="rounded-2xl border border-line bg-surface p-6">
                  <p className="font-display text-4xl font-bold text-accent-ink">{stat.value}</p>
                  <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
                </li>
              ))}
            </ul>
          )}

          <div className="mdx-body mx-auto mt-8 max-w-3xl">
            <CaseStudy />
          </div>

          <nav aria-label="Next project" className="mx-auto mt-20 max-w-3xl border-t border-line pt-10">
            <Link href={`/projects/${next.slug}`} className="group block">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Next project</p>
              <p className="font-display mt-3 flex items-center gap-4 text-4xl font-bold transition-colors group-hover:text-accent-ink md:text-5xl">
                {next.title}
                <ArrowRight aria-hidden className="size-8 transition group-hover:translate-x-1" />
              </p>
              <p className="mt-2 text-ink-muted">{next.summary}</p>
            </Link>
          </nav>
        </Container>
      </article>
      <ContactCta title="Have a similar project?" />
    </>
  );
}
