
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import { EventsData } from '../constants/index.js';

const EventCount = EventsData.length;

const Events = () => {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedEventIndex((prevIndex) => {
      if (direction === 'previous') return prevIndex === 0 ? EventCount - 1 : prevIndex - 1;
      else return prevIndex === EventCount - 1 ? 0 : prevIndex + 1;
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
    );
  }, [selectedEventIndex]);

  const currentEvent = EventsData[selectedEventIndex];

  return (
    <section className="c-space my-20" id="events">
      <p className="head-text text-center text-3xl sm:text-4xl font-bold text-white mb-10">
        Our Events
      </p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Left Event Card */}
        <div className="event-card relative p-6 sm:p-10 flex flex-col gap-5">
          {currentEvent.spotlight && (
            <div className="absolute top-0 right-0 w-full h-64 sm:h-96 overflow-hidden rounded-xl">
              <img
                src={currentEvent.spotlight}
                alt="spotlight"
                className="w-full h-full object-cover brightness-75"
                loading="lazy"
              />
            </div>
          )}

          <div
            className="logo-container w-fit p-2 rounded-lg"
            style={currentEvent.logoStyle}
          >
            <img
              className="w-10 h-10"
              src={currentEvent.logo}
              alt="logo"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-3 text-white my-5 relative z-10">
            <p className="text-2xl sm:text-3xl font-semibold animatedText">{currentEvent.title}</p>
            <p className="animatedText text-white-400">{currentEvent.desc}</p>
            <p className="animatedText text-white-400">{currentEvent.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5 relative z-10">
            <a
              href={currentEvent.link || '#'}
              className="text-cyan-400 hover:text-purple-400 flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7 relative z-10">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Event Image */}
        <div className="event-image-container rounded-lg overflow-hidden h-64 sm:h-full border border-purple-900">
          <img
            src={currentEvent.image || '/assets/default-event.jpg'}
            alt="event"
            className="w-full h-full object-cover brightness-90"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
