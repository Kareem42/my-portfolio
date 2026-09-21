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
              className="inline-flex font-mono items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                View Projects
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex font-mono items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Contact Me
              </span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
