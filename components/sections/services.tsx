import { services } from "@/content/services";
import { Section } from "../ui/section";
import { Sparkle } from "../ui/sparkle";

export const Services = () => (
  <Section
    id="services"
    index="01"
    eyebrow="Services"
    title="What I can build for you"
    intro="Fixed-scope projects or ongoing work, with weekly demos so you always know where things stand."
  >
    <ul className="grid gap-5 md:grid-cols-3">
      {services.map(({ title, summary, deliverables, icon: Icon }) => (
        <li key={title} className="reveal flex flex-col rounded-3xl border border-line bg-surface p-7">
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-on-accent">
            <Icon aria-hidden className="size-5" />
          </span>
          <h3 className="font-display mt-6 text-2xl font-bold">{title}</h3>
          <p className="mt-3 leading-7 text-ink-muted">{summary}</p>
          <ul className="mt-6 space-y-2 border-t border-line pt-6 text-sm">
            {deliverables.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Sparkle className="size-3 text-accent-2" />
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </Section>
);
