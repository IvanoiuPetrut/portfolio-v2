import { hobbies } from "@/content/hobbies";
import { Section } from "../ui/section";

export const Hobbies = () => (
  <Section
    id="hobbies"
    index="05"
    eyebrow="Off the clock"
    title="Hobbies and interests"
    className="border-t border-line"
  >
    <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {hobbies.map(({ label, detail, icon: Icon }) => (
        <li key={label} className="reveal flex flex-col items-center text-center">
          <span className="flex size-24 items-center justify-center rounded-full bg-accent text-on-accent transition duration-300 hover:-rotate-6 hover:scale-105 motion-reduce:hover:transform-none">
            <Icon aria-hidden className="size-9" strokeWidth={1.5} />
          </span>
          <h3 className="font-display mt-5 text-xl font-bold">{label}</h3>
          <p className="mt-1 text-sm text-ink-muted">{detail}</p>
        </li>
      ))}
    </ul>
  </Section>
);
