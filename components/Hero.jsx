import { profile, stats } from "@/lib/data";
import ProfilePhoto from "./ProfilePhoto";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  DownloadIcon,
  ArrowDownIcon,
} from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* ambient grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(60% 60% at 50% 30%, black, transparent)",
          WebkitMaskImage: "radial-gradient(60% 60% at 50% 30%, black, transparent)",
        }}
      />

      <div className="section grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">
            {profile.role}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <MapPinIcon className="h-4 w-4 text-accent" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            <a href={profile.resume} download className="btn-ghost">
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <MailIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={profile.github} label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>

        {/* Portrait */}
        <div className="animate-fade-up justify-self-center [animation-delay:120ms] lg:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/30 via-sky-500/10 to-transparent blur-2xl" />
            <div className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full border border-accent/20 [animation:spin-slow_18s_linear_infinite]" />
            <div className="relative aspect-[4/5] w-64 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800 shadow-card sm:w-72 lg:w-80">
              <ProfilePhoto alt={`Portrait of ${profile.name}`} initials="MT" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-ink-850/90 px-4 py-3 shadow-card backdrop-blur">
              <p className="text-lg font-bold text-white">{profile.education.degree.split(" in ")[0]}</p>
              <p className="text-xs text-slate-400">{profile.education.school}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="section mt-16">
        <dl className="grid grid-cols-3 gap-4 rounded-2xl border border-white/5 bg-ink-850/50 p-6 backdrop-blur sm:gap-8 sm:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl font-bold text-white sm:text-4xl">
                  {s.value}
                </span>
                <span className="mt-1 block text-xs text-slate-400 sm:text-sm">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-accent"
        >
          Scroll
          <ArrowDownIcon className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
    >
      {children}
    </a>
  );
}
