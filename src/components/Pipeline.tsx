import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

interface Stage {
  key: string;
  label: string;
  mono: string;
  desc: string;
}

const STAGES: Stage[] = [
  {
    key: "source",
    label: "Source",
    mono: "api / files",
    desc: "Raw, messy data — an API response, a CSV, OpenStreetMap tags. Nothing you'd trust yet.",
  },
  {
    key: "extract",
    label: "Extract",
    mono: "python",
    desc: "Python pulls it in — requests, retries, raw records captured exactly as they arrive.",
  },
  {
    key: "transform",
    label: "Transform",
    mono: "pandas",
    desc: "Pandas cleans and normalizes: missing names handled, coordinates validated, duplicates dropped.",
  },
  {
    key: "load",
    label: "Load",
    mono: "postgresql",
    desc: "SQLAlchemy writes into a normalized schema — SQLite for prototypes, PostgreSQL for real.",
  },
  {
    key: "insight",
    label: "Insight",
    mono: "sql queries",
    desc: "Structured, queryable, trustworthy. The moment data starts answering questions.",
  },
];

/**
 * Interactive data pipeline — the site's signature element.
 * Auto-advances through stages; hovering/tapping a node takes over.
 */
export default function Pipeline() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => setActive((a) => (a + 1) % STAGES.length), 2600);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  const select = (i: number) => {
    setActive(i);
    setPaused(true);
  };

  return (
    <div
      className="w-full select-none"
      onMouseLeave={() => setPaused(false)}
      role="group"
      aria-label="Interactive data pipeline: source to insight"
    >
      {/* nodes — horizontal on sm+, vertical on mobile */}
      <div className="flex flex-col items-stretch gap-0 sm:flex-row sm:items-center">
        {STAGES.map((s, i) => (
          <div key={s.key} className="flex flex-1 flex-col items-stretch sm:flex-row sm:items-center">
            <button
              onClick={() => select(i)}
              onMouseEnter={() => select(i)}
              className={`group relative flex w-full flex-col items-center gap-1 rounded-xl border px-3 py-3.5 transition-all duration-300 sm:py-4 ${
                active === i
                  ? "border-accent/60 bg-accent/10 shadow-[0_0_28px_rgb(56_189_248/0.18)]"
                  : "border-line bg-surface/60 hover:border-accent/30"
              }`}
              aria-pressed={active === i}
            >
              <span
                className={`font-display text-sm font-semibold transition-colors sm:text-[0.95rem] ${
                  active === i ? "text-accent" : "text-fg"
                }`}
              >
                {s.label}
              </span>
              <span className="font-mono text-[0.65rem] text-mute">{s.mono}</span>
              {/* status dot */}
              <span
                className={`absolute right-2 top-2 h-1.5 w-1.5 rounded-full transition-all ${
                  active === i ? "bg-accent shadow-[0_0_8px_rgb(56_189_248/0.9)]" : "bg-dim/50"
                }`}
                aria-hidden="true"
              />
            </button>

            {/* connector (not after last node) */}
            {i < STAGES.length - 1 && (
              <>
                {/* horizontal connector */}
                <div className="relative mx-1 hidden h-px w-8 shrink-0 overflow-visible bg-line sm:block md:w-10" aria-hidden="true">
                  <span
                    className={`flow-dot-x absolute -top-[2.5px] h-[6px] w-[6px] rounded-full bg-accent shadow-[0_0_6px_rgb(56_189_248/0.9)] ${
                      i < active ? "" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${i * 0.35}s`, animationPlayState: i < active ? "running" : "paused" }}
                  />
                </div>
                {/* vertical connector */}
                <div className="relative mx-auto block h-6 w-px overflow-visible bg-line sm:hidden" aria-hidden="true">
                  <span
                    className={`flow-dot-y absolute -left-[2.5px] h-[6px] w-[6px] rounded-full bg-accent shadow-[0_0_6px_rgb(56_189_248/0.9)] ${
                      i < active ? "" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${i * 0.3}s`, animationPlayState: i < active ? "running" : "paused" }}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* stage description */}
      <div className="mt-5 min-h-[3.5rem]">
        <AnimatePresence mode="wait">
          <m.p
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="font-mono text-[0.8rem] leading-relaxed text-mute"
          >
            <span className="text-accent">{"> "}</span>
            {STAGES[active].desc}
          </m.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
