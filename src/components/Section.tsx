import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

/** Standard section shell: numbered kicker, display title, optional intro. */
export default function Section({ id, kicker, title, intro, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <Reveal>
        <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
          <span aria-hidden="true">// </span>
          {kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-[2.6rem]">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">{intro}</p>}
      </Reveal>
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  );
}
