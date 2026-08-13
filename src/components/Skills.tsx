import React from 'react';

export default function Skills() {
  const categories = [
    { title: "AI & LLM Client Context", items: ["LangGraph Multi-Agent", "RAG Pipeline Engineering", "MCP SDK Gateways", "Qdrant Vector Data"] },
    { title: "Frontend Client Infrastructure", items: ["Next.js 16 / React 19", "TypeScript Secure Type Engine", "Tailwind CSS v4 Tokening", "Zustand State Context"] },
    { title: "Systems Processing Clusters", items: ["Node.js Framework Core", "BullMQ Task Worker Pipelines", "Redis Memory Store", "Express 5 API Router"] }
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-900">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white font-mono"><span className="text-cyberindigo">01.</span> Technical Stack Matrix</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="bg-cybercard p-6 rounded-2xl border border-gray-800">
            <h3 className="text-md font-bold text-white mb-4 font-mono text-cybercyan">{cat.title}</h3>
            <ul className="space-y-2 text-xs font-mono text-gray-400">
              {cat.items.map((item, idx) => <li key={idx}>■ {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
