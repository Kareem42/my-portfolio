import { GradientCta } from "../ui/GradientCta";
import { PhotoFrame } from "../ui/PhotoFrame";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center justify-center px-5 pt-28 pb-16 md:px-8"
    >
      <div className="reveal show">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
          <div className="relative mx-auto w-full max-w-lg md:order-2">
            <div
              aria-hidden="true"
              className="absolute -right-3 -bottom-3 h-full w-full border border-indigo-400/40 md:-right-5 md:-bottom-5"
            />
            <PhotoFrame id="hero" className="relative mx-auto w-full rounded-none border-border shadow-2xl shadow-indigo-950/40 md:mx-0" />
            <div className="absolute -top-4 left-4 border border-border bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70 md:left-6">
              <span className="mr-2 text-indigo-400">01</span> The engineer
            </div>
            <p className="mt-6 flex items-center justify-between border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/55">
              <span>Justin Alcendor</span>
              <span>Operations → BI → Software</span>
            </p>
          </div>

          <div className="md:order-1">
            <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-indigo-300">
              <span className="h-px w-8 bg-indigo-400" /> Software engineer · BI background
            </p>
            <h1 className="mb-7 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl">
              I know the work behind the workflow.
            </h1>

            <p className="mb-9 max-w-lg text-base leading-7 text-foreground/70 md:text-lg md:leading-8">
              I’m Justin. Years in warehouse operations and business
              intelligence taught me where process breaks down and what people
              need from their tools. Now I build full-stack software that makes
              complex work easier to see and use.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <GradientCta href="#projects">See how I build <span aria-hidden="true" className="ml-2">↗</span></GradientCta>
              <a href="#contact" className="font-mono text-sm text-foreground/70 underline decoration-indigo-400/60 underline-offset-4 transition-colors hover:text-foreground">
                Let’s talk
              </a>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 border-y border-border py-4">
              <div className="pr-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-indigo-300">Operations</p>
                <p className="mt-1 text-xs text-foreground/55">I’ve led the work</p>
              </div>
              <div className="border-l border-border px-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-indigo-300">Analytics</p>
                <p className="mt-1 text-xs text-foreground/55">I’ve measured it</p>
              </div>
              <div className="border-l border-border pl-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-indigo-300">Engineering</p>
                <p className="mt-1 text-xs text-foreground/55">I can build it</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
