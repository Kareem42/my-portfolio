import { RevealOnScroll } from "../RevealOnScroll";
import { SkillCategoryCard } from "../ui/card/SkillCategoryCard";
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

          <div className="rounded-xl p-8 border-border border hover:-translate-y-1 transition-all">
            <p className="mb-6 font-mono">
              A Business Intelligence Manager whose transitioned into full stack
              software engineering, building applications in Java Spring Boot
              and React, bringing that same analytical rigor to writing clean, tested,
              production-ready code.
            </p>

            <p className="mb-6 font-mono">
              My path into tech started in 2015 with a Java course at South
              Louisiana Community College in Lafayette, Louisiana. After three
              years in warehouse logistics, I moved to Dallas in 2020 and used
              the COVID slowdown to self-teach frontend and backend development
              - the persistence that eventually carried me from BI Analyst to BI
              Manager, and now into full stack engineering.
            </p>

            <p className="mb-6 font-mono">
              Outside of code, I bring that same drive to basketball - on the
              court, breaking down film, and volunteering with Build and Ball, a
              mental health initiative that uses competitive basketball to open
              conversations people often struggle to have out loud, so no one
              walks away thinking they're the only one carrying what they're
              carrying. I'm also deep into anime, such as Bleach, Kenichi The
              Mightiest Disciple, and grinding MMORPGs, FPS, MOBAs - WoW, Guild
              Wars 2, Battlefield 6, League, Dota 2. My biggest fans are my wife
              and our 10-year-old Chihuahua Chester, self-appointed Head of
              Security.
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
              className="inline-flex font-mono items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
