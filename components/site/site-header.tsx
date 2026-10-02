import Link from "next/link";
import { profile } from "@/content/profile";
import { navItems } from "@/lib/site";
import { Container } from "../ui/container";
import { Sparkle } from "../ui/sparkle";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

const contactHref = `mailto:${profile.email}`;

export const SiteHeader = () => (
  <header className="sticky top-0 z-40 border-b border-line bg-header backdrop-blur-md">
    <Container className="relative flex h-16 items-center justify-between gap-6">
      <Link href="/" className="font-display flex items-center gap-2 text-xl font-bold">
        <Sparkle className="size-4 text-accent-2" />
        {profile.shortName}
      </Link>
      <nav aria-label="Main" className="hidden md:block">
        <ul className="flex items-center gap-8 text-sm text-ink-muted">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a
          href={contactHref}
          className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-on-accent transition hover:brightness-110 sm:inline-flex"
        >
          Start a project
        </a>
        <MobileNav contactHref={contactHref} />
      </div>
    </Container>
  </header>
);
