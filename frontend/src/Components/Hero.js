import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  const resumeUrl = '/Hammad Saeed Resume.pdf';
  const linkedinUrl =
    'https://www.linkedin.com/in/pm-hammad-saeed?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const emailUrl = 'mailto:pmhammadsaeed@gmail.com';

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row relative overflow-visible bg-gray-100"
    >
      {/* Left Side: Text */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 space-y-6 text-black text-center lg:text-left">
        <p className="text-sm md:text-base font-semibold tracking-wide uppercase text-gray-700">
          Hello, I am
        </p>

        {/* Fixed Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-wide relative inline-block whitespace-normal lg:whitespace-nowrap">
          <Typewriter
            words={['Hammad Saeed']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>

        <p className="text-lg md:text-2xl lg:text-4xl font-semibold max-w-md md:max-w-lg leading-relaxed text-[#162c6b]">
          Software Engineer & Project Manager <br />
          <span className="text-base md:text-lg font-bold text-black">
            Driving creativity & leading teams to success.
          </span>
        </p>

        {/* Buttons + Social */}
        <div className="flex flex-col items-center lg:items-start gap-4 mt-4">
          {/* Resume Button */}
          <a
            href={resumeUrl}
            download
            className="inline-flex justify-center items-center bg-[#162c6b] text-white font-semibold px-6 md:px-8 py-3 rounded shadow-lg hover:bg-[#121f4a] hover:shadow-[#121f4a] transition duration-300 min-w-[160px] h-12 text-sm md:text-base"
          >
            Download Resume
          </a>

          {/* Social Icons Below */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-[#162c6b] shadow-lg hover:bg-[#162c6b] hover:text-white transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={emailUrl}
              className="p-3 rounded-full bg-white text-[#162c6b] shadow-lg hover:bg-[#162c6b] hover:text-white transition duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="lg:w-1/2 relative flex justify-center items-center px-8 md:px-0 py-12 md:py-16 lg:py-20">
        {/* Large screens: diagonal */}
        <div className="absolute top-0 left-0 w-full h-full hidden lg:block">
          <div
            className="absolute top-0 left-0 w-full h-full bg-black z-0"
            style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0 100%)' }}
          />
          <div
            className="absolute top-0 left-0 w-full h-full bg-[#162c6b] z-1"
            style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)' }}
          />
        </div>

        {/* Small & medium screens: square block */}
        <div className="absolute top-0 left-0 w-full h-48 sm:h-56 md:h-64 lg:hidden bg-[#162c6b] rounded-lg z-0"></div>

        {/* Profile Image */}
        <div className="relative w-40 sm:w-56 md:w-64 lg:w-72 h-40 sm:h-56 md:h-64 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-[#162c6b] ring-opacity-40 transition-transform duration-500 hover:scale-110 hover:shadow-[#121f4a] z-10">
          <img
            src="/hammadpic.png"
            alt="Hammad Saeed"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
