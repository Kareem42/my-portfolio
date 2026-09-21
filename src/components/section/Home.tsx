import { RevealOnScroll } from "../RevealOnScroll";
import heroPic from "../../assets/heroPic.png";
// import SplitComponent from "../SplitComponent";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="mb-8 flex justify-center">
            <img
              src={heroPic}
              alt="Justin Alcendor"
              className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500/30"
            />
          </div>
          {/* <SplitComponent selector="#heading"> */}
          <h1
            id="heading"
            className="text-5xl md:text-6xl font-mono font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text leading-right text-transparent"
          >
            Hi, I am Justin Alcendor
          </h1>
          {/* </SplitComponent> */}

          <p className="text-lg mb-8 max-w-lg mx-auto font-mono">
            Full Stack Engineer leveraging deep Business Intelligence expertise
            and modern software engineering to build high-impact, end-to-end
            solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-indigo-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden font-mono hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="font-mono border border-indigo-500/50 text-muted-foreground py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
