import { RevealOnScroll } from "../RevealOnScroll";
import { SkillCarousel } from "../ui/card/SkillCarousel";
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
    <section id="about" className="relative z-10 py-24 md:py-32">
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-indigo-300">
              <span className="h-px w-8 bg-indigo-400" /> 02 / About
            </p>
            <h2 className="mb-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              I’ve seen the problem from both sides.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-foreground/65 md:text-lg md:leading-8">
              I’ve supervised warehouse teams and built BI reports to support
              decisions. Now I build software with the people doing the work in
              mind, using data to understand the process and engineering to make
              it better.
            </p>
          </div>

          <div className="grid items-stretch gap-8 border-y border-white/15 py-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:py-10">
            <div className="flex flex-col justify-center gap-5 text-sm leading-7 text-foreground/75 md:text-base">
              <p>
                I am a full-stack engineer specializing in Java Spring Boot,
                React, and PostgreSQL, with a background in Business
                Intelligence and Operations Management.
              </p>
              <p>
                After moving to Dallas in 2020, I turned a career pivot from
                warehouse leadership into roles as a BI Analyst and BI
                Manager—and ultimately into full-stack software development.
                Having spent years analyzing business bottlenecks and building
                automated reporting systems, I approach software engineering
                with a focus on data integrity, system reliability, and
                measurable business impact.
              </p>
              <div className="mt-2 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.17em] text-foreground/50 sm:grid-cols-3">
                <p>
                  <span className="mb-1 block text-lg tracking-normal text-foreground">
                    2015
                  </span>
                  First Java course
                </p>
                <p>
                  <span className="mb-1 block text-lg tracking-normal text-foreground">
                    2020
                  </span>
                  Moved to Dallas
                </p>
                <p>
                  <span className="mb-1 block text-lg tracking-normal text-foreground">
                    Now
                  </span>
                  Building for web
                </p>
              </div>
            </div>
            <PhotoFrame
              id="working"
              className="h-full min-h-64 rounded-none border-white/15 shadow-2xl shadow-indigo-950/30"
            />
          </div>

          <div className="mt-10">
            <div className="mb-5 flex items-center gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-300">
                How I contribute
              </p>
              <span className="h-px flex-1 bg-white/15" />
            </div>
            <div className="grid gap-px border border-white/15 bg-white/15 md:grid-cols-3">
              <article className="bg-background p-6 md:p-7">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                  01 / Context
                </p>
                <h3 className="mb-3 text-lg font-semibold">
                  Design for real-world frcitions.
                </h3>
                <p className="text-sm leading-6 text-foreground/65">
                  Workng in high-volume operations showed where workflows break
                  down when timing is tight and edge cases pile up-before a
                  single line of code is written.
                </p>
              </article>
              <article className="bg-background p-6 md:p-7">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                  02 / Signal
                </p>
                <h3 className="mb-3 text-lg font-semibold">
                  Verify before you automate.
                </h3>
                <p className="text-sm leading-6 text-foreground/65">
                  Leading BI reporting taught me to audit data lineage, spot
                  anomalies early, and measure whether a change actually solves
                  the underlying problem.
                </p>
              </article>
              <article className="bg-background p-6 md:p-7">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                  03 / Execution
                </p>
                <h3 className="mb-3 text-lg font-semibold">
                  Own the path from API to UI.
                </h3>
                <p className="text-sm leading-6 text-foreground/65">
                  From relational schemas and Spring services to clean React
                  interfaces, I connect backend integrity with intuitive
                  day-to-day tooling.
                </p>
              </article>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-6 text-foreground/50">
              Outside work, I volunteer with a non profit organization called
              Build and Ball, follow basketball, watch anime, and spending high
              quality time with my wife and our 5lbs self-appointed Head of
              Security, Chester.
            </p>
          </div>

          <div className="mt-16">
            <div className="mb-7 flex items-end justify-between gap-6 border-b border-white/15 pb-4">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-300">
                  Tools I work with
                </p>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  A practical toolkit
                </h3>
              </div>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40 sm:block">
                04 / Skills
              </span>
            </div>
            <SkillCarousel
              categories={[
                { title: "Backend Engineering", skills: BACKEND_SKILLS },
                { title: "Frontend Development", skills: FRONTEND_SKILLS },
                { title: "Data & Analytics", skills: DATA_ENGINEERING_SKILLS },
                { title: "DevOps & Infrastructure", skills: DEVOPS_SKILLS },
              ]}
            />
            <div className="text-center mt-8">
              <GradientCta
                href="/FullStackResume2026.docx"
                download="Resume.pdf"
              >
                Download CV{" "}
                <span aria-hidden="true" className="ml-2">
                  ↗
                </span>
              </GradientCta>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
