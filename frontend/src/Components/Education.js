import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaSchool, FaBookReader } from 'react-icons/fa';

function Education() {
  const educationData = [
    { institution: <>University of <br /> Karachi (UoK)</>, degree: 'Bachelors in Software Engineering', date: 'December 2025', detail: 'Major in Project Management', icon: <FaUniversity className="text-5xl text-black mb-2" /> },
    { institution: 'Government Degree College, Malir Cantt, Karachi', degree: 'HSC – "A-One"', date: '2021', detail: 'Engineering', icon: <FaSchool className="text-5xl text-black mb-4" /> },
    { institution: 'IJK Schooling & Coaching System', degree: 'SC – "A+"', date: '2019', detail: 'Computer Science', icon: <FaBookReader className="text-5xl text-black mb-4" /> },
  ];

  return (
  <section id="education" className="bg-gray-100 pt-10 pb-20 px-6 md:px-20">

      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-5xl font-bold mb-4 leading-tight"
        >
          <span className="text-black">My</span>{" "}
          <span className="text-[#162c6b]">Learning Journey</span>
        </motion.h2>

        <p className="text-gray-600 text-lg mb-12">
          A journey of knowledge, learning, and growth, exploring various educational milestones and achievements.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-lg border-2 border-[#162c6b] p-6 flex flex-col items-center text-center shadow-sm hover:shadow-[0_0_30px_rgba(22,44,107,0.5)]"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10px)' }}
            >
              <motion.div whileHover={{ scale: 1.2 }} className="mb-2">{edu.icon}</motion.div>
              <h3 className="text-lg md:text-xl font-bold text-[#162c6b] mb-2">{edu.institution}</h3>
              <p className="text-[#162c6b] font-semibold mb-1">{edu.degree}</p>
              <p className="text-sm text-gray-500 mb-3">{edu.date}</p>
              <p className="text-black leading-relaxed">{edu.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
