import { ArrowRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { ButtonLink } from "../ui/button-link";
import { Container } from "../ui/container";
import { OutlineEcho } from "../ui/outline-echo";
import { Pill } from "../ui/pill";
import { Portrait } from "../ui/portrait";
import { GithubIcon, LinkedinIcon } from "../ui/social-icons";
import { Sparkle } from "../ui/sparkle";

const headline =
  "font-display text-[length:var(--hero-fs)] font-black uppercase leading-[0.8] tracking-[-0.02em]";

// On desktop the hero fits one screen: type and portrait scale with viewport height.
const heroSizing = [
  "[--hero-fs:clamp(4.5rem,18vw,13.5rem)]",
  "lg:[--hero-fs:clamp(4.5rem,min(18vw,17svh),13.5rem)]",
  "[--echo-lines:2]",
  "lg:[@media(max-height:820px)]:[--echo-lines:1]",
  "lg:[--portrait-h:clamp(14rem,calc(100svh-22rem-var(--hero-fs)*0.8),30rem)]",
].join(" ");

const contactLinks = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
  { href: profile.socials.github, label: "GitHub", icon: GithubIcon },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: LinkedinIcon },
] as const;

export const Hero = () => (
  <section
    aria-label="Introduction"
    data-dock-trigger
    className={`relative overflow-x-clip border-b border-line ${heroSizing}`}
  >
    <Container className="relative flex flex-col justify-center pb-20 pt-10 lg:min-h-[calc(100svh-4rem)] lg:pb-12">
      <div className="flex flex-wrap items-center gap-3">
        {profile.availability.open && (
          <Pill className="text-ink">
            <span aria-hidden className="size-2 rounded-full bg-[#5fbf7f]" />
            {profile.availability.note}
          </Pill>
        )}
        <Pill>
          <MapPin aria-hidden className="size-3.5" />
          {profile.location}
        </Pill>
      </div>

      <div className="relative mt-6">
        <h1 className={headline}>
          {profile.firstName}
          <span className="sr-only"> {profile.name.split(" ").slice(1).join(" ")}, {profile.role}</span>
        </h1>
        <OutlineEcho
          text={profile.firstName}
          className={`${headline} lg:[@media(max-height:820px)]:[&>p:last-child]:hidden`}
        />
        <Sparkle className="spin-slow absolute -top-4 right-[8%] hidden size-12 text-accent sm:block" />
      </div>

      <div className="mt-8 grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_27rem]">
        <div className="max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent-ink">
            {profile.role} · Freelance
          </p>
          <p className="mt-4 text-lg leading-8 text-ink md:text-xl md:leading-9">{profile.about}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.email}`}>
              Start a project
              <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
            <ButtonLink href="/#work" variant="secondary">
              See my work
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:-mt-[calc(var(--echo-lines)*var(--hero-fs)*0.8)] lg:max-w-none">
          <div className="relative px-4 pt-4 sm:px-8 lg:mx-auto lg:w-fit">
            <div aria-hidden className="absolute inset-x-2 bottom-8 top-6 -rotate-3 rounded-xl bg-accent-2 sm:inset-x-6" />
            <Portrait
              profile={profile}
              className="aspect-[4/5] lg:aspect-auto lg:h-(--portrait-h) lg:w-[calc(var(--portrait-h)*0.8)]"
            />
            <Sparkle className="absolute -left-1 top-0 size-9 text-accent" />
            <Sparkle className="absolute -right-1 bottom-24 size-5 text-accent" />
          </div>
          <div className="relative -mt-16 ml-auto w-[88%] rounded-2xl border border-panel-line bg-panel p-6 text-panel-ink shadow-xl shadow-black/20 lg:-ml-10 lg:mr-auto lg:p-5">
            <h2 className="font-display text-2xl font-bold text-accent lg:text-xl">Contact</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm lg:mt-3 lg:gap-y-2">
              {contactLinks.map(({ href, label, icon: Icon }) => (
                <li key={href} className={href.startsWith("mailto:") ? "basis-full" : undefined}>
                  <a
                    href={href}
                    {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                    className="flex items-center gap-3 break-all transition-colors hover:text-accent"
                  >
                    <Icon aria-hidden className="size-4 shrink-0 text-panel-muted" />
                    {label}
                  </a>
                </li>
              ))}
              <li className="flex basis-full items-center gap-3 text-panel-muted">
                <MapPin aria-hidden className="size-4 shrink-0" />
                {profile.location}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
