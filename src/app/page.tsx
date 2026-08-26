"use client";

import React, { useState } from "react";
import { projectsData, ProjectRecord } from "../data/projects";
import { servicesData, faqData, pricingData } from "../data/extras";

export default function PremiumConsole() {
  const [activeTab, setActiveTab] = useState<
    "playground" | "architecture" | "telemetry"
  >("architecture");
  const [selectedProject, setSelectedProject] = useState<ProjectRecord>(
    projectsData[0],
  );

  // Simulated Agent Console Log State Engine
  const [simLog, setSimLog] = useState<string[]>([
    "[SYSTEM] Console ready. Awaiting initialization input node...",
  ]);
  const [isSimulating, setIsSimulating] = useState(false);

  // Overlay Modal States
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Form Field States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const runAgentSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimLog([]);

    const operationalLogs = [
      "⏳ [01/04] [GATEWAY] Intercepting secure resume transmission node path...",
      "⚙️ [02/04] [PARSER] Running pdf2json text tokenizer on local buffer stream...",
      "🧠 [03/04] [EMBEDDING] Vectorizing semantic token chunks via @langchain/ollama...",
      "📦 [04/04] [QDRANT] Querying Qdrant DB collection profiles for vector parity...",
      "⛓️ [SYSTEM] Initializing non-linear LangGraph Multi-Agent Workflow State...",
      "🤖 [AGENT_01] Recruiter Core: Analyzing experience metrics against target keys...",
      "🤖 [AGENT_02] Senior Validator: Cross-checking 14+ Years Experience parameters...",
      "🔥 [WORKER] Queueing asynchronous background validation profile to BullMQ / Redis cluster...",
      "✅ [SUCCESS] Matching index score generated: 98.4% Match. Dispatching verification notification.",
    ];

    operationalLogs.forEach((log, index) => {
      setTimeout(
        () => {
          setSimLog((prev) => [...prev, log]);
          if (index === operationalLogs.length - 1) {
            setIsSimulating(false);
          }
        },
        (index + 1) * 700,
      );
    });
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setContactSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setErrorMessage(data.error || "Transmission failure encountered.");
      }
    } catch (error) {
      setErrorMessage("Failed to connect to transmission edge nodes.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-[#F3F4F6] font-sans antialiased selection:bg-[#6366F1] selection:text-white">
      {/* Structural Schema Markup Graph for SEO Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline:
              "Sathish Raja - Senior Full-Stack & AI Software Engineer Platform Portfolio",
            image: "https://sathishraja.com",
            author: {
              "@type": "Person",
              name: "Sathish Raja",
              jobTitle: "Principal AI & Full-Stack Consultant",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Singapore",
              },
            },
            keywords:
              "LangGraph, Next.js 16, React 19, Qdrant Database, BullMQ, Redis, Node.js Full-Stack Engineer",
          }),
        }}
      />

      {/* Global Interface Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-[#0B0F19]/70 backdrop-blur-xl border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#06B6D4] animate-pulse"></div>
            <span className="text-lg font-bold tracking-tight text-white font-mono">
              sathish<span className="text-[#6366F1]">raja</span>.com
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="hidden md:inline-block bg-gray-950 border border-gray-900 text-[10px] text-[#06B6D4] font-mono px-2.5 py-1 rounded-md">
              LOC: SINGAPORE // AZ: AP-EAST
            </span>

            {/* Native Download Resume Button Hook */}
            <a
              href="/resume.pdf"
              download="Sathish_Raja_Resume.pdf"
              className="text-xs font-mono bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center space-x-1.5 group cursor-pointer"
            >
              <svg
                className="h-3.5 w-3.5 text-[#06B6D4] group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              <span>Download CV</span>
            </a>

            {/* TODO: replace with your actual LinkedIn profile URL */}
            <a
              href="https://www.linkedin.com/in/sathish-raja-87199751/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-xs font-mono bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 px-3 py-1.5 rounded-lg transition-all duration-200 items-center space-x-1.5"
            >
              <span>LinkedIn</span>
            </a>

            <a
              href="/blog"
              className="hidden sm:inline-flex text-xs font-mono bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 px-3 py-1.5 rounded-lg transition-all duration-200 items-center space-x-1.5"
            >
              <span>Blog</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsContactOpen(true);
                setContactSubmitted(false);
                setErrorMessage("");
              }}
              className="text-xs font-mono bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/30 px-3 py-1.5 rounded-lg hover:bg-[#6366F1] hover:text-white transition-all duration-200 cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* Core Hero Overview Matrix Panel */}
        <section className="bg-[#0B0F19] border border-gray-900 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-gray-950 border border-gray-900 px-3 py-1 rounded-full text-xs font-mono text-[#06B6D4]">
              <span>🛡️ Secure Production Build Live</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Sathish Raja <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
                Senior Full-Stack Engineer, Building Production AI Systems
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              14+ years shipping full-stack platforms across government,
              finance, and robotics in Singapore. Now building multi-agent AI
              systems with LangGraph, RAG, and MCP — most recently an AI hiring
              platform built solo, end to end.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-mono">
              Cut deployment errors 50% and lifted API throughput 40% on
              production robotics platforms at Konica Minolta · 10+ production
              apps shipped across 4 industries
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Full-Time Roles",
                "Contract",
                "Freelance Projects",
                "Remote",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full"
                >
                  ● Open to {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Stats Bar */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "14+", label: "Years Experience" },
            { value: "10+", label: "Production Applications" },
            { value: "SG", label: "Singapore Enterprise Experience" },
            { value: "F/S", label: "Full Stack Developer" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0B0F19] border border-gray-900 rounded-2xl p-4 text-center space-y-1"
            >
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4] font-mono">
                {stat.value}
              </div>
              <div className="text-[11px] text-gray-400 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* About Section */}
        <section className="space-y-6">
          <div className="pb-4 border-b border-gray-900">
            <h2 className="text-xl font-bold text-white font-mono">👤 About</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 bg-[#0B0F19] border border-gray-900 rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-bold text-white">Who I Am</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Senior Software Engineer with 14+ years building full-stack
                platforms across government, finance, and robotics in Singapore
                — 10+ production applications shipped in total.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Most recently, I led the engineering on an Autonomous Mobile
                Robot platform suite at Konica Minolta, and I'm now building
                production multi-agent AI systems independently — including an
                AI hiring platform designed and shipped solo, end to end.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                I work across the full stack, from backend architecture and
                cloud deployment to the frontend, and now increasingly with
                AI-agent workflows layered on top of that same foundation.
              </p>
            </div>
            <div className="lg:col-span-2 bg-[#0B0F19] border border-gray-900 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-bold text-white">Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="text-gray-500 font-mono mb-1.5">
                    AI &amp; LLM
                  </div>
                  <ul className="text-gray-400 space-y-1">
                    <li>LangGraph</li>
                    <li>LangChain</li>
                    <li>RAG</li>
                    <li>MCP SDK</li>
                    <li>Qdrant</li>
                    <li>Ollama</li>
                  </ul>
                </div>
                <div>
                  <div className="text-gray-500 font-mono mb-1.5">Frontend</div>
                  <ul className="text-gray-400 space-y-1">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Zustand</li>
                    <li>TanStack Query</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
                <div>
                  <div className="text-gray-500 font-mono mb-1.5">Backend</div>
                  <ul className="text-gray-400 space-y-1">
                    <li>Node.js / Express</li>
                    <li>BullMQ</li>
                    <li>Redis</li>
                    <li>RESTful APIs</li>
                    <li>Microservices</li>
                  </ul>
                </div>
                <div>
                  <div className="text-gray-500 font-mono mb-1.5">Database</div>
                  <ul className="text-gray-400 space-y-1">
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>Redis</li>
                  </ul>
                </div>
                <div>
                  <div className="text-gray-500 font-mono mb-1.5">
                    Cloud &amp; DevOps
                  </div>
                  <ul className="text-gray-400 space-y-1">
                    <li>AWS (EC2, S3)</li>
                    <li>Docker</li>
                    <li>Nginx</li>
                    <li>CI/CD</li>
                  </ul>
                </div>
                <div>
                  <div className="text-gray-500 font-mono mb-1.5">Security</div>
                  <ul className="text-gray-400 space-y-1">
                    <li>JWT</li>
                    <li>Helmet</li>
                    <li>Zod Validation</li>
                    <li>Bcrypt</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="space-y-6">
          <div className="pb-4 border-b border-gray-900">
            <h2 className="text-xl font-bold text-white font-mono">
              🛠️ Services
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              What I can build for your team or business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesData.map((service) => (
              <div
                key={service.title}
                className="bg-[#0B0F19] border border-gray-900 rounded-2xl p-5 space-y-2 hover:border-[#6366F1]/40 transition-colors"
              >
                <div className="text-2xl">{service.icon}</div>
                <h3 className="text-sm font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Solutions Section */}
        <section className="space-y-6">
          <div className="pb-4 border-b border-gray-900">
            <h2 className="text-xl font-bold text-white font-mono">
              🤖 AI Solutions
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Purpose-built AI systems for business processes — not just generic
              chat widgets.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "💬",
                title: "AI Chatbots",
                description:
                  "Conversational agents wired to your own data and workflows, not just a generic FAQ bot.",
              },
              {
                icon: "🎯",
                title: "Lead Generation Bots",
                description:
                  "Agents that qualify and route inbound leads automatically, before a human ever gets involved.",
              },
              {
                icon: "🎧",
                title: "Customer Support Assistants",
                description:
                  "AI assistants that resolve common support questions and escalate the rest with full context.",
              },
              {
                icon: "📝",
                title: "AI Content Automation",
                description:
                  "Automated pipelines for generating and organizing content at scale, with a human review step.",
              },
              {
                icon: "🔁",
                title: "Workflow Automation",
                description:
                  "Background agent pipelines that take over repetitive, multi-step business processes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0B0F19] border border-gray-900 rounded-2xl p-5 space-y-2 hover:border-[#6366F1]/40 transition-colors"
              >
                <div className="text-2xl">{item.icon}</div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Repositories Showcase Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-900">
            <div>
              <h2 className="text-xl font-bold text-white font-mono">
                📦 Featured Projects
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Pick a project below to see what it does, how it&apos;s built,
                and the impact it had.
              </p>
            </div>
            {/* Project Picker Control Loop */}
            <div className="flex flex-wrap gap-2">
              {projectsData.map((project) => (
                <button
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    setSimLog([
                      "[SYSTEM] Context flipped. Awaiting client initialization parameters...",
                    ]);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    selectedProject.id === project.id
                      ? "bg-[#6366F1] text-white shadow-md"
                      : "bg-gray-950 border border-gray-900 text-gray-400 hover:text-white"
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Core Multi-Tab Interface Console Base */}
          <div className="bg-[#0B0F19] border border-gray-900 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">
            {/* Right-Side Meta Sidebar Block (Technical Breakdown) */}
            <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-900 p-6 space-y-6 bg-gray-950/40">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-[#06B6D4] uppercase">
                  {selectedProject.phase}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-gray-400">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  // Project Scope Summary
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  // Integrated Stack Badges
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-950 border border-gray-900 text-[10px] font-mono text-gray-300 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Left-Side Controller Dashboard and Interactive Console Tabs */}
            <div className="lg:col-span-2 flex flex-col min-h-[450px]">
              {/* Tab Navigation Bars */}
              <div className="flex border-b border-gray-900 bg-gray-950/60 p-2 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("playground")}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                    activeTab === "playground"
                      ? "bg-gray-900 text-[#06B6D4] border border-gray-800"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  🚀 Live Simulation
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("architecture")}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                    activeTab === "architecture"
                      ? "bg-gray-900 text-[#6366F1] border border-gray-800"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  ⚙️ How It&apos;s Built
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("telemetry")}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                    activeTab === "telemetry"
                      ? "bg-gray-900 text-emerald-400 border border-gray-800"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  📊 Impact & Results
                </button>
              </div>

              {/* Central Dynamic Content Switcher Engine */}
              <div className="p-6 flex-1 bg-gray-950/20">
                {/* TAB ONE: INFERENCE RUNTIME PLAYGROUND SIMULATOR */}
                {activeTab === "playground" && (
                  <div className="space-y-4 h-full flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-white font-mono text-[#06B6D4]">
                        Runtime Terminal Streams Simulator
                      </h4>
                      <p className="text-xs text-gray-400">
                        Trigger the verification handler execution script below
                        to simulate live graph loop sequencing states.
                      </p>
                    </div>

                    {/* Standard Output Code Box Block */}
                    <div className="bg-black rounded-xl border border-gray-900 p-4 font-mono text-[11px] text-gray-300 space-y-1.5 min-h-[180px] max-h-[220px] overflow-y-auto">
                      {simLog.map((log, index) => (
                        <p
                          key={index}
                          className={
                            log.includes("SUCCESS")
                              ? "text-emerald-400 font-bold"
                              : log.includes("SYSTEM")
                                ? "text-[#6366F1]"
                                : "text-gray-400"
                          }
                        >
                          {log}
                        </p>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={runAgentSimulation}
                        disabled={isSimulating}
                        className={`w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] text-white text-xs font-mono font-bold rounded-xl transition-all shadow-md ${
                          isSimulating
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:opacity-90"
                        }`}
                      >
                        {isSimulating
                          ? "⚡ Running Graph Operations..."
                          : "▶ Initialize Secure Client Node Simulation"}
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB TWO: TOPOLOGY MATRIX MAP PANELS */}
                {activeTab === "architecture" && (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white font-mono text-[#6366F1]">
                        Data Ingestion & Integration Topologies
                      </h4>
                      <p className="text-xs text-gray-400">
                        Explicit engineering pathways mapped directly out of
                        production system parameters.
                      </p>
                    </div>

                    {/* Grid Array Mapping Architectural Blocks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-gray-950 p-4 rounded-xl border border-gray-900 space-y-1">
                        <span className="text-[10px] font-mono text-gray-500 uppercase">
                          Orchestration Controller
                        </span>
                        <p className="text-xs font-bold text-white">
                          {selectedProject.architecture.orchestration}
                        </p>
                      </div>
                      <div className="bg-gray-950 p-4 rounded-xl border border-gray-900 space-y-1">
                        <span className="text-[10px] font-mono text-gray-500 uppercase">
                          Vector Retrieval Matrix
                        </span>
                        <p className="text-xs font-bold text-white">
                          {selectedProject.architecture.vectorDatabase}
                        </p>
                      </div>
                      <div className="bg-gray-950 p-4 rounded-xl border border-gray-900 space-y-1">
                        <span className="text-[10px] font-mono text-gray-500 uppercase">
                          Background Workers Queue
                        </span>
                        <p className="text-xs font-bold text-white">
                          {selectedProject.architecture.backgroundWorkers}
                        </p>
                      </div>
                      <div className="bg-gray-950 p-4 rounded-xl border border-gray-900 space-y-1">
                        <span className="text-[10px] font-mono text-gray-500 uppercase">
                          Parsing Ingestion Engine
                        </span>
                        <p className="text-xs font-bold text-white">
                          {selectedProject.architecture.parsingEngine}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-950 p-4 rounded-xl border border-gray-900">
                      <span className="text-[10px] font-mono text-[#6366F1] uppercase block mb-1">
                        Deep Dive Integration Specifications
                      </span>
                      <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                        {selectedProject.deepDive}
                      </p>
                    </div>
                  </div>
                )}

                {/* TAB THREE: PRODUCTION TELEMETRY GRAPH COUNTERS */}
                {activeTab === "telemetry" && (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white font-mono text-emerald-400">
                        System Telemetry & Performance Instrumentation
                      </h4>
                      <p className="text-xs text-gray-400">
                        Documented metrics tracing architectural improvements
                        across project lifecycles.
                      </p>
                    </div>

                    {/* Numeric Statistics Displays */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="bg-gray-950 p-5 rounded-xl border border-emerald-950/60 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 h-full w-1 bg-emerald-500"></div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                          Transaction Load Flow
                        </span>
                        <p className="text-lg font-bold text-white mt-1 font-mono tracking-tight text-emerald-400">
                          {selectedProject.telemetry.throughput}
                        </p>
                      </div>

                      {selectedProject.telemetry.errorReduction && (
                        <div className="bg-gray-950 p-5 rounded-xl border border-emerald-950/60 shadow-sm relative overflow-hidden group">
                          <div className="absolute top-0 left-0 h-full w-1 bg-emerald-500"></div>
                          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                            Fault Reductions
                          </span>
                          <p className="text-lg font-bold text-white mt-1 font-mono tracking-tight text-emerald-400">
                            {selectedProject.telemetry.errorReduction}
                          </p>
                        </div>
                      )}

                      <div className="bg-gray-950 p-5 rounded-xl border border-gray-900 sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                        <div className="flex items-center space-x-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                          <span className="text-gray-400">
                            Cluster Location Tracking Nodes:
                          </span>
                          <span className="text-white">
                            {selectedProject.telemetry.activeNodes ||
                              "Global CDN Edge Clusters"}
                          </span>
                        </div>
                        <span className="text-gray-600">
                          SSL Security: LET'S ENCRYPT PROVISIONED
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="space-y-6">
          <div className="pb-4 border-b border-gray-900">
            <h2 className="text-xl font-bold text-white font-mono">
              💬 Client Testimonials
            </h2>
          </div>
          {/*
            No client testimonials on file yet. Using an honest interim
            message instead of placeholder quotes. Once you have real
            testimonials, replace this block with actual quote cards
            (see the dashed-card pattern used elsewhere on this page).
          */}
          <div className="bg-[#0B0F19] border border-gray-900 rounded-2xl p-6 text-center">
            <p className="text-sm text-gray-300">
              Available for freelance and contract opportunities.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="space-y-6">
          <div className="pb-4 border-b border-gray-900">
            <h2 className="text-xl font-bold text-white font-mono">
              💰 Pricing
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Every project is scoped individually — reach out for a custom
              quote.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingData.map((tier) => (
              <div
                key={tier.name}
                className="bg-[#0B0F19] border border-gray-900 rounded-2xl p-5 space-y-3 flex flex-col"
              >
                <div>
                  <h3 className="text-sm font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {tier.description}
                  </p>
                </div>
                <ul className="text-xs text-gray-400 space-y-1.5 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-1.5">
                      <span className="text-emerald-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => {
                    setIsContactOpen(true);
                    setContactSubmitted(false);
                    setErrorMessage("");
                  }}
                  className="w-full py-2 bg-gray-900 hover:bg-[#6366F1] border border-gray-800 hover:border-[#6366F1] text-gray-300 hover:text-white text-xs font-mono rounded-lg transition-all cursor-pointer"
                >
                  Get a Custom Quote
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* How I Work Section */}
        <section className="space-y-6">
          <div className="pb-4 border-b border-gray-900">
            <h2 className="text-xl font-bold text-white font-mono">
              🧭 How I Work
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              What working together actually looks like, step by step.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description:
                  "A short call to understand what you're building and whether it's a fit.",
              },
              {
                step: "02",
                title: "Proposal & Scope",
                description:
                  "A clear scope, timeline, and quote — no surprises once work begins.",
              },
              {
                step: "03",
                title: "Build",
                description:
                  "Regular check-ins as the project progresses, not a black box until launch.",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Deployed, tested, and handed over — or fully managed if you prefer.",
              },
              {
                step: "05",
                title: "Support",
                description:
                  "Ongoing support and iteration scoped separately, if you need it.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#0B0F19] border border-gray-900 rounded-2xl p-5 space-y-2"
              >
                <div className="text-xs font-mono text-[#6366F1]">
                  {item.step}
                </div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <div className="pb-4 border-b border-gray-900">
            <h2 className="text-xl font-bold text-white font-mono">
              ❓ Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-[#0B0F19] border border-gray-900 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm font-medium text-white">
                    {faq.question}
                  </span>
                  <span className="text-gray-500 font-mono text-xs shrink-0">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-4 text-xs text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="bg-[#0B0F19] border border-gray-900 rounded-3xl p-8 sm:p-10 text-center space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-[100px] pointer-events-none"></div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to build your next project?
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Reach out with what you're building — I'll get back to you to scope
            it out.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsContactOpen(true);
              setContactSubmitted(false);
              setErrorMessage("");
            }}
            className="inline-flex items-center justify-center px-6 py-3 bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
          >
            Schedule a Free Consultation
          </button>
        </section>

        {/* Traditional Corporate Profile Footnotes */}
        <footer className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <p>
            &copy; 2026 sathishraja.com. All server nodes operating within safe
            bounds.
          </p>
          <p>Singapore Registry Systems Engine Cluster Node</p>
        </footer>
      </main>

      {/* Expandable Contact Overlay Modal Panel */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300">
          <div className="bg-[#0B0F19] border border-gray-800 rounded-2xl w-full max-w-lg p-6 relative shadow-2xl shadow-[#6366F1]/10 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-900 pb-3">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-[#6366F1] animate-ping"></div>
                <h3 className="text-sm font-bold text-white font-mono tracking-tight">
                  // Secure Contact Uplink
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="text-gray-500 hover:text-white font-mono text-xs p-1 cursor-pointer transition-colors"
              >
                [CLOSE]
              </button>
            </div>

            {errorMessage && (
              <div className="bg-red-950/50 border border-red-900/50 rounded-xl p-3 text-xs font-mono text-red-400">
                ⚠️ {errorMessage}
              </div>
            )}

            {!contactSubmitted ? (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-gray-400 uppercase">
                    Identity Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Hiring Manager"
                    className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-[#6366F1] transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-gray-400 uppercase">
                    Return Link Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-[#6366F1] transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-gray-400 uppercase">
                    Message Payload
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe project parameters or scheduling windows..."
                    className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-[#6366F1] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-2.5 bg-[#6366F1] text-white font-mono font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer ${
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#6366F1]/90"
                  }`}
                >
                  {isLoading
                    ? "📡 Transmitting Packet..."
                    : "Transmit Secure Message Payload"}
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4 font-mono">
                <div className="text-emerald-400 text-sm font-bold">
                  ✅ Transmission Successful
                </div>
                <p className="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto">
                  Payload broadcast completed smoothly. Secure response routing
                  will hit your return link address shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsContactOpen(false)}
                  className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-xs hover:text-white text-gray-400 transition-colors cursor-pointer"
                >
                  Return to Console
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
