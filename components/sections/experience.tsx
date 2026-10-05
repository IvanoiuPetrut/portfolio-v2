import { experience, workValues } from "@/content/experience";
import { Section } from "../ui/section";
import { Sparkle } from "../ui/sparkle";

export const Experience = () => (
  <Section
    id="experience"
    index="03"
    eyebrow="Experience"
    title="Where I've worked"
    className="border-t border-line"
  >
    <div className="reveal rounded-4xl bg-accent p-6 text-on-accent sm:p-10 md:p-14">
      <ol className="space-y-10">
        {experience.map((item) => (
          <li key={item.period} className="grid gap-2 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10">
            <p className="flex items-center gap-3 font-mono text-sm font-medium">
              <Sparkle className="size-4" />
              {item.period}
            </p>
            <div>
              <h3 className="font-display text-2xl font-bold md:text-3xl">{item.role}</h3>
              <p className="mt-1 font-medium">{item.company}</p>
              <p className="mt-3 max-w-prose leading-prose opacity-90">{item.summary}</p>
            </div>
          </li>
        ))}
      </ol>
      <ul aria-label="How I work" className="mt-12 flex flex-wrap gap-3 border-t border-on-accent/20 pt-10">
        {workValues.map((value) => (
          <li key={value} className="rounded-full bg-panel px-4 py-2 text-sm font-medium text-panel-ink">
            {value}
          </li>
        ))}
      </ul>
    </div>
  </Section>
);
