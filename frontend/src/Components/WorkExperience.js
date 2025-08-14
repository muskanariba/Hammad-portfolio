import React from 'react';
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaProjectDiagram,
  FaHandsHelping,
  FaGlobe,
  FaBriefcase,
} from 'react-icons/fa';

const experiences = [
  { title: 'Graphic Design Teacher & Instructor', period: 'Oct – Dec 2022', company: 'Creative IT Institute & Software House', location: 'Malir, Karachi', icon: <FaChalkboardTeacher /> },
  { title: 'Design Director', period: 'Jan 2023 – Present', company: 'SKRIT Solutions', location: 'Gulshan-E-Iqbal, Block-9, Karachi', portfolio: 'https://www.behance.net/hammadsaeed6', icon: <FaLaptopCode /> },
  { title: 'Senior Graphic Designer & Team Lead', period: 'Oct – Dec 2023', company: 'AimTech Innovative', location: 'Model Colony, Karachi', icon: <FaProjectDiagram /> },
  { title: 'Project Management Intern (Remote)', period: 'Jun – Aug 2025', company: 'Excelerate', location: 'Dubai | USA', links: [
      { label: 'Team Charter', url: 'https://drive.google.com/file/d/1HJBhOgdZ6PasrXmlyodezDNXepUR_jyx/view?usp=drivesdk' },
      { label: 'Project Schedule', url: 'https://drive.google.com/file/d/1Hg869ld1LvXIIoQfP5MD-sEneTj_eaan/view?usp=drivesdk' },
      { label: 'Risk Register', url: 'https://drive.google.com/file/d/1Hq-nQmyo0tEarNDatn7wmRzMLpqrcXd0/view?usp=drivesdk' },
    ], website: 'https://4excelerate.org/', icon: <FaGlobe /> },
  { title: 'PR & Sponsorship Intern', period: 'Jul 2025 – Present', company: 'Kaar-E-Kamal Welfare Foundation', location: 'Lahore', website: 'https://kaarekamal.org/', icon: <FaHandsHelping /> },
  { title: 'Project Management Intern (Remote)', period: 'Jul 2025 – Present', company: 'Nobel Learning PBC', location: 'Washington DC, USA', website: 'https://nobelnavigators.com/', icon: <FaBriefcase /> },
];

export default function WorkExperience() {
  return (
    <section id="work-experience" className="bg-gray-50 py-12 px-4 w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Work Experience</h2>
        <p className="text-[#162c6b] mt-2 text-base md:text-lg">
          My professional journey in design & project management
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#162c6b] h-full"></div>

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div key={idx} className="mb-10 flex flex-col md:flex-row items-center relative">

              {/* Timeline icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#162c6b] text-white flex items-center justify-center z-10 shadow-md">
                {exp.icon}
              </div>

              {/* Card */}
              <div
                className={`relative bg-white rounded-xl shadow-md p-4 w-full md:w-[40%] border border-gray-100 mt-12 md:mt-0
                  transition-transform hover:scale-[1.02] hover:shadow-lg duration-200
                  ${isLeft ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'}`}
              >

        
                <div
                  className={`hidden md:block absolute top-6 w-0 h-0 border-t-8 border-b-8 border-transparent
                    ${isLeft 
                      ? 'border-r-8 border-r-white -right-2' 
                      : 'border-l-8 border-l-white -left-2'}`}
                ></div>

                <div className="flex justify-between items-start">
                  <h3 className="text-base font-semibold text-black flex items-center gap-2">{exp.icon}{exp.title}</h3>
                  <span className="text-xs text-gray-500">{exp.period}</span>
                </div>
                <p className="font-medium text-sm text-[#162c6b] mt-0.5">
                  {exp.website ? (
                    <a href={exp.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{exp.company}</a>
                  ) : (
                    exp.company
                  )}
                </p>
                <p className="text-gray-600 text-xs">{exp.location}</p>

                {exp.portfolio && (
                  <p className="mt-1 text-xs">
                    Portfolio: <a href={exp.portfolio} target="_blank" rel="noopener noreferrer" className="text-[#162c6b] hover:underline">{exp.portfolio}</a>
                  </p>
                )}

                {exp.links && (
                  <ul className="list-disc list-inside space-y-0.5 text-xs mt-2">
                    {exp.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#162c6b] hover:underline">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
