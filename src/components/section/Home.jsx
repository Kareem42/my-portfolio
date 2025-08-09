
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-mono font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent leading-right">
            Hi, I am Justin Alcendor
          </h1>

          <p className="text-gray-400 dark:text-gray-300 text-lg mb-8 max-w-lg mx-auto font-mono">
            I’m a Business Intelligence Manager with a passion for innovation,
            blending my skills as a self-taught Frontend Web Developer and Data
            Analyst. I know it might sound like the stuff of myths — unicorn of
            sorts — but as you explore this portfolio, you&apos;ll discover just how
            real and possible this &quot;mythical unicorn&quot; truly is.
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
              className="font-mono border border-indigo-500/50 text-gray-400 dark:text-gray-300 py-3 px-6 rounded font-medium transition-all duration-200 
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
