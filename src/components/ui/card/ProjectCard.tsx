import type { Project } from "../../../types/index";
import { PhotoFrame } from "../PhotoFrame";

type ProjectCardProps = Project;

export const ProjectCard = ({
  title,
  description,
  techStack,
  repoLink,
  demoLink,
  photoId,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card/70 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
      <PhotoFrame id={photoId} className="rounded-none border-0 shadow-none" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-mono text-xl font-bold">{title}</h3>
        <p className="font-mono">{description}</p>

        <div className="mt-4 mb-4 flex flex-wrap gap-2 font-mono">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-500/10 px-3 py-1 font-mono text-sm text-indigo-400 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-indigo-400 transition-colors hover:underline"
          >
            GitHub Repo ⇛{" "}
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-indigo-400 transition-colors hover:underline"
            >
              Live Demo ⇛{" "}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
