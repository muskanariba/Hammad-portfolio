import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Sponsor Engagement",
  "Public Speaking",
  "Project Coordination",
  "Stakeholder Reporting",
  "Milestone Tracking",
  "Cross-Team Collaboration",
  "Creative Leadership",
  "Team Mentorship",
  "Brand Strategy",
  "Client Communication"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-100 py-12 px-4 md:px-12 w-full relative"
    >
      {/* Left background shapes (hide on small) */}
      <div className="absolute top-0 left-0 w-[45%] h-full z-0 pointer-events-none hidden md:block">
        <div
          className="absolute top-0 left-0 w-full h-full bg-black"
          style={{ clipPath: "polygon(0 0, 65% 0, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#162c6b]"
          style={{ clipPath: "polygon(0 0, 60% 0, 100% 100%, 0% 100%)" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 md:pl-[45%] flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight"
        >
          <span className="text-black">Expertise</span>{" "}
          <span className="text-[#162c6b]">I Have</span>
        </motion.h2>

        {/* Subtext */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 max-w-2xl px-2">
          A showcase of my key skills and expertise
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 w-full max-w-6xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-2 py-2 sm:px-3 sm:py-2 md:px-3 md:py-3 
                         bg-[#162c6b] text-white rounded-md shadow-md cursor-pointer hover:shadow-lg 
                         flex items-center justify-center 
                         text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-medium 
                         text-center break-words whitespace-normal 
                         min-h-[35px] sm:min-h-[40px] md:min-h-[48px] lg:min-h-[52px] 
                         transform transition-transform duration-300 hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
