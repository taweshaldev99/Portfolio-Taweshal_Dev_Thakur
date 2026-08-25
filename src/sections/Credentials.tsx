import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { credentials } from "../data/profile";
import { HackerRankIcon } from "../components/Icons";

export default function Credentials() {
  return (
    <Section
      id="credentials"
      kicker="07 · proof"
      title="Credentials & milestones"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {/* education + certifications */}
        <Reveal>
          <div className="glass h-full rounded-2xl p-6 sm:p-7">
            <h3 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">education</h3>
            <p className="mt-4 font-display text-base font-semibold text-fg">{credentials.education.degree}</p>
            <p className="mt-1 text-sm text-mute">{credentials.education.school}</p>
            <p className="mt-1 font-mono text-xs text-dim">{credentials.education.period}</p>

            <h3 className="mt-8 font-mono text-xs tracking-[0.2em] text-accent uppercase">certifications</h3>
            <ul className="mt-4 space-y-3.5">
              {credentials.certifications.map((c) => (
                <li key={c.title} className="border-b border-line pb-3 last:border-0 last:pb-0">
                  <p className="text-sm font-medium text-fg">{c.title}</p>
                  <p className="mt-0.5 font-mono text-xs text-mute">
                    {c.org}
                    {c.year ? ` · ${c.year}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* hackerrank */}
        <Reveal delay={0.08}>
          <div className="glass h-full rounded-2xl p-6 sm:p-7">
            <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-accent uppercase">
              <HackerRankIcon className="h-4 w-4" />
              hackerrank badges
            </h3>
            <ul className="mt-5 space-y-3">
              {credentials.badges.map((b) => (
                <li
                  key={b.title}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface/70 px-4 py-3"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#00ea64]/10 text-[#2fdd7e]" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-fg">{b.title}</p>
                    <p className="font-mono text-[0.68rem] text-mute">{b.org}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="https://www.hackerrank.com/profile/tweshaldev543"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-mono text-xs text-mute transition-colors hover:text-accent"
            >
              view profile →
            </a>
          </div>
        </Reveal>

        {/* achievements */}
        <Reveal delay={0.16}>
          <div className="glass h-full rounded-2xl p-6 sm:p-7">
            <h3 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">achievements</h3>
            <ul className="mt-5 space-y-4">
              {credentials.achievements.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-1 text-accent" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path d="M8 21h8m-4-4v4m-6.5-17h13v5a6.5 6.5 0 0 1-13 0v-5Z" />
                      <path d="M4.5 6H2v2a4 4 0 0 0 3 3.87M19.5 6H22v2a4 4 0 0 1-3 3.87" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-mute">{a}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
