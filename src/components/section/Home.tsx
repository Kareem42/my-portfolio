import { RevealOnScroll } from "../RevealOnScroll";
import SplitComponent from "../SplitComponent";
import { GradientCta } from "../ui/GradientCta";
import { PhotoFrame } from "../ui/PhotoFrame";

export const Home = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-28 pb-16"
    >
      <RevealOnScroll>
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <PhotoFrame
            id="hero"
            className="mx-auto w-full max-w-md md:mx-0"
          />

          <div className="text-left">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-indigo-400">
              Full Stack Engineer
            </p>
            <SplitComponent
              tag="h1"
              text="Hi, I'm Justin Alcendor"
              className="mb-6 text-5xl font-bold md:text-6xl"
              gradient={{ from: "#3b82f6", to: "#c084fc" }}
              delay={100}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              active={isLoaded}
            />

            <p className="mb-8 max-w-xl font-mono text-lg text-foreground/90">
              Full Stack Engineer leveraging deep Business Intelligence expertise
              and modern software engineering to build high-impact, end-to-end
              solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <GradientCta href="#projects">View Projects</GradientCta>
              <GradientCta href="#contact">Contact Me</GradientCta>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
