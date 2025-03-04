import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css"
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/section/Home";
import { About } from "./components/section/About";
import { Projects} from "./components/section/Projects";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
       <div className={`min-h-screen transition-opacity duration-700 ${
       isLoaded ? "opacity-100" : "opactity-0"} bg-black text-gray`}
       >
       <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Home />
       <About />
       <Projects />

      </div>
      </>
  );
}

export default App;
