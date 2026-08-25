import { person, socials } from "../data/profile";
import { socialIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <p className="font-mono text-xs text-mute">
          © {new Date().getFullYear()} {person.name} · Kathmandu, Nepal
        </p>
        <ul className="flex items-center gap-4">
          {socials.map((s) => {
            const Icon = socialIcon[s.icon];
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-mute transition-colors hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
        <p className="font-mono text-xs text-dim">
          Built with React · Deployed on Cloudflare
        </p>
      </div>
    </footer>
  );
}
