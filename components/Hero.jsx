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
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-800 px-3 py-1.5 text-xs font-medium text-fg">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </span>

          <h1 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-[42px]">
            {profile.name}
          </h1>

          <p className="mt-3 text-base font-medium text-fg sm:text-lg">
            {profile.role}
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute sm:text-[15px]">
            {profile.tagline}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-mute">
            <MapPinIcon className="h-4 w-4 text-mute" />
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
            <div className="absolute -right-5 -top-5 -z-10 h-36 w-36 rounded-md border border-ink-700" />
            <div className="relative aspect-[4/5] w-64 overflow-hidden rounded-lg border border-ink-700 bg-ink-800 shadow-card sm:w-72 lg:w-80">
              <ProfilePhoto alt={`Portrait of ${profile.name}`} initials="MT" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-md border border-ink-700 bg-ink-850 px-3.5 py-2.5 shadow-card">
              <p className="text-sm font-semibold text-white">{profile.education.degree.split(" in ")[0]}</p>
              <p className="text-xs text-mute">{profile.education.school}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="section mt-16">
        <dl className="grid grid-cols-3 gap-4 rounded-lg border border-ink-700 bg-ink-850 p-6 backdrop-blur sm:gap-8 sm:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                  {s.value}
                </span>
                <span className="mt-1 block text-xs text-mute sm:text-sm">
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
          className="flex flex-col items-center gap-2 text-xs text-mute transition hover:text-accent"
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
      className="grid h-11 w-11 place-items-center rounded-md border border-ink-700 text-fg transition hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
    >
      {children}
    </a>
  );
}
