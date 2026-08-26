import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { journey, type JourneyStatus } from "../data/profile";

const statusStyle: Record<JourneyStatus, { dot: string; badge: string; label: string }> = {
  solid: {
    dot: "bg-emerald shadow-[0_0_10px_rgb(52_211_153/0.7)]",
    badge: "border-emerald/40 bg-emerald/10 text-emerald",
    label: "comfortable",
  },
  building: {
    dot: "bg-accent shadow-[0_0_10px_rgb(56_189_248/0.7)]",
    badge: "border-accent/40 bg-accent/10 text-accent",
    label: "building now",
  },
  next: {
    dot: "bg-amber shadow-[0_0_10px_rgb(251_191_36/0.6)]",
    badge: "border-amber/40 bg-amber/10 text-amber",
    label: "learning",
  },
};

export default function Journey() {
  return (
    <Section
      id="journey"
      kicker="02 · the road"
      title="My journey into Data Engineering"
      intro="Not a wish list, a build order. Each layer only counts once the one below it holds weight."
    >
      <div className="relative ml-3 border-l border-line pl-8 sm:ml-6 sm:pl-10">
        {journey.map((step, i) => {
          const s = statusStyle[step.status];
          return (
            <Reveal key={step.title} delay={i * 0.06} className="relative pb-9 last:pb-0">
              {/* node */}
              <span
                className={`absolute -left-[2.95rem] top-1 grid h-6 w-6 place-items-center rounded-full border border-line bg-surface sm:-left-[3.45rem]`}
                aria-hidden="true"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <h3 className="font-display text-lg font-semibold text-fg">{step.title}</h3>
                <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] tracking-wide ${s.badge}`}>
                  {s.label}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-mute">{step.note}</p>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-10 max-w-2xl border-l-2 border-accent/50 pl-5 text-[0.95rem] italic leading-relaxed text-mute">
          I'm not just saying I want to be a data engineer. Every repo, course and pipeline above is a
          deliberate step toward it.
        </p>
      </Reveal>
    </Section>
  );
}
