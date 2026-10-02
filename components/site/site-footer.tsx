import { profile } from "@/content/profile";
import { Container } from "../ui/container";
import { GithubIcon, LinkedinIcon } from "../ui/social-icons";

export const SiteFooter = () => (
  <footer className="border-t border-line py-10">
    <Container className="flex flex-col items-start justify-between gap-6 text-sm text-ink-muted sm:flex-row sm:items-center">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </p>
      <ul className="flex items-center gap-4">
        <li>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-ink">
            <GithubIcon className="size-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
        <li>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
            <LinkedinIcon className="size-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
      </ul>
    </Container>
  </footer>
);
