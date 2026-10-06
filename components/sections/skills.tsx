import type { SimpleIcon } from "simple-icons";
import { skillGroups } from "@/content/skills";
import type { Skill, SkillLevel } from "@/content/types";
import { cardSurface, cardTitle } from "../ui/card";
import { Section } from "../ui/section";
import { SpotlightGrid } from "../ui/spotlight-grid";

const levels: Record<SkillLevel, number> = { Expert: 3, Advanced: 2, Working: 1 };

const isBrand = (icon: Skill["icon"]): icon is SimpleIcon => "path" in icon;

const SkillIcon = ({ icon }: { icon: Skill["icon"] }) => {
  if (isBrand(icon)) {
    return (
      <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d={icon.path} />
      </svg>
    );
  }
  const Icon = icon;
  return <Icon aria-hidden className="size-5" strokeWidth={1.75} />;
};

const LevelMeter = ({ level }: { level: SkillLevel }) => (
  <span aria-hidden className="flex gap-1">
    {[1, 2, 3].map((step) => (
      <span key={step} className="h-1.5 w-4 overflow-hidden rounded-full bg-line">
        {step <= levels[level] && <span className="meter-fill block size-full bg-accent" />}
      </span>
    ))}
  </span>
);

// The legend only appears when at least one skill carries a level.
const hasLevels = skillGroups.some(({ skills }) => skills.some((skill) => skill.level));

export const Skills = () => (
  <Section
    id="skills"
    index="04"
    eyebrow="Skills"
    title="Tools and technologies"
    className="border-t border-line"
  >
    {hasLevels && (
      <ul aria-hidden className="mb-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-muted">
        {(Object.keys(levels) as SkillLevel[]).map((level) => (
          <li key={level} className="flex items-center gap-2">
            <LevelMeter level={level} />
            {level}
          </li>
        ))}
      </ul>
    )}

    <SpotlightGrid className="grid gap-5 md:grid-cols-2">
      {skillGroups.map(({ title, icon: GroupIcon, skills }) => (
        <li key={title} className={`${cardSurface} p-6 md:p-7`}>
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-on-accent">
              <GroupIcon aria-hidden className="size-[18px]" />
            </span>
            <h3 className={cardTitle}>{title}</h3>
          </div>
          <ul className={`mt-6 grid gap-x-4 gap-y-3 ${skills.some((skill) => skill.level) ? "" : "grid-cols-2"}`}>
            {skills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-line bg-bg">
                  <SkillIcon icon={skill.icon} />
                </span>
                <span className="font-medium leading-tight">{skill.name}</span>
                {skill.level && (
                  <span className="ml-auto">
                    <LevelMeter level={skill.level} />
                    <span className="sr-only">{skill.level}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </SpotlightGrid>
  </Section>
);
