"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

const SCROLL_KEY = "__scrollY";
const SAVE_DELAY_MS = 150;

const savedScroll = (state: unknown) => {
  const value = (state as Record<string, unknown> | null)?.[SCROLL_KEY];
  return typeof value === "number" ? value : 0;
};

const scrollToInstantly = (top: number) => window.scrollTo({ top, behavior: "instant" });

/** Restores back/forward scroll inside the route commit; the browser's own restore lands after the view transition. */
export const ScrollRestoration = () => {
  const pathname = usePathname();
  const renderedPathname = useRef(pathname);
  const pendingRestore = useRef<number | null>(null);

  useEffect(() => {
    history.scrollRestoration = "manual";

    const [navigation] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    if (navigation?.type === "reload" || navigation?.type === "back_forward") {
      scrollToInstantly(savedScroll(history.state));
    }

    // Spreading the current state keeps Next's router data on the entry.
    const save = () => history.replaceState({ ...history.state, [SCROLL_KEY]: window.scrollY }, "");
    let saveTimer: ReturnType<typeof setTimeout> | undefined;
    const saveAfterScroll = () => {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(save, SAVE_DELAY_MS);
    };

    // Capture phase runs before Next's popstate listener schedules the route render.
    const onPopState = (event: PopStateEvent) => {
      const top = savedScroll(event.state);
      if (location.pathname === renderedPathname.current) scrollToInstantly(top);
      else pendingRestore.current = top;
    };

    window.addEventListener("scroll", saveAfterScroll, { passive: true });
    // Link clicks push a new entry, so save first in case the scroll timer has not fired yet.
    window.addEventListener("click", save, { capture: true });
    window.addEventListener("popstate", onPopState, { capture: true });
    return () => {
      clearTimeout(saveTimer);
      window.removeEventListener("scroll", saveAfterScroll);
      window.removeEventListener("click", save, { capture: true });
      window.removeEventListener("popstate", onPopState, { capture: true });
    };
  }, []);

  useLayoutEffect(() => {
    renderedPathname.current = pathname;
    if (pendingRestore.current === null) return;
    scrollToInstantly(pendingRestore.current);
    pendingRestore.current = null;
  }, [pathname]);

  return null;
};
