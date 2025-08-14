import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Hero() {
  const resumeUrl = '/Hammad Saeed Resume.pdf';
  const linkedinUrl = 'https://www.linkedin.com/in/pm-hammad-saeed?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const githubUrl = 'https://github.com/yourgithub';

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row relative overflow-visible bg-gray-100"
    >

      <div className="md:w-1/2 flex flex-col items-start justify-center px-16 py-20 space-y-6 text-black">
        <p className="text-sm md:text-base font-semibold tracking-wide uppercase text-gray-700">
          Hello, I am
        </p>

        <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-wide whitespace-nowrap relative inline-block">
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

        <p className="text-xl md:text-4xl font-semibold max-w-lg leading-relaxed text-[#162c6b]">
          Software Engineer & Project Manager <br />
          <span className="text-base md:text-lg font-bold text-black">
            Driving creativity & leading teams to success.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          {/* Download Resume */}
          <a
            href={resumeUrl}
            download
            className="inline-flex justify-center items-center bg-[#162c6b] text-white font-semibold px-8 py-3 rounded shadow-lg hover:bg-[#121f4a] hover:shadow-[#121f4a] transition duration-300 min-w-[140px] h-12"
            style={{ fontSize: '0.9rem' }}
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-[#162c6b] shadow-lg hover:bg-[#162c6b] hover:text-white transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-[#162c6b] shadow-lg hover:bg-[#162c6b] hover:text-white transition duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div
        className="md:w-1/2 relative flex justify-center items-center pb-20"
        style={{ overflow: 'visible' }}
      >
        {/* Black diagonal border behind blue diagonal */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0 100%)',
            zIndex: 0,
          }}
        />

        {/* Blue diagonal on top with darker blue */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#162c6b',
            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)',
            zIndex: 1,
          }}
        />

        {/* Profile Image */}
        <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-[#162c6b] ring-opacity-40 transition-transform duration-500 hover:scale-110 hover:shadow-[#121f4a] z-10 ml-16">
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
