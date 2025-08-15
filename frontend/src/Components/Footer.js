import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#162c6b] text-white border-t border-black py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Left: Copyright */}
        <p className="text-sm md:text-base mb-2 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Hammad Saeed. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/pm-hammad-saeed?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white text-[#162c6b] shadow-lg transition-transform transform hover:scale-110 hover:bg-gradient-to-tr hover:from-[#0a1f4a] hover:to-[#162c6b] hover:text-white"
          >
            <FaLinkedin size={18} />
          </a>

        

          <a
            href="pmhammadsaeed@gmail.com"
            className="p-2 rounded-full bg-white text-[#162c6b] shadow-lg transition-transform transform hover:scale-110 hover:bg-gradient-to-tr hover:from-[#0a1f4a] hover:to-[#162c6b] hover:text-white"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
