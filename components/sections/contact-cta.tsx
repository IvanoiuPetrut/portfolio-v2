import { ArrowRight, Mail } from "lucide-react";
import type { CSSProperties } from "react";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { ButtonLink } from "../ui/button-link";
import { ProjectArt } from "../ui/project-cover";

type ContactCtaProps = { title?: string };

// x, y and width are percentages of the section. Periods and delays differ so no two tiles move in step.
const tiles = [
  { x: 4, y: 23, width: 17, ratio: "4/3", drift: 18, period: 11, delay: -2, mobile: false },
  { x: 9, y: 11, width: 19, ratio: "3/2", drift: 26, period: 13, delay: -7, mobile: true },
  { x: 47, y: 1, width: 15, ratio: "3/2", drift: 16, period: 9, delay: -4, mobile: true },
  { x: 29, y: 29, width: 14, ratio: "4/3", drift: 22, period: 12, delay: -9, mobile: false },
  { x: 75, y: 15, width: 18, ratio: "3/2", drift: 24, period: 10, delay: -1, mobile: true },
  { x: 84, y: 29, width: 14, ratio: "4/3", drift: 14, period: 8, delay: -5, mobile: false },
  { x: 58, y: 40, width: 16, ratio: "3/2", drift: 20, period: 14, delay: -11, mobile: false },
  { x: 44, y: 54, width: 15, ratio: "4/3", drift: 18, period: 10, delay: -6, mobile: false },
  { x: 15, y: 64, width: 12, ratio: "4/3", drift: 28, period: 12, delay: -3, mobile: true },
  { x: 71, y: 62, width: 13, ratio: "3/2", drift: 16, period: 9, delay: -8, mobile: true },
  { x: 37, y: 76, width: 11, ratio: "3/2", drift: 22, period: 11, delay: -10, mobile: false },
  { x: 14, y: 84, width: 19, ratio: "16/9", drift: 20, period: 13, delay: -5, mobile: true },
  { x: 44, y: 91, width: 13.5, ratio: "4/3", drift: 14, period: 10, delay: -2, mobile: false },
  { x: 73, y: 85, width: 19, ratio: "16/9", drift: 24, period: 12, delay: -7, mobile: true },
] as const;

const tileStyle = (tile: (typeof tiles)[number]) =>
  ({
    left: `${tile.x}%`,
    top: `${tile.y}%`,
    width: `max(9rem, ${tile.width}%)`,
    aspectRatio: tile.ratio,
    "--drift": `${tile.drift}px`,
    "--drift-period": `${tile.period}s`,
    "--drift-delay": `${tile.delay}s`,
  }) as CSSProperties;

export const ContactCta = ({ title = "Have a project in mind?" }: ContactCtaProps) => (
  <section
    id="contact"
    aria-labelledby="contact-title"
    className="relative isolate grid min-h-svh place-items-center overflow-hidden px-4 py-28"
  >
    <div
      aria-hidden
      className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_75%,transparent)]"
    >
      {tiles.map((tile, index) => (
        <div
          key={index}
          className={`drift absolute opacity-50 ${tile.mobile ? "" : "hidden sm:block"}`}
          style={tileStyle(tile)}
        >
          <ProjectArt
            project={projects[index % projects.length]}
            size="tile"
            className="size-full shadow-2xl shadow-black/40"
          />
        </div>
      ))}
    </div>
    <div
      aria-hidden
      className="absolute inset-0 bg-[radial-gradient(ellipse_45%_38%_at_center,color-mix(in_oklab,var(--bg)_85%,transparent)_30%,transparent)]"
    />

    <div className="reveal relative flex flex-col items-center text-center">
      <h2
        id="contact-title"
        className="font-display max-w-4xl text-balance text-[clamp(2.75rem,7vw,6.5rem)] font-bold leading-[1.02] tracking-[-0.02em]"
      >
        {title}
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <ButtonLink href={`mailto:${profile.email}`}>
          <Mail aria-hidden className="size-4" />
          Let’s talk
        </ButtonLink>
        <ButtonLink href="/#work" variant="secondary" className="bg-bg">
          Explore the projects
          <ArrowRight aria-hidden className="size-4" />
        </ButtonLink>
      </div>
    </div>
  </section>
);
