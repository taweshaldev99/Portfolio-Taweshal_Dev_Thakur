import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { learning, skillGroups } from "../data/profile";

export default function Skills() {
  return (
    <Section
      id="skills"
      kicker="04 · toolkit"
      title="Skills, honestly grouped"
      intro="What I actually use — no wall of badges, no padding."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06}>
            <div className="glass h-full rounded-2xl p-6 transition-colors duration-300 hover:border-accent/30">
              <h3 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[0.8rem] font-medium text-fg/90"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* currently learning */}
      <Reveal delay={0.15}>
        <div className="mt-10 rounded-2xl border border-amber/25 bg-amber/[0.04] p-6 sm:p-8">
          <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-fg">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber" />
            </span>
            Currently learning
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {learning.map((l) => (
              <div key={l.title} className="flex gap-3">
                <span className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-fg">{l.title}</p>
                  <p className="mt-0.5 text-[0.82rem] leading-relaxed text-mute">{l.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
