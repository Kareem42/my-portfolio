import { RevealOnScroll } from "../RevealOnScroll";
import { AchievementsCard } from "../ui/card/AchievementsCard";
import { ACHIEVEMENTS } from "../../types/index";

export const Achievements = () => {
  return (
    <section
      id="acheivements"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            Certifications & Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((acheivements) => (
              <AchievementsCard key={acheivements.title} {...acheivements} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
