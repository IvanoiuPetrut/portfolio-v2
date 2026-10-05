"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { Container } from "../ui/container";

// Pages mark the element whose exit from view turns the header into a floating dock.
const DOCK_TRIGGER_SELECTOR = "[data-dock-trigger]";

const motion = "duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none";

export const DockingHeader = ({ children }: { children: ReactNode }) => {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // The header lives in the root layout, so it re-binds to the new page's trigger on navigation.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const trigger = document.querySelector(DOCK_TRIGGER_SELECTOR);
    if (!trigger) {
      header.removeAttribute("data-docked");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => header.toggleAttribute("data-docked", !entry.isIntersecting),
      { rootMargin: `-${header.offsetHeight}px 0px 0px 0px` },
    );
    observer.observe(trigger);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={`group/header sticky top-0 z-40 h-16 transition-[padding] data-docked:pointer-events-none data-docked:px-3 ${motion}`}
    >
      {/* Two cross-fading surfaces, so the dock resizes between container widths instead of from full bleed. */}
      <div
        aria-hidden
        className={`absolute inset-0 border-b border-line bg-header backdrop-blur-md transition-opacity group-data-docked/header:opacity-0 ${motion}`}
      />
      <Container
        className={`pointer-events-auto relative isolate flex h-full translate-y-0 items-center justify-between gap-6 transition-[max-width,height,translate,padding] group-data-docked/header:h-14 group-data-docked/header:max-w-240 group-data-docked/header:translate-y-3 group-data-docked/header:pl-6 group-data-docked/header:pr-2.5 ${motion}`}
      >
        <div
          aria-hidden
          className={`absolute inset-0 -z-10 rounded-4xl border border-line bg-header opacity-0 shadow-lg shadow-black/15 backdrop-blur-md transition-opacity group-data-docked/header:opacity-100 ${motion}`}
        />
        {children}
      </Container>
    </header>
  );
};
