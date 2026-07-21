import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-[68px] pt-12 pb-16 sm:pt-14 sm:pb-24">
      <div className="section">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-6 bg-mute" /> Skills & tools
          </p>
          <h2 className="heading">The stack I build with</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 70}>
              <div className="card h-full p-6 hover:border-accent/25 hover:bg-ink-800">
                <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-mute">
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
