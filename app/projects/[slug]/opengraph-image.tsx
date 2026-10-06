import { notFound } from "next/navigation";
import { getProject, getProjectMeta, getProjects } from "@/lib/projects";
import { ogSize, renderOgCard } from "@/lib/og";

export const alt = "Project";
export const size = ogSize;
export const contentType = "image/png";

export const generateStaticParams = () =>
  getProjects().map((project) => ({ slug: project.slug }));

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return renderOgCard({
    eyebrow: `Project · ${getProjectMeta(project)}`,
    title: project.title,
    subtitle: project.summary,
    tone: project.tone,
  });
}
