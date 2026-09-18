import { RevealOnScroll } from "../RevealOnScroll";
import { SkillCategoryCard } from "../SkillCategoryCard";
import {
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  DATA_ENGINEERING_SKILLS,
  DEVOPS_SKILLS,
} from "../../types/index";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-mono mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 font-mono">
              I&apos;m a self-proclaimed nerdy athlete who lives for basketball
              — playing, watching, and breaking down every detail of the game.
              Off the court I&apos;m deep in anime classics like Bleach and
              Kenichi, or grinding MMORPGs, FPS, and MOBAs (WoW, Guild Wars 2,
              Battlefield 6, League of Legends, Dota 2). My biggest fans are my
              wife and our 10-year-old Chihuahua Chester, the self-appointed
              &quot;Head of Security.&quot;
            </p>

            <p className="text-gray-300 mb-6 font-mono">
              My path into tech started in 2015 with a Java course at South
              Louisiana Community College in Lafayette, Louisiana. After three
              years in warehouse logistics, I moved to Dallas in 2020 and used
              the COVID slowdown to self-teach frontend and backend development
              through LinkedIn Learning, Udemy, Coursera, and Codecademy.
            </p>

            <p className="text-gray-300 mb-6 font-mono">
              That dedication to self-improvement led from a Business
              Intelligence Analyst role in 2022 to Business Intelligence Manager
              in 2023 and eventually curiosity and can-do attitude keep me
              pushing toward new challenges and opportunities.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-3xl mx-auto px-4">
          <SkillCategoryCard title="Backend Skills" skills={BACKEND_SKILLS} />
          <SkillCategoryCard title="Frontend Skills" skills={FRONTEND_SKILLS} />
          <SkillCategoryCard
            title="Data Engineering & Analytics Skills"
            skills={DATA_ENGINEERING_SKILLS}
          />
          <SkillCategoryCard
            title="DevOps/Infrastructure Skills"
            skills={DEVOPS_SKILLS}
          />
          <div className="col-span-full text-center mt-10">
            <a
              href="/FullStackResume2026.docx"
              download="Resume.pdf"
              className="font-mono border border-indigo-500/50 text-gray-400 dark:text-gray-300 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Download CV
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
