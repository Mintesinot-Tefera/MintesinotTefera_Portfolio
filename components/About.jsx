import Reveal from "./Reveal";
import { profile, certifications } from "@/lib/data";
import { CheckIcon } from "./Icons";

const highlights = [
  "Scalable backend services & REST API design",
  "AI / LLM system integration & data pipelines",
  "High-availability, mission-critical systems",
  "Cross-functional, production-ready delivery",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-[68px] pt-12 pb-16 sm:pt-14 sm:pb-24">
      <div className="section">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-6 bg-mute" /> About me
          </p>
          <h2 className="heading">Engineering reliable systems behind great products</h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={80}>
            <div className="card p-7 sm:p-8">
              <p className="text-sm leading-relaxed text-fg sm:text-[15px]">
                {profile.summary}
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-fg">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="card h-full p-7 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-mute">
                Education
              </h3>
              <p className="mt-3 text-base font-semibold text-white">
                {profile.education.degree}
              </p>
              <p className="text-sm text-mute">{profile.education.school}</p>

              <div className="my-6 h-px bg-ink-800" />

              <h3 className="text-sm font-semibold uppercase tracking-wider text-mute">
                Certifications
              </h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {certifications.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 text-sm text-fg">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
