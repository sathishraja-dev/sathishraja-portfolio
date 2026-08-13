"use client";

import React, { useState } from "react";

/**
 * Modern Sticky Navigation Bar Component for sathishraja.com
 * Resolves the TS2322 compilation error by strictly utilizing standard React `className` properties.
 * Fully optimized for Next.js 16, React 19, and Tailwind CSS v4.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="glassmorphism fixed top-0 left-0 right-0 z-50 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo Identity Block */}
        <div className="flex items-center space-x-3">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-white font-mono"
          >
            sathish<span className="text-indigo-500">raja</span>.com
          </a>
        </div>

        {/* Desktop Navigation Link Cluster */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-mono">
          <a
            href="#about"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            01. About Matrix
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            02. Repositories
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            03. Uplink
          </a>
          <button
            onClick={() =>
              alert("Resume download stream initialized successfully.")
            }
            className="px-4 py-2 border border-indigo-500 text-indigo-400 rounded-lg text-xs font-semibold hover:bg-indigo-500/10 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.2)]"
          >
            Resume.pdf
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white focus:outline-none p-1"
            aria-label="Toggle structural navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

      {/* Dropdown Drawer Section for Mobile Display Matrices */}
      {isOpen && (
        <div className="md:hidden bg-[#030712]/95 border-b border-gray-900 px-4 pt-2 pb-6 space-y-3 font-mono text-sm flex flex-col">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="py-2 text-gray-400 hover:text-white"
          >
            01. About Matrix
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="py-2 text-gray-400 hover:text-white"
          >
            02. Repositories
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="py-2 text-gray-400 hover:text-white"
          >
            03. Uplink
          </a>
          <button
            onClick={() => {
              setIsOpen(false);
              alert("Resume download stream initialized successfully.");
            }}
            className="w-full mt-2 py-2.5 text-center border border-indigo-500 text-indigo-400 rounded-lg text-xs font-semibold"
          >
            Download Resume.pdf
          </button>
        </div>
      )}
    </nav>
  );
}
