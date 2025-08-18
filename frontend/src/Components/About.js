import React from 'react';
import { FaTasks, FaUsersCog, FaLaptopCode, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="bg-gray-100 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-wide text-center mb-4"
        >
          <span className="text-black">Who is</span>{" "}
          <span className="text-[#162c6b]">Hammad Saeed ?</span>
        </motion.h2>

        <p className="text-center text-gray-600 text-base sm:text-lg mb-12 px-2">
          A passionate software engineer with expertise in project management, coding, and innovative tech solutions.
        </p>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">

          {/* Left Card */}
          <div className="lg:col-span-7 relative flex justify-center order-1">
            <div
              className="absolute bg-[#162c6b] rounded-2xl hidden sm:block"
              style={{
                top: '20px',
                left: '-25px',
                width: '108%',
                height: '100%',
                zIndex: 0
              }}
            ></div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 text-sm sm:text-base md:text-lg leading-snug font-sans tracking-wide
                         transition-all duration-500 ease-in-out hover:scale-[1.03] hover:rotate-[1deg] hover:shadow-[0_10px_30px_rgba(22,44,107,0.4)] overflow-hidden"
              style={{
                borderLeft: '8px solid #162c6b',
                borderTop: '8px solid #162c6b',
                borderBottom: '8px solid #162c6b',
                clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
                zIndex: 1
              }}
            >
              <p className="mb-3">
                I am a passionate software engineer with an interest in project management and web development.
                Currently pursuing my Bachelor's in Software Engineering at the University of Karachi.
              </p>
              <p className="mb-3">
                I enjoy learning new technologies, solving problems, and contributing to open-source projects.
              </p>
              <p>
                Always motivated to create innovative solutions and make a positive impact in the tech world.
              </p>
            </motion.div>
          </div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative order-2"
          >
            {/* Connecting Lines (visible on all screens now) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#162c6b] z-0"></div>
            <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-[#162c6b] z-0"></div>

            <div className="grid grid-cols-2 gap-6 sm:gap-10 relative z-10">
              {[
                { icon: <FaTasks />, text: "Task Planning" },
                { icon: <FaUsersCog />, text: "Team Lead" },
                { icon: <FaLaptopCode />, text: "Coding Work" },
                { icon: <FaCode />, text: "Programming" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(22,44,107,0.3)] group relative"
                >
                  <div className="transform transition-transform duration-300 group-hover:scale-125 text-[#162c6b]">
                    {React.cloneElement(item.icon, { className: "w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]" })}
                  </div>
                  <p className="mt-4 sm:mt-6 font-medium text-sm sm:text-base text-black text-center">{item.text}</p>

                  {/* Connectors visible on all screens */}
                  {i === 0 && (
                    <>
                      <div className="absolute top-1/2 right-[-20px] w-[20px] sm:w-[25px] h-[3px] bg-[#162c6b]"></div>
                      <div className="absolute bottom-[-20px] left-1/2 w-[3px] h-[20px] sm:h-[25px] bg-[#162c6b]"></div>
                    </>
                  )}
                  {i === 1 && (
                    <div className="absolute bottom-[-20px] left-1/2 w-[3px] h-[20px] sm:h-[25px] bg-[#162c6b]"></div>
                  )}
                  {i === 2 && (
                    <div className="absolute top-1/2 right-[-20px] w-[20px] sm:w-[25px] h-[3px] bg-[#162c6b]"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
