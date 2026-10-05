import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  /** Trailing arrow that nudges right on hover. */
  arrow?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-accent text-on-accent hover:brightness-110",
  secondary: "border border-line text-ink hover:border-accent-ink hover:text-accent-ink",
  inverse: "border border-on-brand/30 text-on-brand hover:border-accent hover:text-accent",
} as const;


const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export const ButtonLink = ({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: ButtonLinkProps) => {
  const classes = `group/button inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition active:scale-98 ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 shrink-0 transition-transform duration-200 ease-out group-hover/button:translate-x-1 motion-reduce:transition-none"
        />
      )}
    </>
  );

  if (isExternal(href)) {
    const opensTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(opensTab && { target: "_blank", rel: "noreferrer" })}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
};
