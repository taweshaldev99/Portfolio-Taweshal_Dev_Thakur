import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { projects } from "../data/profile";
import { ArrowIcon, ExternalIcon, GitHubIcon } from "../components/Icons";

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      kicker="06 · work"
      title="Projects that carry weight"
      intro="Selected for direction, not volume — data pipelines first, product work second, roots last."
    >
      {/* featured project */}
      <Reveal>
        <article className="group relative overflow-hidden rounded-3xl border border-accent/25 bg-panel/70 p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] sm:p-10">
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-[90px] transition-opacity group-hover:opacity-150"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase">featured · data engineering</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-fg sm:text-3xl">{featured.name}</h3>

            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-[0.7rem] tracking-wide text-dim uppercase">problem</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-mute">{featured.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.7rem] tracking-wide text-dim uppercase">solution</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-mute">{featured.solution}</p>
                </div>
                {featured.learned && (
                  <div>
                    <p className="font-mono text-[0.7rem] tracking-wide text-dim uppercase">what it taught me</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-mute">{featured.learned}</p>
                  </div>
                )}
              </div>

              {/* architecture */}
              <div className="flex flex-col justify-center">
                <p className="mb-4 font-mono text-[0.7rem] tracking-wide text-dim uppercase">architecture</p>
                <ol className="space-y-0">
                  {featured.arch!.map((a, i) => (
                    <li key={a.label}>
                      <div className="flex items-center gap-4 rounded-xl border border-line bg-surface/70 px-4 py-3 transition-colors hover:border-accent/40">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent/10 font-mono text-xs font-semibold text-accent">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-fg">{a.label}</p>
                          <p className="font-mono text-[0.68rem] text-mute">{a.sub}</p>
                        </div>
                      </div>
                      {i < featured.arch!.length - 1 && (
                        <div className="relative mx-auto my-0.5 h-4 w-px bg-line" aria-hidden="true">
                          <span className="flow-dot-y absolute -left-[2.5px] h-[6px] w-[6px] rounded-full bg-accent/80 shadow-[0_0_6px_rgb(56_189_248/0.8)]" style={{ animationDelay: `${i * 0.28}s` }} />
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <ul className="flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <li key={t} className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[0.7rem] text-mute">
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-accent/50 px-4 py-2.5 text-sm font-semibold text-accent transition-all hover:bg-accent/10"
              >
                <GitHubIcon className="h-4 w-4" />
                View on GitHub
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </article>
      </Reveal>

      {/* other projects */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07}>
            <article className="group glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-fg">{p.name}</h3>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} on GitHub`}
                  className="text-mute transition-colors hover:text-accent"
                >
                  <ExternalIcon className="h-[1.05rem] w-[1.05rem]" />
                </a>
              </div>
              <p className="mt-2 text-[0.82rem] font-medium text-fg/70">{p.problem}</p>
              <p className="mt-2.5 flex-1 text-[0.84rem] leading-relaxed text-mute">{p.solution}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[0.66rem] text-mute">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 text-center">
          <a
            href="https://github.com/taweshaldev99?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-mute transition-colors hover:text-accent"
          >
            more on GitHub
            <ArrowIcon className="h-3.5 w-3.5" />
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
