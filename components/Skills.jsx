import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" /> Skills & tools
          </p>
          <h2 className="heading">The stack I build with</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 70}>
              <div className="card h-full p-6 hover:border-accent/25 hover:bg-ink-800/60">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {group.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
