
import { useState } from 'react';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('sid@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-32" id="about">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">

        {/* About ACSES */}
        <div className="neon-card">
          <h2 className="hero_tag glow-text text-4xl sm:text-5xl">About WCE ACSES</h2>
          <p className="glow-subtext text-lg sm:text-xl">
            WCE ACSES stands for the Association of Computer Science and Engineering Students at the Walchand College of Engineering, Sangli. Established in 1995, it is the official departmental technical club for CSE students, focusing on technical, professional, and social development.
          </p>
        </div>

        {/* Mission */}
        <div className="neon-card">
          <h2 className="hero_tag glow-text text-3xl sm:text-4xl">Mission</h2>
          <p className="glow-subtext text-lg sm:text-xl">
            To groom students technically, professionally, and logically, while fostering social values and personal excellence.
          </p>
        </div>

        {/* Activities / Key Events */}
        <div className="neon-card">
          <h2 className="hero_tag glow-text text-3xl sm:text-4xl">Activities</h2>
          <ul className="list-disc list-inside glow-subtext text-lg sm:text-xl space-y-2">
            <li>Technical Workshops: Hands-on sessions to enhance technical skills.</li>
            <li>Programming Sessions & Contests: Opportunities for coding competitions at various levels.</li>
            <li>Mega-Event Techumen: A large-scale technical festival.</li>
            <li>Social & Personality Enhancement: Initiatives like SITAC.</li>
            <li>Mock Interviews: Preparation for professional interviews.</li>
          </ul>
        </div>

        {/* Structure */}
        <div className="neon-card">
          <h2 className="hero_tag glow-text text-3xl sm:text-4xl">Structure</h2>
          <p className="glow-subtext text-lg sm:text-xl">
            Main Board, Mentor Board, Assistant Board, and Co-ordinators facilitate activities and mentorship.
          </p>
        </div>

        {/* Community / Contact */}
        <div className="neon-card md:col-span-2">
          <h2 className="hero_tag glow-text text-3xl sm:text-4xl">Community & Contact</h2>
          <p className="glow-subtext text-lg sm:text-xl">
            ACSES promotes a collaborative and inclusive environment where students can learn, innovate, and develop leadership skills.
          </p>
          <div className="copy-container flex items-center gap-3 mt-4 cursor-pointer" onClick={handleCopy}>
            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
            <p className="glow-subtext text-lg sm:text-xl">wceacses1995@gmail.com</p>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default About;
