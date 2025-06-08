import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Apply dark mode class to the <html> element
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-900"
    >
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-2 px-4 rounded font-mono"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-mono font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent leading-right">
            Hi, I am Justin Alcendor
          </h1>

          <p className="text-gray-400 dark:text-gray-300 text-lg mb-8 max-w-lg mx-auto font-mono">
            I’m a Business Intelligence Manager with a passion for innovation,
            blending my skills as a self-taught Frontend Web Developer and Data
            Analyst. I know it might sound like the stuff of myths — unicorn of
            sorts — but as you explore this portfolio, you'll discover just how
            real and possible this "mythical unicorn" truly is.
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
