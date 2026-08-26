"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { navLinks, person } from "../data/profile";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_8px_32px_rgb(0_0_0/0.35)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Taweshal Dev Thakur, home">
          {/* TD monogram */}
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-display text-sm font-bold text-accent transition-colors group-hover:bg-accent/20">
            TD
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-fg sm:block">
            taweshal<span className="text-accent">dev</span>
            <span className="text-mute">.com.np</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-mute transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={person.resumePath}
              download
              className="rounded-lg border border-accent/50 px-4 py-2 text-sm font-semibold text-accent transition-all hover:bg-accent/10"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-fg lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden border-t border-line lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-fg active:bg-accent/10"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={person.resumePath}
                  download
                  onClick={() => setOpen(false)}
                  className="block rounded-lg border border-accent/50 px-3 py-3 text-center text-base font-semibold text-accent"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
