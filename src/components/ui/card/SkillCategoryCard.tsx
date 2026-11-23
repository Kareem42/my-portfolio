interface SkillCategoryCardProps {
  title: string;
  skills: readonly string[];
}

export const SkillCategoryCard = ({
  title,
  skills,
}: SkillCategoryCardProps) => {
  return (
    <article className="border border-white/15 bg-background p-5 transition-colors hover:border-indigo-400/40 md:p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-1.5 w-1.5 bg-indigo-400" aria-hidden="true" />
        <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/75">
          {title}
        </h4>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="border border-white/10 px-2.5 py-1.5 font-mono text-xs text-foreground/60 transition-colors hover:border-indigo-400/40 hover:text-indigo-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
};
