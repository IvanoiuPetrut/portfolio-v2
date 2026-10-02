"use client";

import { Moon, Sun } from "lucide-react";
import { useLayoutEffect } from "react";
import { THEME_STORAGE_KEY, resolveTheme } from "@/lib/theme";

export const ThemeToggle = () => {
  // Strict Mode remounts in dev reset the <html> attribute the head script set.
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = resolveTheme();
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent-ink hover:text-accent-ink"
    >
      <Sun aria-hidden className="hidden size-[18px] dark:block" />
      <Moon aria-hidden className="size-[18px] dark:hidden" />
      <span className="sr-only dark:hidden">Switch to dark theme</span>
      <span className="hidden dark:inline dark:sr-only">Switch to light theme</span>
    </button>
  );
};
