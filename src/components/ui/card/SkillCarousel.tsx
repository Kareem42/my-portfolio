import { useState } from "react";

interface SkillCategory {
  title: string;
  skills: readonly string[];
}

interface SkillCarouselProps {
  categories: readonly SkillCategory[];
}

export const SkillCarousel = ({ categories }: SkillCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (categories.length === 0) return null;

  const move = (direction: number) => {
    setActiveIndex((current) =>
      (current + direction + categories.length) % categories.length,
    );
  };

  const activeCategory = categories[activeIndex];

  return (
    <div className="grid border-y border-white/15 md:grid-cols-[0.8fr_1.2fr]">
      <nav aria-label="Skills categories" className="border-b border-white/15 md:border-b-0 md:border-r">
        {categories.map((category, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={category.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-current={isActive ? "step" : undefined}
              className={`group flex w-full items-center gap-4 border-b border-white/10 px-4 py-4 text-left transition-colors last:border-b-0 md:px-6 ${isActive ? "bg-white/[0.04]" : "hover:bg-white/[0.025]"}`}
            >
              <span className={`font-mono text-xs ${isActive ? "text-indigo-300" : "text-foreground/35 group-hover:text-foreground/60"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={`flex-1 text-sm ${isActive ? "text-foreground" : "text-foreground/60 group-hover:text-foreground/85"}`}>
                {category.title}
              </span>
              <span className={`font-mono text-[10px] ${isActive ? "text-indigo-300" : "text-foreground/30"}`}>
                {String(category.skills.length).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="flex min-h-64 flex-col justify-between p-5 md:min-h-72 md:p-8" aria-live="polite">
        <div>
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
              Selected discipline
            </p>
            <span className="font-mono text-xs text-foreground/40">
              {String(activeIndex + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
            </span>
          </div>
          <h4 className="mb-6 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            {activeCategory.title}
          </h4>
          <ul className="flex flex-wrap gap-x-2 gap-y-2.5">
            {activeCategory.skills.map((skill, index) => (
              <li
                key={skill}
                className="border-b border-white/15 pb-1 font-mono text-xs text-foreground/65 transition-colors hover:border-indigo-300/70 hover:text-indigo-200"
              >
                <span className="mr-2 text-[9px] text-foreground/30">{String(index + 1).padStart(2, "0")}</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={() => move(-1)}
            className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/50 transition-colors hover:text-indigo-200"
            aria-label="Previous skills category"
          >
            <span aria-hidden="true">←</span> Previous
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/50 transition-colors hover:text-indigo-200"
            aria-label="Next skills category"
          >
            Next <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
