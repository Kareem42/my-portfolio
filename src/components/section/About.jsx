import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vite.js",
    "Typescript",
    "TailwindCSS",
    "Javascript",
    "HTML5",
    "CSS3",
  ];
  const backendSkills = [
    "Node.js",
    "JavaScript",
    "PostgreSQL",
    "GIT",
    "Git Version Control",
    "RESTful APIs",
    "Email.js",
    "Express.js"
  ];
  const businessIntell = [
    "Power Query",
    "Power Pivot",
    "Business Objects",
    "Excel",
    "Power Automate",
    "PowerPoint",
    "DAX",
    "PowerBI"
  ];
  const dataScience = [
    "MySQL",
    "Python",
    "Tableau",
    "Machine Learning",
    "Data Warehousing",
    "Data Cleaning and Prepation",
    "Data Visulization",
  ];

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
              I'm a self-proclaimed nerdy athlete with a deep passion for
              basketball—playing it, watching it, and analyzing the game from
              every angle. When I'm not on the court, you'll likely find me
              immersed in anime, with classics like Bleach and Kenichi: The
              Mightiest Disciple holding a special place in my heart. I'm also
              an avid gamer who dives into the worlds of MMORPGs, FPS, and MOBA
              games, such as World of Warcraft, Guild Wars 2, Battlefield 2042,
              League of Legends, and Dota 2.
            </p>

            <p className="text-gray-300 mb-6 font-mono">
              My greatest supporters are my wife and our spirited 9-year-old
              Chihuahua, Chester, who proudly serves as "Head of Security." I
              owe much of who I am today to their unwavering encouragement.
            </p>

            <p className="text-gray-300 mb-6 font-mono">
              My journey into programming began in 2015 when I took a Java
              Application Development course at a community college in
              Louisiana. I spent three years working in a warehouse for a liquor
              distributor in Lafayette before transferring to Dallas in 2020.
              During that transformative year, amid COVID restrictions, I seized
              the opportunity to teach myself Frontend Web Development using
              resources like LinkedIn Learning, Udemy, and Codecademy.
            </p>

            <p className="text-gray-300 mb-6 font-mono">
              This dedication to self-improvement and constant learning fueled
              my transition to a Business Intelligence Analyst role in 2022.
              It’s also what inspired me to create this portfolio and other
              exciting projects. My passion for technology and my can-do
              attitude continue to drive me as I explore new opportunities and
              challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 font-mono">Frontend</h3>
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
              <h3 className="text-xl font-bold mb-4 font-mono">Backend</h3>
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
              <h3 className="text-xl font-bold mb-4 font-mono">Business Intelligence</h3>
              <div className="flex flex-wrap gap-2">
                {businessIntell.map((tech, key) => (
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
              <h3 className="text-xl font-bold mb-4 font-mono">Data Analyst</h3>
              <div className="flex flex-wrap gap-2">
                {dataScience.map((tech, key) => (
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
        </div>
      </RevealOnScroll>
    </section>
  );
};
