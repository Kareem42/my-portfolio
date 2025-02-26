export const Home = () => {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          Hi, I'm Justin Alcendor
        </h1>
      </div>

      <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
        I'm a Business Intelligence Manager, who's also an inspiring self taught
        Front-End Developer and Data Scientist. I know, I know it sounds weird,
        like a mythical unicorn, but when you go through this portfolio, you
        will see how possible it is.
      </p>

      <div className="flex justify-center space-x-4">
      <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium relative overflow-hidden hover:translate-y-0.5 
      hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View Projects
      </a>

      </div>



    </section>
  );
};
