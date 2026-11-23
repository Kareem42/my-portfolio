import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "../ui/card/ProjectCard";
import { PROJECTS } from "../../types/index";

export const Projects = () => {
  return (
    <section id="projects" className="relative z-10 py-24 md:py-32">
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-white/15 pb-7 md:flex-row md:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-indigo-300">
                <span className="h-px w-8 bg-indigo-400" /> 03 / Selected work
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                Built to be useful.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-foreground/60">
              A selection of products and experiments across software
              engineering, analytics, and the systems that connect them.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px border border-white/15 bg-white/15 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.title} index={index + 1} {...project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
