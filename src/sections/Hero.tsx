"use client";

import { m, useReducedMotion } from "framer-motion";
import { person, socials } from "../data/profile";
import Pipeline from "../components/Pipeline";
import { ArrowIcon, DownloadIcon, socialIcon } from "../components/Icons";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();
  const anim = (delay: number) => ({
    initial: reduced ? false : ({ opacity: 0, y: 26 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="top" className="relative overflow-hidden">
      {/* backdrop */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-40">
        <m.p {...anim(0)} className="font-mono text-sm text-accent">
          <span aria-hidden="true">$ </span>whoami
          <span className="caret ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 bg-accent" aria-hidden="true" />
        </m.p>

        <m.h1
          {...anim(0.1)}
          className="mt-5 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-fg sm:text-6xl md:text-7xl"
        >
          Taweshal
          <br />
          <span className="text-gradient">Dev Thakur</span>
        </m.h1>

        <m.p {...anim(0.2)} className="mt-5 font-display text-lg font-medium text-fg sm:text-xl">
          Python Developer <span className="text-accent">·</span> Data Engineering Enthusiast
        </m.p>

        <m.p {...anim(0.3)} className="mt-4 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
          {person.tagline}
        </m.p>

        {/* CTAs */}
        <m.div {...anim(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-ink transition-all hover:bg-accent-2 hover:shadow-[0_0_32px_rgb(56_189_248/0.4)]"
          >
            Explore My Work
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={person.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/60 px-5 py-3 text-sm font-semibold text-fg transition-all hover:border-accent/40 hover:bg-panel"
          >
            <DownloadIcon />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-mute transition-colors hover:text-fg"
          >
            Contact
          </a>
        </m.div>

        {/* socials */}
        <m.ul {...anim(0.5)} className="mt-7 flex items-center gap-4">
          {socials.map((s) => {
            const Icon = socialIcon[s.icon];
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-mute transition-all hover:-translate-y-0.5 hover:text-accent"
                >
                  <Icon className="h-[1.15rem] w-[1.15rem]" />
                </a>
              </li>
            );
          })}
        </m.ul>

        {/* signature pipeline */}
        <m.div
          {...anim(0.65)}
          className="glass float-slow mt-14 rounded-2xl p-5 sm:p-7 md:mt-20"
        >
          <div className="mb-5 flex items-center justify-between">
            <p className="font-mono text-xs tracking-[0.2em] text-mute uppercase">how I think about data</p>
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
            </div>
          </div>
          <Pipeline />
        </m.div>
      </div>
    </section>
  );
}
