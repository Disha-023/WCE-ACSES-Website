
const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-screen h-screen overflow-hidden hero-section"
    >
      {/* Hero content (text + button) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4 gap-6">
        {/* Main Text */}
        <h1 className="hero_tag sm:text-5xl text-3xl glow-text">
          ASSOCIATION OF COMPUTER SCIENCE AND ENGINEERING STUDENTS <span className="waving-hand">🖥️</span>
        </h1>
        <p className="hero_subtext sm:text-2xl text-lg glow-subtext">
          Logically Shifting The World
        </p>

        {/* Hero Button */}
        <a href="#about" className="hero-btn mt-6">
          Let's Work Together
        </a>
      </div>
    </section>
  );
};

export default Hero;
