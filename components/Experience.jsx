import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" /> Experience
          </p>
          <h2 className="heading">Where I&apos;ve worked</h2>
        </Reveal>

        <div className="relative mt-12">
          {/* vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent sm:left-[19px]" />

          <ol className="space-y-8">
            {experience.map((job, i) => (
              <li key={`${job.company}-${i}`} className="relative pl-12 sm:pl-16">
                <Reveal delay={i * 60}>
                  {/* node */}
                  <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-accent/30 bg-ink-900 sm:h-10 sm:w-10">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                  </span>

                  <div className="card p-6 hover:border-accent/25">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                      <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-400">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {job.company}
                      <span className="text-slate-500"> · {job.location}</span>
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-400">
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
