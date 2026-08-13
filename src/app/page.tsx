"use client";

import React, { useState } from "react";
import Projects from "@/components/Projects";

/**
 * Main Home Page Component for sathishraja.com
 * Consolidates the structural layout sections and injects search-engine schema markup.
 * Built strictly according to Next.js 16 and React 19 specifications.
 */
export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Structured Data (JSON-LD) to force Google to index the identity graph accurately
  const seoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://sathishraja.com",
        name: "Sathish Raja",
        url: "https://sathishraja.com",
        jobTitle: "Senior Full-Stack & AI Software Engineer",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Singapore",
        },
        sameAs: ["https://github.com", "https://linkedin.com"],
        knowsAbout: [
          "Node.js",
          "React.js",
          "Next.js",
          "TypeScript",
          "Generative AI",
          "LangGraph",
          "Retrieval-Augmented Generation",
          "Model Context Protocol",
          "Vector Databases",
          "Docker",
          "System Design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://sathishraja.com",
        url: "https://sathishraja.com",
        name: "Sathish Raja Portfolio",
        publisher: {
          "@id": "https://sathishraja.com",
        },
      },
    ],
  };

  return (
    <>
      {/* Structural Injection of JSON-LD Schema Graphs for Google Search Spider Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />

      {/* FIXED GLASSMORPHISM STICKY HEADER */}
      <nav className="glassmorphism fixed top-0 left-0 right-0 z-50 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white font-mono"
            >
              sathish<span className="text-indigo-500">raja</span>.com
            </a>
          </div>

          {/* Desktop Navigation Link Nodes */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-mono">
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              01. About Matrix
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              02. Repositories
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
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

          {/* Mobile Menu Action Trigger Icon Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-1"
              aria-label="Toggle structural navigation menu drawer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
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

        {/* Mobile Menu Slide-Out Context Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#030712]/95 border-b border-gray-900 px-4 pt-2 pb-6 space-y-3 font-mono text-sm flex flex-col">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-gray-400 hover:text-white"
            >
              01. About Matrix
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-gray-400 hover:text-white"
            >
              02. Repositories
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-gray-400 hover:text-white"
            >
              03. Uplink
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                alert("Resume download stream initialized successfully.");
              }}
              className="w-full mt-2 py-2.5 text-center border border-indigo-500 text-indigo-400 rounded-lg text-xs font-semibold"
            >
              Download Resume.pdf
            </button>
          </div>
        )}
      </nav>

      {/* MAIN VIEWPORT LAYOUT WRAPPER CONTAINER */}
      <main className="pt-16 overflow-hidden">
        {/* HERO ELEVATOR PITCH TERMINAL SCREEN */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 text-xs text-indigo-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>
                Singapore-Based • Available for Principal Consulting Modules
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
              Engineering Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Full-Stack AI Agents
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-mono">
              Hi, I am <span className="text-white">Sathish Raja</span>. Senior
              Engineer with 14+ years of experience optimizing system
              orchestration, core Node.js clusters, and multi-agent frameworks.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.3)] text-center"
              >
                Review Systems
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 font-medium rounded-xl transition-all duration-300 text-center"
              >
                Establish Uplink
              </a>
            </div>
          </div>
        </section>

        {/* BENTO-GRID EXPERTISE & BACKGROUND SECTOR */}
        <section
          id="about"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-900"
        >
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
              <span className="text-indigo-500">01.</span> Core Capabilities
              Matrix
            </h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Comprehensive skill-distribution mappings pulled from 14+ years of
              professional code bases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Core Bio Description Block */}
            <div className="md:col-span-2 bg-[#0B0F19] p-8 rounded-2xl border border-gray-800 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white font-mono">
                  Professional Timeline Profile
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  I specialize in structuring and shipping production-grade
                  distributed architectures across Singapore. My experience
                  spans high-throughput web portals for public-sector platforms,
                  hardware integration layers for autonomous mobile robotics,
                  and cutting-edge non-linear background workers built via
                  LangGraph multi-agent runtimes.
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  By standardizing development environments via Docker container
                  pipelines, I consistently minimize deployment operational
                  vulnerabilities by 50% while scaling overall data transaction
                  outputs by 40%.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-gray-500">
                <span>Infrastructure Registry Node: sathishraja.com</span>
                <span className="text-cyan-400">
                  Secure TLS Operational Status
                </span>
              </div>
            </div>

            {/* AI Architecture Sub-card */}
            <div className="bg-[#0B0F19] p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-colors duration-300">
              <h3 className="text-md font-bold text-white font-mono mb-4 text-cyan-400">
                🤖 Generative AI
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm font-mono text-gray-400">
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-500">■</span>{" "}
                  <span>LangGraph Flow Orchestration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-500">■</span>{" "}
                  <span>Multi-Agent System Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-500">■</span>{" "}
                  <span>RAG Text Vector Embeddings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-500">■</span>{" "}
                  <span>Model Context Protocol (MCP)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-500">■</span>{" "}
                  <span>Qdrant Core Database Vectoring</span>
                </li>
              </ul>
            </div>

            {/* Frontend Architecture Sub-card */}
            <div className="bg-[#0B0F19] p-6 rounded-2xl border border-gray-800 hover:border-indigo-500/30 transition-colors duration-300">
              <h3 className="text-md font-bold text-white font-mono mb-4 text-indigo-400">
                💻 Client UI Stack
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm font-mono text-gray-400">
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-500">■</span>{" "}
                  <span>Next.js 16 Server Architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-500">■</span>{" "}
                  <span>React 19 Application Pipelines</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-500">■</span>{" "}
                  <span>TypeScript Strict Parameter Layer</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-500">■</span>{" "}
                  <span>Tailwind CSS v4 Engine UI</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-500">■</span>{" "}
                  <span>Zustand Central State Caching</span>
                </li>
              </ul>
            </div>

            {/* Backend & Devops Sub-card */}
            <div className="md:col-span-2 bg-[#0B0F19] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-md font-bold text-white font-mono mb-4 text-purple-400">
                ⚙️ Server Operations & Systems Optimization
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
                <div className="bg-[#030712] p-4 rounded-xl border border-gray-900">
                  <p className="text-[10px] text-gray-500">BACKEND ENGINE</p>
                  <p className="text-xs font-bold text-white mt-1">
                    Node.js / Express 5
                  </p>
                </div>
                <div className="bg-[#030712] p-4 rounded-xl border border-gray-900">
                  <p className="text-[10px] text-gray-500">TASK QUEUEING</p>
                  <p className="text-xs font-bold text-white mt-1">
                    BullMQ / Redis Cache
                  </p>
                </div>
                <div className="bg-[#030712] p-4 rounded-xl border border-gray-900">
                  <p className="text-[10px] text-gray-500">CONTAINER LOGS</p>
                  <p className="text-xs font-bold text-white mt-1">
                    Docker Engine Pipeline
                  </p>
                </div>
                <div className="bg-[#030712] p-4 rounded-xl border border-gray-900">
                  <p className="text-[10px] text-gray-500">
                    DATABASE INTEGRITY
                  </p>
                  <p className="text-xs font-bold text-white mt-1">
                    PostgreSQL / MongoDB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS COMPONENT EMBED MODULE LAYER */}
        <section id="projects" className="bg-[#030712]">
          <Projects />
        </section>

        {/* SECURE INPUT CONTACT BLOCK */}
        <section
          id="contact"
          className="max-w-4xl mx-auto px-4 py-24 border-t border-gray-900 text-center space-y-8"
        >
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
              <span className="text-indigo-500">03.</span> Secure Contact
              Network Node
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base">
              Initiate connection routines directly for enterprise requirements
              or technical consulting allocations.
            </p>
          </div>

          <div className="bg-[#0B0F19] p-6 sm:p-8 rounded-2xl border border-gray-800 text-left max-w-xl mx-auto shadow-2xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Secure submission captured successfully.");
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1">
                  Sender Entity Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hiring Executive"
                  className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1">
                  Return Transmission Link (Email)
                </label>
                <input
                  type="email"
                  required
                  placeholder="executive@company.com"
                  className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1">
                  Message Description Payload
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your technical module prerequisites here..."
                  className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl text-sm transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)] font-mono"
              >
                Transmit Secure Payload
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER TERMINATION MATRIX */}
        <footer className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-mono">
          <p>
            &copy; 2026 sathishraja.com. All server execution threads locked.
          </p>
          <p className="mt-2 sm:mt-0">
            Node Module Built Using Next.js App Router Pipelines
          </p>
        </footer>
      </main>
    </>
  );
}
