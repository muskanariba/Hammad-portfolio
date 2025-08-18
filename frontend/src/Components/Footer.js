import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const iconHover = {
    hover: {
      scale: 1.15,
      rotate: 5,
      boxShadow: "0px 0px 14px rgba(255,255,255,0.7)",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#162c6b] text-white border-t border-black py-6 sm:py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        
        {/* Left: Copyright */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm md:text-base text-center md:text-left tracking-wide"
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Hammad Saeed</span>. All rights reserved.
        </motion.p>

        {/* Right: Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-3 sm:gap-4"
        >
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/pm-hammad-saeed"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconHover}
            whileHover="hover"
            className="p-2 sm:p-2.5 rounded-full bg-white text-[#162c6b] shadow-md hover:shadow-lg transition-all duration-300"
          >
            <FaLinkedin size={18} className="sm:size-[20px]" />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:pmhammadsaeed@gmail.com"
            variants={iconHover}
            whileHover="hover"
            className="p-2 sm:p-2.5 rounded-full bg-white text-[#162c6b] shadow-md hover:shadow-lg transition-all duration-300"
          >
            <FaEnvelope size={18} className="sm:size-[20px]" />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
