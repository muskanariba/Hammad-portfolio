import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaProjectDiagram,
  FaHandsHelping,
  FaGlobe,
  FaBriefcase,
} from "react-icons/fa";

const experiences = [
  {
    title: "Graphic Design Teacher & Instructor",
    period: "Oct – Dec 2022",
    company: "Creative IT Institute & Software House",
    location: "Malir, Karachi",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Design Director",
    period: "Jan 2023 – Present",
    company: "SKRIT Solutions",
    location: "Gulshan-E-Iqbal, Block-9, Karachi",
    portfolio: "https://www.behance.net/hammadsaeed6",
    icon: <FaLaptopCode />,
  },
  {
    title: "Senior Graphic Designer & Team Lead",
    period: "Oct – Dec 2023",
    company: "AimTech Innovative",
    location: "Model Colony, Karachi",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Project Management Intern (Remote)",
    period: "Jun – Aug 2025",
    company: "Excelerate",
    location: "Dubai | USA",
    links: [
      {
        label: "Team Charter",
        url: "https://drive.google.com/file/d/1HJBhOgdZ6PasrXmlyodezDNXepUR_jyx/view?usp=drivesdk",
      },
      {
        label: "Project Schedule",
        url: "https://drive.google.com/file/d/1Hg869ld1LvXIIoQfP5MD-sEneTj_eaan/view?usp=drivesdk",
      },
      {
        label: "Risk Register",
        url: "https://drive.google.com/file/d/1Hq-nQmyo0tEarNDatn7wmRzMLpqrcXd0/view?usp=drivesdk",
      },
    ],
    website: "https://4excelerate.org/",
    icon: <FaGlobe />,
  },
  {
    title: "PR & Sponsorship Intern",
    period: "Jul 2025 – Present",
    company: "Kaar-E-Kamal Welfare Foundation",
    location: "Lahore",
    website: "https://kaarekamal.org/",
    icon: <FaHandsHelping />,
  },
  {
    title: "Project Management Intern (Remote)",
    period: "Jul 2025 – Present",
    company: "Nobel Learning PBC",
    location: "Washington DC, USA",
    website: "https://nobelnavigators.com/",
    icon: <FaBriefcase />,
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="bg-gray-100 py-20 px-4 w-full overflow-hidden"
    >
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-5xl font-bold mb-4 leading-tight"
        >
          <span className="text-black">My</span>{" "}
          <span className="text-[#162c6b]">Work Experience</span>
        </motion.h2>
        <p className="text-[#162c6b] mt-1 text-sm md:text-lg">
          My professional journey in design & project management
        </p>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#162c6b] h-full"></div>

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="mb-2 flex flex-col md:flex-row items-center relative"
            >
              {/* Timeline icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-[#162c6b] text-white flex items-center justify-center z-10 shadow-md text-sm">
                {exp.icon}
              </div>

              {/* Experience card */}
              <div
                className={`relative bg-white rounded-lg shadow-md p-4 w-full md:w-[42%] border border-gray-100 mt-3 md:mt-0
                  transition-transform hover:scale-[1.015] hover:shadow-lg duration-200
                  ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
              >
                {/* Arrow */}
                <div
                  className={`hidden md:block absolute top-5 w-0 h-0 border-t-6 border-b-6 border-transparent
                    ${
                      isLeft
                        ? "border-r-6 border-r-white -right-2"
                        : "border-l-6 border-l-white -left-2"
                    }`}
                ></div>

                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3 className="text-sm font-semibold text-black flex items-center gap-2">
                    {exp.icon}
                    {exp.title}
                  </h3>
                  <span className="text-xs text-gray-500">{exp.period}</span>
                </div>

                <p className="font-medium text-xs text-[#162c6b] mt-0.5">
                  {exp.website ? (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>
                <p className="text-gray-600 text-[11px]">{exp.location}</p>

                {exp.portfolio && (
                  <p className="mt-1 text-[11px]">
                    Portfolio:{" "}
                    <a
                      href={exp.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#162c6b] hover:underline"
                    >
                      {exp.portfolio}
                    </a>
                  </p>
                )}

                {exp.links && (
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] mt-2">
                    {exp.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#162c6b] hover:underline"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
