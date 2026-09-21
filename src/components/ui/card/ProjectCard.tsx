import type { Project } from "../../../types/index";

type ProjectCardProps = Project;

export const ProjectCard = ({
  title,
  description,
  techStack,
  repoLink,
  demoLink,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col p-6 rounded-xl border border-border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
      <h3 className="text-xl font-bold mb-2 font-mono">{title}</h3>
      <p className="font-mono">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4 mt-4 font-mono">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex justify-between items-center">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 font-mono hover:underline transition-colors"
        >
          GitHub Repo ⇛{" "}
        </a>
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 font-mono hover:underline transition-colors"
          >
            Live Demo ⇛{" "}
          </a>
        )}
      </div>
    </div>
  );
};
