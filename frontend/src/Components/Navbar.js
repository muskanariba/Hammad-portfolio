import React, { useState } from "react";

// Google Font direct import (Great Vibes - handwriting)
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mainBlue = "#162c6b";

  return (
    <nav className="bg-gray-100 sticky top-0 z-50 shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 tracking-wide"
            style={{
              color: mainBlue,
              fontFamily: "'Great Vibes', cursive",
              fontSize: "2rem",
              lineHeight: "1",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: "2.3rem" }}>H</span>ammad Saeed
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {["Home", "About", "Experience", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black text-sm sm:text-base md:text-lg font-semibold transition px-2 py-1 border-b-2 border-transparent hover:border-[#162c6b]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#162c6b] rounded border-2 p-1"
              style={{ color: mainBlue, borderColor: mainBlue }}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-gray-100 px-4 pt-4 pb-6 space-y-2 border-t"
          style={{ borderColor: mainBlue }}
        >
          {["Home", "About", "Experience", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block w-full text-center px-3 py-2 rounded text-black text-base font-medium hover:bg-[#162c6b] hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
