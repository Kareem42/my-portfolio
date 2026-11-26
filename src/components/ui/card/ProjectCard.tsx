import type { Project } from "../../../types/index";
import { PhotoFrame } from "../PhotoFrame";

type ProjectCardProps = Project & { index: number };

export const ProjectCard = ({
  title,
  focus,
  description,
  techStack,
  repoLink,
  demoLink,
  photoId,
  index,
}: ProjectCardProps) => {
  return (
    <article className="flex min-w-0 flex-col bg-background p-5 sm:p-7 md:p-8">
      <PhotoFrame
        id={photoId}
        className="rounded-none border-border shadow-none"
      />
      <div className="flex flex-1 flex-col pt-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-300">
            Selected work / {String(index).padStart(2, "0")}
          </p>
          <div className="flex gap-4 font-mono text-xs">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition-colors hover:text-indigo-300"
            >
              GitHub ↗
            </a>
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 transition-colors hover:text-indigo-300"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">
          {focus}
        </p>
        <h3 className="mb-3 text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="text-sm leading-6 text-foreground/65">{description}</p>
        <div className="mt-auto flex flex-wrap gap-x-3 gap-y-2 pt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/45">
          {techStack.map((tech) => (
            <span key={tech} className="border-l border-indigo-400/50 pl-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
