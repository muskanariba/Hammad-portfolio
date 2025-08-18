import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import contactImage from "../images/img-4.png";
import { motion } from "framer-motion";

// Variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      staggerChildren: 0.2, 
      duration: 0.8 
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iconVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.15 * i, duration: 0.5, type: "spring", stiffness: 120 },
  }),
};

function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-gray-100 py-12 px-4 sm:px-6 md:px-12 lg:px-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-12 leading-tight text-center"
        variants={itemVariants}
      >
        <motion.span
          className="text-black inline-block"
          whileHover={{ y: -5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Collaborate
        </motion.span>{" "}
        <motion.span
          className="text-[#162c6b] inline-block"
          whileHover={{ y: -5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          With Me
        </motion.span>
      </motion.h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20">
        {/* Left - Image */}
        <motion.div
          className="relative w-full max-w-[400px] md:max-w-none md:w-[40%] flex justify-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={contactImage}
            alt="Contact"
            className="rounded-xl shadow-lg w-[85%] sm:w-[75%] md:w-[85%] max-w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
          />
        </motion.div>

        {/* Right - Text + Icons */}
        <motion.div
          className="w-full md:w-[60%] text-center flex flex-col gap-4"
          variants={itemVariants}
        >
          <motion.p
            className="text-[#162c6b] font-bold mb-4 text-xl sm:text-2xl md:text-3xl"
            variants={itemVariants}
          >
            Let’s build something great together!
          </motion.p>

          <motion.p
            className="text-gray-800 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed"
            variants={itemVariants}
          >
            Let’s connect and create something amazing together. Reach out via
            email or ping me on LinkedIn.
          </motion.p>

          <motion.p
            className="text-gray-500 mb-6 text-sm sm:text-base"
            variants={itemVariants}
          >
            I usually respond within 24–48 hours. Looking forward to your message!
          </motion.p>

          {/* Social Icons + Caption */}
          <div className="flex flex-col items-center mt-4 gap-3">
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <motion.a
                custom={1}
                variants={iconVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                href="mailto:pmhammadsaeed@gmail.com"
                aria-label="Email"
                className="group p-3 sm:p-4 rounded-full bg-[#162c6b] text-white shadow-lg hover:shadow-[#162c6b]/50 transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <MdEmail size={22} />
              </motion.a>

              <motion.a
                custom={2}
                variants={iconVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                href="https://www.linkedin.com/in/pm-hammad-saeed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group p-3 sm:p-4 rounded-full bg-[#162c6b] text-white shadow-lg hover:shadow-[#162c6b]/50 transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <FaLinkedinIn size={20} />
              </motion.a>
            </div>

            <motion.p
              className="text-xs sm:text-sm tracking-wide uppercase text-gray-500 mt-2 text-center"
              variants={itemVariants}
            >
              Click to Connect
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
