import Terminal from '../components/Terminal';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full flex flex-col items-center text-center gap-6">
        <h1 className="mt-16 sm:mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold glow-text leading-tight">
          ASSOCIATION OF COMPUTER SCIENCE AND ENGINEERING STUDENTS{" "}
          <span className="waving-hand">🖥️</span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl glow-subtext">
          Logically Shifting The World
        </p>

        <div className="w-full flex justify-center mt-6 sm:mt-8">
          <div className="w-full max-w-4xl h-[45vh] sm:h-[55vh] border border-[#3F6ABD] rounded-xl shadow-lg overflow-hidden">
            <Terminal />
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#about"
          className="mt-6 sm:mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Let's Work Together
        </a>
      </div>
    </section>
  );
};

export default Hero;
