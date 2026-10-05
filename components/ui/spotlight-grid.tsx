"use client";

import type { PointerEvent, ReactNode } from "react";

type SpotlightGridProps = { children: ReactNode; className?: string };

/** A list whose `.spotlight` children glow where the pointer is, read from per-card CSS variables. */
export const SpotlightGrid = ({ children, className = "" }: SpotlightGridProps) => {
  const trackPointer = (event: PointerEvent<HTMLUListElement>) => {
    const cards = [...event.currentTarget.children] as HTMLElement[];
    // Measure every card before writing, so the writes never force a layout between reads.
    const rects = cards.map((card) => card.getBoundingClientRect());
    cards.forEach((card, index) => {
      card.style.setProperty("--spot-x", `${event.clientX - rects[index].left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - rects[index].top}px`);
    });
  };

  return (
    <ul onPointerMove={trackPointer} className={`spotlight-grid ${className}`}>
      {children}
    </ul>
  );
};
