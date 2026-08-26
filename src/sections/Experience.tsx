import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <Section
      id="experience"
      kicker="03 · experience"
      title="Where I've shipped"
      intro="QA and project coordination at a product company. The software lifecycle, learned from inside a real release cadence."
    >
      <div className="space-y-6">
        {experience.map((job, i) => (
          <Reveal key={job.role} delay={i * 0.1}>
            <article className="group glass rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-semibold text-fg">{job.role}</h3>
                <p className="font-mono text-xs text-accent">{job.period}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-mute">
                {job.company} · {job.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-fg/90">{job.summary}</p>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-mute">
                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[0.7rem] text-mute"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
