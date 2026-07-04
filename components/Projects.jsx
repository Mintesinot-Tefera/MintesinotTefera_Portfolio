import Reveal from "./Reveal";
import { projects } from "@/lib/data";
import { ExternalLinkIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" /> Projects
          </p>
          <h2 className="heading">Things I&apos;ve built</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            A selection of products and platforms I&apos;ve designed and engineered.
            Live projects are linked — click through to explore them.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const isLive = Boolean(project.live);
  const Wrapper = isLive ? "a" : "div";
  const wrapperProps = isLive
    ? { href: project.live, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`card group flex h-full flex-col p-6 ${
        isLive ? "cursor-pointer hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-medium uppercase tracking-wider text-accent">
          {project.type}
        </span>
        {isLive ? (
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-400 transition group-hover:border-accent/40 group-hover:text-accent">
            <ExternalLinkIcon className="h-4 w-4" />
          </span>
        ) : (
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-500">
            Case study
          </span>
        )}
      </div>

      <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-accent-soft">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {isLive && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Visit live site
          <ExternalLinkIcon className="h-3.5 w-3.5" />
        </span>
      )}
    </Wrapper>
  );
}
