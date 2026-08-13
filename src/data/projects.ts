export interface ProjectTelemetry {
  throughput: string;
  efficiencyGain?: string;
  errorReduction?: string;
  activeNodes?: string;
}

export interface ProjectArchitecture {
  orchestration: string;
  vectorDatabase: string;
  backgroundWorkers: string;
  parsingEngine: string;
}

export interface ProjectRecord {
  id: string;
  title: string;
  subtitle: string;
  phase: string;
  summary: string;
  deepDive: string;
  technologies: string[];
  telemetry: ProjectTelemetry;
  architecture: ProjectArchitecture;
  repositoryLinks: {
    liveView?: string;
    sourceCode?: string;
  };
}

export const projectsData: ProjectRecord[] = [
  {
    id: "smarthire-ai",
    title: "SmartHireAI Platform",
    subtitle: "Multi-Tenant AI Applicant Tracking System (ATS)",
    phase: "Production Deployment / Complete",
    summary:
      "Architected a multi-tenant AI candidate screening platform using non-linear autonomous agent workflows and vector data lookups.",
    deepDive:
      "Engineered complex agent interaction graphs using @langchain/langgraph and @langchain/ollama to manage independent screening steps. Built an asynchronous document parsing pipeline leveraging pdf2json to index unstructured resumes directly into a local Qdrant vector database via semantic text embeddings. Long-running analytical tasks are distributed into a background worker cluster powered by BullMQ and Redis (ioredis) to prevent core event-loop blockages.",
    technologies: [
      "LangGraph",
      "Qdrant DB",
      "BullMQ",
      "Redis",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
    ],
    telemetry: {
      throughput: "+40% API Transaction Throughput",
      errorReduction: "50% Lower Deployment Error Rates (Dockerized)",
      activeNodes: "Singapore Edge Clusters",
    },
    architecture: {
      orchestration: "LangGraph Multi-Agent State Machine",
      vectorDatabase: "Qdrant Embedding Collection",
      backgroundWorkers: "BullMQ / Redis Asynchronous Cluster",
      parsingEngine: "pdf2json Local Document Worker Pipeline",
    },
    repositoryLinks: {
      liveView: "https://sathishraja.com",
      sourceCode: "https://github.com/sathishraja-dev/sathishraja-portfolio",
    },
  },
  {
    id: "swworkflow-robotics",
    title: "sWorkflow Orchestrator",
    subtitle: "Enterprise Autonomous Mobile Robot (AMR) System",
    phase: "Enterprise Core Shipped",
    summary:
      "Developed a centralized orchestration platform running custom workflow script integrations across international robotic fleets.",
    deepDive:
      "Coordinated backend interface code configurations at Konica Minolta for Autonomous Mobile Robots (AMRs), linking MiR Robots and MiR Fleet allocation modules. Programmed robust microservices and high-throughput RESTful APIs to translate enterprise business workflows into safe hardware automation parameters across multi-floor operations.",
    technologies: [
      "Node.js",
      "Docker",
      "RESTful APIs",
      "Microservices",
      "AMR Hardware",
      "System Design",
    ],
    telemetry: {
      throughput: "+40% Transaction Stream Throughput Optimization",
      errorReduction: "50% Reduction in Staging-to-Production Sync Faults",
    },
    architecture: {
      orchestration: "MiR Fleet Allocation Routing Nodes",
      vectorDatabase: "N/A (Relational Transaction Log Matrix)",
      backgroundWorkers: "Docker Containerized Microservices",
      parsingEngine: "Hardware-to-Software Low-Latency Telemetry Link",
    },
    repositoryLinks: {},
  },
];
