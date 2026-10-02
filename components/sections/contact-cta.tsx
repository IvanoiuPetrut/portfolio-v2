import { ArrowRight } from "lucide-react";
import { profile } from "@/content/profile";
import { ButtonLink } from "../ui/button-link";
import { Container } from "../ui/container";
import { OutlineEcho } from "../ui/outline-echo";
import { GithubIcon, LinkedinIcon } from "../ui/social-icons";

type ContactCtaProps = { title?: string };

export const ContactCta = ({ title = "Have a project in mind?" }: ContactCtaProps) => (
  <section id="contact" aria-labelledby="contact-title" className="py-16 md:py-24">
    <Container>
      <div className="reveal relative overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-on-brand sm:px-12 md:py-20">
        <div className="max-w-2xl">
          <h2 id="contact-title" className="font-display text-4xl font-bold leading-tight md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 opacity-85">
            Tell me what you’re building and when you need it. I reply within one working day with
            next steps and a rough estimate.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
            <ButtonLink href={profile.socials.linkedin} variant="inverse">
              <LinkedinIcon className="size-4" />
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.socials.github} variant="inverse">
              <GithubIcon className="size-4" />
              GitHub
            </ButtonLink>
          </div>
        </div>
        <OutlineEcho
          text="Let's build"
          count={2}
          className="font-display mt-14 whitespace-nowrap text-[clamp(3.5rem,11vw,9rem)] font-black uppercase leading-[0.85] [--outline:var(--accent)]"
        />
      </div>
    </Container>
  </section>
);
