import { profile, navLinks } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="section flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <a href="#top" className="text-base font-semibold text-white">
            {profile.name}
          </a>
          <p className="mt-1 text-sm text-slate-500">
            {profile.role} · {profile.location}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-400 transition hover:text-accent">
            <MailIcon className="h-5 w-5" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 transition hover:text-accent">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 transition hover:text-accent">
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-600">
        © {year} {profile.name}. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}
