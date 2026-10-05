"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site";

export const MobileNav = ({ contactHref }: { contactHref: string }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-10 items-center justify-center rounded-full border border-line"
      >
        {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-line bg-bg px-4 pb-6 pt-2 group-data-docked/header:top-[calc(100%+0.5rem)] group-data-docked/header:rounded-3xl group-data-docked/header:border group-data-docked/header:px-6 group-data-docked/header:shadow-lg group-data-docked/header:shadow-black/15"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="font-display block border-b border-line py-4 text-2xl font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={contactHref}
            onClick={close}
            className="mt-6 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent"
          >
            Start a project
          </a>
        </nav>
      )}
    </div>
  );
};
