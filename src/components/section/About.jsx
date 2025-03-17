import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", " Typescript", " TailwindCSS", " HTML5"];
  const backendSkills = ["Node.js", " JavaScript", " PostgreSQL"];
  const businessIntell = [
    "Power Query",
    " Power Pivot",
    " Business Objects",
    " Excel",
  ];
  const dataScience = ["MySQL", " Python", " Tableau"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am athlete who loves to playing, watching, and studying
              basketball. I watches a ton of anime, which my all-time favorites
              includes Bleach and Kenichi the Might Disciple, enjoy playing
              various MMORPGs, FPS and MOBA games, such as, World of Warcraft,
              Guild Wars 2, Battlefield 2042, League of Legends, and Dota 2. My
              wife and our 9 year old Chihuahua, Chester who is head of
              Security, are my biggest supporters and fans and I would not be
              who I would be without them.
            </p>

            <p className="text-gray-300 mb-6">
              I was introduced to programming in 2014, where I took a course in
              Java Application Development at a local community college in
              Louisiana. From there, I worked in a warehouse for a liquor
              distributor for the first 3 years in Lafayette, Louisiana. Then transferred
              to Dallas, Texas in 2020 before becoming a Business Intelligence Analyst
              in 2022 for the same company. During the 2020 transfer, I taught
              myself Frontend Web Development through various educational
              resources like LinkedIn, Udemy, and Codecademy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Business Intelligence</h3>
              <div className="flex flex-wrap gap-2">
                {businessIntell.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Data Science</h3>
              <div className="flex flex-wrap gap-2">
                {dataScience.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
