interface SkillCategoryCardProps {
  title: string;
  skills: readonly string[];
}

export const SkillCategoryCard = ({
  title,
  skills,
}: SkillCategoryCardProps) => {
  return (
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
      <h3 className="text-xl font-bold mb-4 font-mono">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="font-mono bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
