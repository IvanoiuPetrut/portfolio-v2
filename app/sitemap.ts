import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    ...getProjects().map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      priority: 0.8,
    })),
  ];
}
