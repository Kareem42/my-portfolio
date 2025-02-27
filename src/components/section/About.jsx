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
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate about creating accurate, user-friendly dashboards and
            visulizations, as well as creating sustainable and well designed web
            applications in my free time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
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
                  className="bg-blue-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
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
                  className="bg-blue-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
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
                  className="bg-blue-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> B.S. in Management Informations Systems</strong> -
                University of Louisiana at Lafayette 2003-2006
              </li>
              <li>
                Relevant Coursework: Data Management, Information Security, Data
                Visualization
              </li>
            </ul>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> Associates in Information Technology</strong> -
                South Louisiana Community College 2015-2017
              </li>
              <li>
                Relevant Coursework: Networking, Java Development, Security Management
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div className="text-">
                <h4 className="font-bold">
                  Business Intelligence Manager at Southern Glazers Wine &
                  Spirits - TX 2023-present
                </h4>
                <p>
                  Developed Excel and Tableau Dashboards while maintaining data
                  structures, data cleaning, and filtering for live tracking
                </p>
              </div>

              <div>
                <h4 className="font-bold">
                  Business Intelligence Analyst at Southern Glazers Wine &
                  Spirits - TX 2022-2023
                </h4>
                <p>
                  Developed Excel and Tableau Dashboards while maintaining data
                  structures, data cleaning, and querying for live tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
