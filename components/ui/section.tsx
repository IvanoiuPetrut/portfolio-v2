import type { ReactNode } from "react";
import { Container } from "./container";
import { Sparkle } from "./sparkle";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export const Section = ({
  id,
  index,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionProps) => (
  <section id={id} aria-labelledby={`${id}-title`} className={`py-20 md:py-28 ${className}`}>
    <Container>
      <header className="reveal mb-12 max-w-3xl md:mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-ink">
          {index} / {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="font-display mt-4 flex items-start gap-3 text-4xl font-bold leading-[1.05] md:text-6xl"
        >
          {title}
          <Sparkle className="mt-1 size-5 text-accent-2 md:size-7" />
        </h2>
        {intro && <p className="mt-5 max-w-prose text-lg leading-prose text-ink-muted">{intro}</p>}
      </header>
      {children}
    </Container>
  </section>
);
