import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { about } from "../data/profile";

export default function About() {
  return (
    <Section id="about" kicker="01 · about" title="From compiler errors to data pipelines">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr] md:gap-14">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-mute [&>strong]:text-fg">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="glass rounded-2xl p-6">
            <p className="mb-5 font-mono text-xs tracking-[0.2em] text-accent uppercase">quick facts</p>
            <dl className="space-y-4">
              {about.facts.map((f) => (
                <div key={f.label} className="border-b border-line pb-3 last:border-0 last:pb-0">
                  <dt className="font-mono text-[0.7rem] tracking-wide text-dim uppercase">{f.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-fg">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
