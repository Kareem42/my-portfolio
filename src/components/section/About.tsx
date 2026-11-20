import { RevealOnScroll } from "../RevealOnScroll";
import { SkillCategoryCard } from "../ui/card/SkillCategoryCard";
import { GradientCta } from "../ui/GradientCta";
import { PhotoFrame } from "../ui/PhotoFrame";
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
      className="relative z-10 flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-center font-mono text-3xl font-bold text-transparent">
            About Me
          </h2>

          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <p className="mb-6 font-mono leading-relaxed">
                A Business Intelligence Manager who moved into full-stack
                engineering. I build with Java Spring Boot and React, and I
                bring that same analytical rigor to clean, tested,
                production-ready code.
              </p>
              <p className="font-mono leading-relaxed">
                The path started in 2015 with a Java course at South Louisiana
                Community College in Lafayette. After three years in warehouse
                logistics, I moved to Dallas in 2020 and used the slowdown to
                teach myself frontend and backend development. That persistence
                carried me from BI Analyst to BI Manager, and now into full
                stack engineering.
              </p>
            </div>
            <PhotoFrame id="working" />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-sm">
              <PhotoFrame id="court" className="rounded-none border-0 shadow-none" />
              <div className="p-6">
                <h3 className="mb-3 font-mono text-lg font-bold">On the court</h3>
                <p className="font-mono text-sm leading-relaxed text-foreground/90">
                  The same drive shows up in basketball — on the court, breaking
                  down film, and volunteering with Build and Ball, a mental
                  health initiative that uses competitive basketball to open
                  conversations people often struggle to have out loud.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-sm">
              <div className="flex aspect-[3/2] flex-col justify-end bg-[radial-gradient(circle_at_80%_20%,rgba(192,132,252,0.45),transparent_40%),linear-gradient(160deg,#1e1b4b,#312e81_55%,#1e3a8a)] p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-indigo-100/70">
                  Off the clock
                </p>
                <p className="mt-2 font-mono text-sm leading-snug text-white">
                  Bleach · Kenichi · WoW · Guild Wars 2 · Battlefield · League ·
                  Dota 2
                </p>
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-mono text-lg font-bold">
                  Anime and games
                </h3>
                <p className="font-mono text-sm leading-relaxed text-foreground/90">
                  Deep into anime such as Bleach and Kenichi the Mightiest
                  Disciple, and still grinding MMOs, shooters, and MOBAs when
                  the code is put away.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-sm">
              <PhotoFrame
                id="chester"
                className="rounded-none border-0 shadow-none"
              />
              <div className="p-6">
                <h3 className="mb-3 font-mono text-lg font-bold">
                  Head of Security
                </h3>
                <p className="font-mono text-sm leading-relaxed text-foreground/90">
                  My biggest fans are my wife and our 10-year-old Chihuahua
                  Chester, self-appointed Head of Security.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-14 grid grid-cols-1 justify-center gap-8 md:grid-cols-2">
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
            <div className="col-span-full mt-2 text-center">
              <GradientCta
                href="/FullStackResume2026.docx"
                download="Resume.pdf"
              >
                Download CV
              </GradientCta>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
