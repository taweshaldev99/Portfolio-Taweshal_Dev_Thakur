import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { person, socials } from "../data/profile";
import { MailIcon, PhoneIcon, socialIcon } from "../components/Icons";

export default function Contact() {
  return (
    <Section
      id="contact"
      kicker="08 · contact"
      title="Let's build something reliable"
      intro="Open to Python, data and QA opportunities — or a conversation about pipelines. I reply fast."
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-panel/70 p-8 sm:p-12">
          <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div
            className="absolute -bottom-32 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]"
            aria-hidden="true"
          />
          <div className="relative grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-sm text-accent">
                <span aria-hidden="true">$ </span>contact --direct
              </p>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${person.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-surface/70 px-5 py-4 transition-all hover:border-accent/40"
                >
                  <MailIcon className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-mono text-[0.68rem] tracking-wide text-dim uppercase">email</p>
                    <p className="text-sm font-semibold text-fg group-hover:text-accent">{person.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${person.phoneHref}`}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-surface/70 px-5 py-4 transition-all hover:border-accent/40"
                >
                  <PhoneIcon className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-mono text-[0.68rem] tracking-wide text-dim uppercase">phone</p>
                    <p className="text-sm font-semibold text-fg group-hover:text-accent">{person.phone}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <div>
                <p className="font-mono text-[0.68rem] tracking-wide text-dim uppercase">elsewhere</p>
                <ul className="mt-4 grid grid-cols-2 gap-3">
                  {socials
                    .filter((s) => s.icon !== "mail")
                    .map((s) => {
                      const Icon = socialIcon[s.icon];
                      return (
                        <li key={s.label}>
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-xl border border-line bg-surface/70 px-4 py-3 text-sm font-medium text-fg transition-all hover:border-accent/40 hover:text-accent"
                          >
                            <Icon className="h-[1.05rem] w-[1.05rem]" />
                            {s.label}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <a
                href={`mailto:${person.email}?subject=Hello%20Taweshal`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-center text-sm font-bold text-ink transition-all hover:bg-accent-2 hover:shadow-[0_0_36px_rgb(56_189_248/0.45)]"
              >
                Say hello — {person.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
