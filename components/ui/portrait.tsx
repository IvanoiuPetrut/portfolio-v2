import Image from "next/image";
import type { Profile } from "@/content/types";

type PortraitProps = { profile: Profile; className?: string };

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

export const Portrait = ({ profile, className = "" }: PortraitProps) => (
  <div className={`relative overflow-hidden rounded-xl bg-brand ${className}`}>
    {profile.photo ? (
      <Image
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        fill
        preload
        sizes="(min-width: 1024px) 26rem, 80vw"
        className="object-cover"
      />
    ) : (
      <div aria-hidden className="flex h-full items-center justify-center">
        <span className="font-display text-outline text-[9rem] font-black leading-none [--outline:var(--accent)]">
          {initialsOf(profile.name)}
        </span>
      </div>
    )}
  </div>
);
