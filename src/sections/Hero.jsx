import CylinderModel from "../components/CyclinderModel";
import Terminal from "../components/Terminal";  // ✅ default import

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-screen h-screen max-w-6xl"
    >
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 gap-6">
        <h1 className="mt-24 sm:text-5xl text-3xl glow-text">
          ASSOCIATION OF COMPUTER SCIENCE AND ENGINEERING STUDENTS{" "}
          <span className="waving-hand">🖥️</span>
        </h1>
        <p className="hero_subtext sm:text-2xl text-lg glow-subtext">
          Logically Shifting The World
        </p>

        <div className="bg-transparent h-[60vh]">
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default Hero;
