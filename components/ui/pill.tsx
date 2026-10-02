import type { ReactNode } from "react";

type PillProps = { children: ReactNode; className?: string };

export const Pill = ({ children, className = "" }: PillProps) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-muted ${className}`}
  >
    {children}
  </span>
);
