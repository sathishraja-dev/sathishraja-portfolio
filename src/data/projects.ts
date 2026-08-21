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
    subtitle: "AI hiring platform that screens candidates automatically",
    phase: "Production Deployment / Complete",
    summary:
      "A multi-tenant AI hiring platform I designed and built solo, with separate dashboards for candidates, recruiters, and hiring managers. Autonomous AI agents parse incoming resumes and rank candidates against role requirements, removing the manual first-pass screen recruiters normally do by hand.",
    deepDive:
      "Agent workflows are coordinated with LangGraph and Ollama, so screening runs as a sequence of independent, reviewable steps rather than one opaque call. Resumes are parsed with pdf2json and embedded into a local Qdrant vector database for semantic candidate-to-role matching. Parsing and ranking run as background jobs on BullMQ and Redis, so the app stays responsive while AI work happens behind the scenes. Agents are also wired through the Model Context Protocol (MCP) to safely read file states, check calendars, and send interview invites on their own.",
    technologies: [
      "LangGraph",
      "Qdrant DB",
      "BullMQ",
      "Redis",
      "MCP SDK",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
    ],
    telemetry: {
      throughput: "+40% API transaction throughput",
      errorReduction: "50% fewer deployment errors (Dockerized)",
      activeNodes: "Singapore",
    },
    architecture: {
      orchestration: "LangGraph multi-agent workflow",
      vectorDatabase: "Qdrant vector embeddings",
      backgroundWorkers: "BullMQ / Redis background jobs",
      parsingEngine: "pdf2json resume parsing pipeline",
    },
    repositoryLinks: {
      liveView: "https://sathishraja.com",
      sourceCode: "https://github.com/sathishraja-dev/sathishraja-portfolio",
    },
  },
  {
    id: "amr-fleet-platform",
    title: "AMR Fleet Platform Suite",
    subtitle: "sWorkflow · sInfra · sConnect — Konica Minolta",
    phase: "Lead Engineer / In Production",
    summary:
      "Three connected systems that let autonomous robots operate across an entire building: sWorkflow orchestrates fleet missions, sInfra syncs elevator signals with robot routing across floors, and sConnect gives operations teams a real-time monitoring dashboard.",
    deepDive:
      "As lead engineer on the suite, I designed the microservices and REST APIs that translate enterprise workflow requirements into safe hardware automation for MiR robot fleets, including multi-floor mission scheduling and elevator coordination. Standardized deployment with Docker, cutting staging-to-production errors by 50%, and redesigned the core APIs powering fleet operations, lifting transaction throughput by 40%. Also own production incident resolution for the platform.",
    technologies: [
      "Node.js",
      "Docker",
      "MQTT",
      "RESTful APIs",
      "Microservices",
      "MiR Robot Fleet",
      "System Design",
    ],
    telemetry: {
      throughput: "+40% API transaction throughput",
      errorReduction: "50% fewer staging-to-production errors",
    },
    architecture: {
      orchestration: "MiR fleet mission routing (sWorkflow)",
      vectorDatabase: "N/A — relational transaction logs",
      backgroundWorkers: "Dockerized microservices",
      parsingEngine: "Elevator + robot hardware telemetry link (sInfra)",
    },
    repositoryLinks: {},
  },
  {
    id: "parking-auntie",
    title: "Parking Auntie",
    subtitle: "Citizen chatbot — Housing & Development Board",
    phase: "Shipped / Government Platform",
    summary:
      "A citizen-facing chatbot that aggregates real-time parking availability across LTA, URA, and HDB data sources into a single place, with a photo-verification flow so citizens can report parking issues directly.",
    deepDive:
      "Built the data aggregation layer pulling live parking data from three separate government sources into one consistent chatbot experience, plus a multi-tier photo-parsing pipeline that let citizens submit geotagged photo notifications for automated verification.",
    technologies: [
      "Node.js",
      "Chatbot Architecture",
      "Government API Integration",
    ],
    telemetry: {
      throughput: "Real-time multi-source data aggregation",
    },
    architecture: {
      orchestration: "Multi-source data aggregation (LTA / URA / HDB)",
      vectorDatabase: "N/A",
      backgroundWorkers: "Photo-verification processing pipeline",
      parsingEngine: "Geotagged photo-parsing pipeline",
    },
    repositoryLinks: {},
  },
  {
    id: "insurance-policy-automation",
    title: "Insurance Policy Automation",
    subtitle: "Workflow automation for corporate finance systems",
    phase: "Shipped / Enterprise Client",
    summary:
      "Scripted custom workflow automation for a corporate finance system, replacing manual, repetitive policy-processing steps with scheduled automated runs.",
    deepDive:
      "Built scheduled workflow scripts that took over clerical processing tasks in the insurance policy pipeline, reducing the manual workload on the operations team and cutting down processing turnaround time.",
    technologies: ["Node.js", "Workflow Automation", "Scheduled Jobs"],
    telemetry: {
      throughput: "Reduced manual clerical processing load",
    },
    architecture: {
      orchestration: "Scheduled automation scripts",
      vectorDatabase: "N/A",
      backgroundWorkers: "Automated workflow processing jobs",
      parsingEngine: "N/A",
    },
    repositoryLinks: {},
  },
];
