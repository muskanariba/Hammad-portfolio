import React from "react";
import { FaAward, FaUserTie, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

function Extras() {
  const interests = [
    "President of University Tech Society",
    "Vice President of University Event Management Society",
    "Ambassador of Learning Horizon (National Level)",
    "Content Writer & Comedy Scripting Founder",
    "Volunteer Public Speaker",
  ];

  const memberships = [
    "Member of Skills4u x Pakistan Career Fair",
  ];

  const awards = [
    "NASA Hackathon 2024, 2nd Position",
    "AI & Data Analytics Hackathon 2025, 1st Position",
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 * i, duration: 0.5 },
    }),
  };

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-10 lg:px-16">
      <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-5xl font-bold mb-12 leading-tight text-center"
          >
            <span className="text-black">Interests</span>{" "}
            <span className="text-[#162c6b]">Memberships & Awards</span>
          </motion.h2>

      <div className="flex flex-col gap-6">
        {[{ title: "Interests", icon: <FaUserTie />, items: interests },
          { title: "Memberships", icon: <FaHandsHelping />, items: memberships },
          { title: "Awards", icon: <FaAward />, items: awards }
        ].map((card, index) => (
          <motion.div
            key={index}
            custom={index + 1}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-[#162c6b]/50 transition-shadow duration-300"
            style={{
              border: "3px solid #162c6b",
              clipPath: "polygon(10px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10px)"
            }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#162c6b] flex items-center gap-2">
              {card.icon} {card.title}
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm md:text-base">
              {card.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Extras;
