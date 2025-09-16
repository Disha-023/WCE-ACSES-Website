import { useState, useRef } from "react";
import Button from "../components/Button.jsx";
import TargetCursor from "../components/TargetCursor.jsx";

const About = () => {
  const [showCursor, setShowCursor] = useState(false);
  const aboutRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("wceacses1995@gmail.com");
    setShowCursor(true);
    setTimeout(() => setShowCursor(false), 2000);
  };

  return (
    <section
      className="c-space my-20 relative"
      id="about"
      ref={aboutRef}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
      {showCursor && <TargetCursor spinDuration={2} hideDefaultCursor={true} />}

      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* About ACSES */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container neon-card cursor-target">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">About WCE ACSES</p>
              <p className="grid-subtext">
                WCE ACSES stands for the Association of Computer Science and
                Engineering Students...
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container neon-card cursor-target">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Mission</p>
              <p className="grid-subtext">
                To groom students technically, professionally, and logically...
              </p>
            </div>
          </div>
        </div>

        {/* Structure */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container neon-card cursor-target">
            <img src="assets/grid1.png" alt="grid-structure" />
            <div>
              <p className="grid-headtext">Structure</p>
              <p className="grid-subtext">
                Main Board, Mentor Board, Assistant Board, and Co-ordinators...
              </p>
              <Button name="Contact Us" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container neon-card cursor-target">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Activities</p>
              <ul className="list-disc list-inside grid-subtext space-y-2">
                <li>Technical Workshops</li>
                <li>Programming Sessions & Contests</li>
                <li>Mega-Event Techumen</li>
                <li>Social & Personality Enhancement</li>
                <li>Mock Interviews</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container neon-card cursor-target">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Community & Contact</p>
              <div
                className="copy-container flex items-center gap-3 mt-4 cursor-pointer cursor-target"
                onClick={handleCopy}
              >
                <img
                  src={showCursor ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  wceacses1995@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
