import { ImageResponse } from "next/og";
import type { ProjectTone } from "@/content/types";

export const ogSize = { width: 1200, height: 630 };

const palettes: Record<ProjectTone | "site", { bg: string; ink: string; accent: string }> = {
  site: { bg: "#0e1411", ink: "#f2ebdd", accent: "#f4b63f" },
  mustard: { bg: "#f4b63f", ink: "#1a1405", accent: "#1a1405" },
  tangerine: { bg: "#f0703a", ink: "#1a1405", accent: "#1a1405" },
  forest: { bg: "#1f3a2c", ink: "#f2ebdd", accent: "#f4b63f" },
};

type OgCardProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  tone: ProjectTone | "site";
};

export const renderOgCard = ({ eyebrow, title, subtitle, tone }: OgCardProps) => {
  const palette = palettes[tone];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: palette.bg,
          color: palette.ink,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: palette.accent }}>
          {eyebrow.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 150, fontWeight: 800, lineHeight: 0.9, letterSpacing: -4 }}>
            {title.toUpperCase()}
          </div>
          <div style={{ display: "flex", marginTop: 32, fontSize: 36, maxWidth: 900, lineHeight: 1.3 }}>
            {subtitle}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
};
