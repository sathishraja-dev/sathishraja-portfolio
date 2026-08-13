import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-4">
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        <span className="inline-flex items-center bg-cyberindigo/10 border border-cyberindigo/30 rounded-full px-4 py-1.5 text-xs text-cyberindigo font-mono">
          🚀 Senior Full-Stack & GenAI Specialist | 14+ YOE
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
          Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyberindigo to-cybercyan">Sathish Raja</span>
        </h1>
        <p className="text-xl font-mono text-gray-400 max-w-2xl mx-auto">
          Architecting Multi-Agent AI Environments & Systems in Singapore
        </p>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Specialized in scaling distributed processing arrays, multi-tenant ATS architectures, and microservice infrastructure limits.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-cyberindigo to-cybercyan text-white font-medium rounded-xl transition-all shadow-md">
            Explore Repository
          </a>
        </div>
      </div>
    </section>
  );
}
