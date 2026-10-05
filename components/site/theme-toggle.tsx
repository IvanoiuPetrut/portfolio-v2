"use client";

import { Moon, Sun } from "lucide-react";
import { useLayoutEffect, type MouseEvent } from "react";
import { THEME_STORAGE_KEY, resolveTheme } from "@/lib/theme";

const REVEAL_DURATION_MS = 700;

export const ThemeToggle = () => {
  // Strict Mode remounts in dev reset the <html> attribute the head script set.
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = resolveTheme();
  }, []);

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {}
    };

    if (!("startViewTransition" in document) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply();
      return;
    }

    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    // The class scopes the reveal styles to this transition, leaving page-navigation transitions alone.
    root.classList.add("theme-transition");
    const transition = document.startViewTransition(apply);
    void transition.ready.then(
      () =>
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          {
            duration: REVEAL_DURATION_MS,
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        ),
      () => {},
    );
    void transition.finished.finally(() => root.classList.remove("theme-transition"));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink transition hover:border-accent-ink hover:text-accent-ink active:scale-98"
    >
      <span className="theme-toggle-icon">
        <Sun aria-hidden className="hidden size-[18px] dark:block" />
        <Moon aria-hidden className="size-[18px] dark:hidden" />
      </span>
      <span className="sr-only dark:hidden">Switch to dark theme</span>
      <span className="hidden dark:inline dark:sr-only">Switch to light theme</span>
    </button>
  );
};
