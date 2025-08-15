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
    <section id="skills" className="bg-gray-100 py-12 px-4 md:px-12 w-full relative">

      {/* Left background shapes */}
      <div className="absolute top-0 left-0 w-[45%] h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-black" style={{ clipPath: "polygon(0 0, 65% 0, 100% 100%, 0% 100%)" }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#162c6b]" style={{ clipPath: "polygon(0 0, 60% 0, 100% 100%, 0% 100%)" }}></div>
      </div>

      <div className="relative z-10 pl-[45%] flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-5xl font-bold text-center mb-2"
        >
          <span className="text-black">Expertise</span>{" "}
          <span className="text-[#162c6b]">I Have</span>
        </motion.h2>

        <p className="text-center text-gray-600 text-lg mb-6">
          A showcase of my key skills and expertise
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-2 bg-[#162c6b] text-white rounded-md shadow-md cursor-pointer hover:shadow-lg text-center min-w-[100px] h-12 flex items-center justify-center text-sm leading-none transform transition-transform duration-300 hover:scale-110"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
