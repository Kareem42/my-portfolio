import { useState } from "react";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/section/Home";
import { About } from "./components/section/About";
import { History } from "./components/section/History";
// import { Achievements } from "./components/section/Achievements";
import { Projects } from "./components/section/Projects";
import { Contact } from "./components/section/Contact";
import { Footer } from "./components/section/Footer";


function App() {
  const isLoaded = true;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Loading screen temporarily disabled. */}
      <div
        className={`relative min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-background text-foreground`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        {/* <Achievements /> */}
        <History />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
