import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  category: 'ai' | 'enterprise';
  company: string;
  timeline: string;
  description: string;
  extendedDetails: string[];
  techStack: string[];
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'enterprise'>('all');

  const projectsData: Project[] = [
    {
      id: 'smarthire-ai',
      title: 'SmartHireAI Platform',
      category: 'ai',
      company: 'Independent Consulting (Singapore)',
      timeline: '10/2024 - Present',
      description: 'Multi-tenant AI Applicant Tracking System managing secure agent workflows across recruitment pools.',
      extendedDetails: [
        'Coordinated multi-agent screening workflows using @langchain/langgraph and @langchain/ollama.',
        'Engineered an async document parsing loop ingest pipeline using pdf2json backing local Qdrant vectors.',
        'Regulated compute footprints by abstracting ingestion routines into unblocked BullMQ worker networks.'
      ],
      techStack: ['Next.js 16', 'React 19', 'LangGraph', 'Qdrant DB', 'BullMQ', 'Redis', 'MCP SDK']
    },
    {
      id: 'sworkflow',
      title: 'sWorkflow Platform',
      category: 'enterprise',
      company: 'Konica Minolta Solutions Asia',
      timeline: '12/2022 - 09/2024',
      description: 'Configurable automation infrastructure controlling navigation path logs for multi-floor robotics fleets.',
      extendedDetails: [
        'Bridged high-scale processing networks securely into third-party automated AMR equipment rigs.',
        'Standardized sandboxed deployment routines with Docker layers, scaling down runtime faults by 50%.'
      ],
      techStack: ['Node.js', 'Docker', 'Microservices', 'System Design', 'AMR Interface API']
    }
  ];

  const filtered = activeFilter === 'all' ? projectsData : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white font-mono"><span className="text-cybercyan">02.</span> Projects Repository</h2>
        </div>
        <div className="flex gap-2 mt-4 bg-gray-950 p-1 rounded-xl border border-gray-800 text-xs font-mono">
          {(['all', 'ai', 'enterprise'] as const).map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} className={`px-4 py-2 rounded-lg font-medium uppercase ${activeFilter === f ? 'bg-cyberindigo text-white' : 'text-gray-400'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        {filtered.map(p => (
          <div key={p.id} className="bg-cybercard p-6 sm:p-8 rounded-3xl border border-gray-800">
            <div className="text-xs font-mono text-cybercyan mb-2">{p.company} | {p.timeline}</div>
            <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{p.description}</p>
            <ul className="space-y-1 mb-4">{p.extendedDetails.map((d, i) => <li key={i} className="text-xs text-gray-400">▶ {d}</li>)}</ul>
            <div className="flex flex-wrap gap-2">{p.techStack.map(t => <span key={t} className="bg-black text-gray-300 text-[10px] font-mono px-2 py-1 rounded border border-gray-900">{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
