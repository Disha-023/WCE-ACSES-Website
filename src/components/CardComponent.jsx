
import React from "react";

const CardComponent = ({ name, role, image, linkedin, github, instagram }) => {
  return (
    <div
      className="max-w-xs w-full 
                 bg-[linear-gradient(135deg,#0b0b2f,#1a0b4f,#000020)] text-white
                 rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center
                 transform transition duration-300 hover:scale-105 hover:bg-[rgba(10,5,30,0.6)] hover:shadow-[0_0_20px_rgba(0,223,255,0.6),0_0_40px_rgba(127,90,240,0.6)]"
    >
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[rgba(127,90,240,0.3)] shadow-sm"
      />

      {/* Name and Role */}
      <h2 className="text-xl font-semibold text-[#00dfff]">{name}</h2>
      <p className="text-gray-300 mb-4 uppercase tracking-wide text-sm">{role}</p>

      {/* Social Icons */}
      <div className="flex gap-4">
        {/* LinkedIn */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgba(10,5,30,0.6)] p-2 rounded-full hover:bg-[rgba(127,90,240,0.3)] transition"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-10h3v1.379c.84-1.022 2.285-1.379 3.5-1.379 2.481 0 4.5 2.019 4.5 4.5v5.5z"/>
          </svg>
        </a>

        {/* GitHub */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgba(10,5,30,0.6)] p-2 rounded-full hover:bg-[rgba(127,90,240,0.3)] transition"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.932 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.805 5.628-5.475 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgba(10,5,30,0.6)] p-2 rounded-full hover:bg-[rgba(127,90,240,0.3)] transition"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5C19.097 2 22 4.903 22 7.75v8.5C22 19.097 19.097 22 16.25 22h-8.5C4.903 22 2 19.097 2 16.25v-8.5C2 4.903 4.903 2 7.75 2zm0 1.5C5.679 3.5 3.5 5.679 3.5 7.75v8.5c0 2.071 2.179 4.25 4.25 4.25h8.5c2.071 0 4.25-2.179 4.25-4.25v-8.5c0-2.071-2.179-4.25-4.25-4.25h-8.5z"/>
            <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"/>
            <circle cx="17.5" cy="6.5" r="1"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
