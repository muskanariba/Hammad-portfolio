import React from "react";

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
      className="bg-gray-100 py-10 px-4 md:px-12 max-w-6xl mx-auto relative"
      style={{ minHeight: "400px" }}
    >
    
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "45%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            clipPath: "polygon(0 0, 65% 0, 100% 100%, 0% 100%)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#162c6b",
            clipPath: "polygon(0 0, 60% 0, 100% 100%, 0% 100%)",
            zIndex: 1,
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 pl-[45%] flex flex-col items-center">
        <div className="text-center mb-10 w-full max-w-4xl">
          <h2 className="text-4xl font-bold text-black">Skills</h2>
          <p className="text-[#162c6b] mt-1 text-sm md:text-base">
            A showcase of my key skills and expertise
          </p>
        </div>

        {/* Grid with 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-1 bg-[#162c6b] text-white rounded-md shadow-md cursor-pointer hover:shadow-lg text-center min-w-[100px] h-10 flex items-center justify-center text-sm leading-none transform transition-transform duration-300 hover:scale-110"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
