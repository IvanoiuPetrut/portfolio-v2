import { profile } from "@/content/profile";
import { ogSize, renderOgCard } from "@/lib/og";

export const alt = `${profile.name}, ${profile.role}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    eyebrow: `${profile.role} · Freelance`,
    title: profile.firstName,
    subtitle: "Web apps, APIs and integrations for startups and small teams.",
    tone: "site",
  });
}
