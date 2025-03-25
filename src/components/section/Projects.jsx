import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-mono mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shado-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2 font-mono">
                {" "}
                Face Recognition Smart Brain Application
              </h3>
              <p className="font-mono">
                A full-stack web application that detects a face using Machine
                Learning API. •UI built in React Js, RESTful Node/Express server
                and PostgreSQL database.
              </p>

              <div className="flex flex-wrap gap-2 mb-4 font-mono">
                {[
                  "React",
                  "Node.js",
                  "Javascript",
                  "HTML5",
                  "CSS3",
                  "Express.js",
                  "PostgreSQL",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="font-mono bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Kareem42/facerecognitionbrain"
                  className="text-indigo-400 font-mono hover:underline transition-colors"
                >
                  View Project ⇛{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shado-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2 font-mono">
                {" "}
                SmartBrain API
              </h3>
              <p className="font-mono">
                This is the Backend Server that was created to store all of the
                registered users in the Face Recognition Smart Brain application
                with Clarifai WebAPI.
              </p>

              <div className="flex flex-wrap gap-2 mb-4 font-mono">
                {["Node.js", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Kareem42/smartbrain-api"
                  className="text-indigo-400 font-mono hover:underline transition-colors"
                >
                  View Project ⇛{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shado-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2 font-mono">
                {" "}
                Pokemon Starter
              </h3>
              <p className="font-mono">
                A machine learning training model that will assist new trainers to
                select a starter Pokemon based on Type and Total Stats.
              </p>

              <div className="flex flex-wrap gap-2 mb-4 font-mono">
                {["Python", "Machine Learning", "Excel"].map((tech, key) => (
                  <span
                    key={key}
                    className="font-mono bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Kareem42/python-projects/blob/main/StartingPokemonDecisionTree.ipynb"
                  className="text-indigo-400 font-mono hover:underline transition-colors"
                >
                  View Project ⇛{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shado-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2 font-mono"> Project 4</h3>
              <p className="font-mono">Put description of the project here</p>

              <div className="flex flex-wrap gap-2 mb-4 font-mono">
                {["React", "Node.js", "AWS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 font-mono text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-indigo-400 font-mono hover:underline transition-colors"
                >
                  View Project ⇛{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shado-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2 font-mono"> Project 5</h3>
              <p className="font-mono">Put description of the project here</p>

              <div className="flex flex-wrap gap-2 mb-4 font-mono">
                {["React", "Node.js", "AWS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 font-mono text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-indigo-400 hover:underline font-mono transition-colors"
                >
                  View Project ⇛{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shado-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2 font-mono"> Project 6</h3>
              <p className="font-mono">Put description of the project here</p>

              <div className="flex flex-wrap gap-2 mb-4 font-mono">
                {["React", "Node.js", "AWS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 font-mono text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba[(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-indigo-400 font-mono hover:underline transition-colors"
                >
                  View Project ⇛{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
