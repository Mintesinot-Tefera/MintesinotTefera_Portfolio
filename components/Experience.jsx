import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-[68px] pt-12 pb-16 sm:pt-14 sm:pb-24">
      <div className="section">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-6 bg-mute" /> Experience
          </p>
          <h2 className="heading">Where I&apos;ve worked</h2>
        </Reveal>

        <div className="mt-10">
          <ol className="space-y-4">
            {experience.map((job, i) => (
              <li key={`${job.company}-${i}`}>
                <Reveal delay={i * 60}>
                  <div className="card p-6 hover:border-mute">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-base font-semibold text-white">{job.role}</h3>
                      <span className="shrink-0 rounded-full border border-ink-700 bg-ink-800 px-3 py-1 text-xs font-medium text-mute">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-fg">
                      {job.company}
                      <span className="text-mute"> · {job.location}</span>
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-mute">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
