import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { OutlineEcho } from "@/components/ui/outline-echo";

export const metadata: Metadata = { title: "Page not found" };

const codeStyle = "font-display text-[clamp(6rem,30vw,16rem)] font-black leading-[0.8]";

export default function NotFound() {
  return (
    <Container className="py-24 md:py-32">
      <p className={codeStyle}>404</p>
      <OutlineEcho text="404" count={1} className={codeStyle} />
      <h1 className="font-display mt-10 text-4xl font-bold md:text-5xl">This page doesn’t exist</h1>
      <p className="mt-4 max-w-xl text-lg text-ink-muted">
        The link may be old, or the case study may have moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/#work" variant="secondary">
          See all work
        </ButtonLink>
      </div>
    </Container>
  );
}
