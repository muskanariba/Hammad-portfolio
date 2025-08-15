import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import contactImage from "../images/img-4.png";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.4 },
  }),
};

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-5xl font-bold mb-12 leading-tight text-center"
      >
        <span className="text-black">Collaborate</span>{" "}
        <span className="text-[#162c6b]">With Me</span>
      </motion.h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left - Image */}
        <div className="relative md:w-[40%] flex justify-center">
          <div className="absolute w-[90%] h-[90%] border-4 border-[#162c6b] rounded-xl rotate-3 shadow-lg -z-10"></div>
          <div className="absolute w-[85%] h-[85%] border-4 border-black rounded-xl rotate-6 shadow-lg -z-20"></div>

          <motion.img
            src={contactImage}
            alt="Contact"
            className="rounded-xl shadow-lg w-[85%] max-w-full hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Right - Text + Icons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-[60%] text-center md:text-left"
        >
          {/* Intro */}
          <p className="text-[#162c6b] font-bold mb-6 text-2xl md:text-3xl">
            Let’s build something great together!
          </p>

          {/* Main paragraph */}
          <p className="text-gray-800 mb-6 text-xl md:text-2xl font-medium leading-relaxed">
            Let’s connect and create something amazing together. Reach out
            via email or ping me on LinkedIn.
          </p>

          {/* Response time */}
          <p className="text-gray-500 mb-6 text-base">
            I usually respond within 24–48 hours. Looking forward to your message!
          </p>

          {/* Social Icons + Caption */}
          <div className="flex flex-col items-center mt-4 gap-3">
            <div className="flex items-center justify-center gap-5">
              <motion.a
                custom={1}
                variants={iconVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                href="pmhammadsaeed@gmail.com"
                aria-label="Email"
                className="group p-4 rounded-full bg-[#162c6b] text-white shadow-lg hover:shadow-[#162c6b]/50 transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                title="Email"
              >
                <MdEmail size={24} />
              </motion.a>

              <motion.a
                custom={2}
                variants={iconVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                href="https://www.linkedin.com/in/pm-hammad-saeed?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group p-4 rounded-full bg-[#162c6b] text-white shadow-lg hover:shadow-[#162c6b]/50 transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={22} />
              </motion.a>
            </div>

            {/* Caption */}
            <p className="text-xs tracking-wide uppercase text-gray-500 mt-2">
              Click to Connect
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
