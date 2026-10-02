import { practices, skillGroups, tools } from "@/content/skills";
import type { SkillLevel } from "@/content/types";
import { Section } from "../ui/section";

const levelStyles: Record<SkillLevel, string> = {
  Expert: "bg-accent text-on-accent border-accent",
  Advanced: "border-accent-ink text-accent-ink",
  Working: "border-line text-ink-muted",
};

export const Skills = () => (
  <Section
    id="skills"
    index="04"
    eyebrow="Skills"
    title="Tools and technologies"
    className="border-t border-line"
  >
    <h3 className="font-display text-2xl font-bold">Coding skills</h3>
    <div className="reveal mt-6 grid gap-5 md:grid-cols-3">
      {skillGroups.map((group) => (
        <section
          key={group.title}
          aria-label={group.title}
          className="rounded-3xl border border-line bg-surface p-6 md:p-7"
        >
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-ink">{group.title}</h4>
          <ul className="mt-5 divide-y divide-line">
            {group.skills.map((skill) => (
              <li key={skill.name} className="flex items-center justify-between gap-4 py-3">
                <span className="font-medium">{skill.name}</span>
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${levelStyles[skill.level]}`}
                >
                  {skill.level}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>

    <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
      <div className="reveal">
        <h3 className="font-display text-2xl font-bold">Software skills</h3>
        <ul className="mt-6 grid grid-cols-4 gap-x-3 gap-y-5 sm:grid-cols-8">
          {tools.map((tool) => (
            <li key={tool.name} className="flex flex-col items-center gap-2 text-center">
              <span
                aria-hidden
                className="flex size-14 items-center justify-center rounded-xl border-2 border-ink font-mono text-lg font-bold"
              >
                {tool.abbr}
              </span>
              <span className="text-xs leading-tight text-ink-muted">{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="reveal">
        <h3 className="font-display text-2xl font-bold">Practices</h3>
        <ul className="mt-6 flex flex-wrap gap-2">
          {practices.map((practice) => (
            <li key={practice} className="rounded-full bg-panel px-4 py-2 text-sm text-panel-ink">
              {practice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);
