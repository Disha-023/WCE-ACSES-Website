
import Hero from './Hero.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Contact from './Contact.jsx';
import Events from './Events.jsx';
import Teams from './Teams.jsx';

const Home = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      
      {/* Dynamic Gradient Background */}
    <div className="bg-gradient-animated fixed inset-0"></div>


      {/* Blur Overlay */}
      <div
        className="fixed inset-0"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          zIndex: -1,
        }}
      ></div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-4  ">
        <Navbar />
        <Hero />
        <About />
        <Events />
        <Teams />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
