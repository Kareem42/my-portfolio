import { useEffect } from "react";
import PropTypes from "prop-types";
import { ModeToggle } from "@/lib/mode-toggle";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-lg border-b border-border shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-foreground">
            {"  "}
            Just.<span className="Font-mono text-indigo-400">in.Time</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-foreground"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="block py-2 px-3 font-mono text-white bg-indigo-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-indigo-400"
            >
              {" "}
              Home{" "}
            </a>
            <a
              href="#about"
              className="block font-mono py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-400 md:p-0 dark:text-white md:dark:hover:text-indigo-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {" "}
              About{" "}
            </a>

            <a
              href="#history"
              className="block font-mono py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-200 md:p-0 dark:text-white md:dark:hover:text-indigo-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {" "}
              History{" "}
            </a>

            <a
              href="#projects"
              className="block font-mono py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-200 md:p-0 dark:text-white md:dark:hover:text-indigo-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {" "}
              Projects{" "}
            </a>

            <a
              href="#contact"
              className="block font-mono py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-200 md:p-0 dark:text-white md:dark:hover:text-indigo-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {" "}
              Contact{" "}
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
