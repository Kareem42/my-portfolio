import { RevealOnScroll } from "../RevealOnScroll";
import Resume from "../../assets/Resume202606.pdf";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vite",
    "TypeScript",
    "TailwindCSS",
    "JavaScript",
    "HTML5",
    "CSS3",
  ];
  const backendSkills = [
    "PostgreSQL",
    "Java",
    "Spring Boot",
    "Spring Security",
    "Spring MVC",
    "Version Control",
    "RESTful APIs",
    "Hibernate",
  ];
  const dataEngineeringAnalytics = [
    "Python",
    "MySQL",
    "Data Modeling",
    "Power Query",
    "Power Pivot",
    "Business Objects Enterprise",
    "Microsoft 365",
    "Power Automate",
    "DAX",
    "Power BI",
  ];
  const devOpsInfrastructure = ["Git/GitHub", "CI/CD", "Docker"];

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
              wife and our 9-year-old Chihuahua Chester, the self-appointed
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 font-mono">
                Backend Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="font-mono bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 font-mono">
                Frontend Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="font-mono bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 font-mono">
                Data Engineering & Analytics Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {dataEngineeringAnalytics.map((tech, key) => (
                  <span
                    key={key}
                    className="font-mono bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 font-mono">
                DevOps/Infrastructure Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {devOpsInfrastructure.map((tech, key) => (
                  <span
                    key={key}
                    className="font-mono bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href={Resume}
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
