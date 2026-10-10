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
    phase: "Live / Production",
    summary:
      "A multi-tenant AI hiring platform I designed and built solo, with separate dashboards for candidates, recruiters, and hiring managers. Autonomous AI agents parse incoming resumes and rank candidates against role requirements, removing the manual first-pass screen recruiters normally do by hand.",
    deepDive:
      "The AI Recruiter is orchestrated with LangGraph: it retrieves candidates, evaluates skills, experience and relevance, ranks recommendations, proposes actions, and pauses for human approval before any side effect happens (human-in-the-loop). Resumes are parsed with pdf2json and pdfjs-dist inside BullMQ and Redis background jobs that handle PDF extraction, Google Gemini profile analysis and scoring, so the API never blocks on AI work. Semantic matching uses Gemini embeddings in a Qdrant Cloud vector database with job-filtered search for job-specific candidate retrieval. Through the Model Context Protocol (MCP), agents can create, reschedule and cancel interviews and send candidate emails via Resend, with human approval and duplicate-interview protection. Access is secured with JWT authentication and role-based access control across candidate, admin, recruiter and hiring-manager dashboards.",
    technologies: [
      "LangGraph",
      "Google Gemini",
      "Qdrant Cloud",
      "BullMQ",
      "Redis",
      "MCP SDK",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
    ],
    telemetry: {
      throughput: "Human approval required before any AI side effect",
      errorReduction: "Duplicate-interview protection on scheduling",
      activeNodes: "Live: Vercel (frontend) + Render (API/worker)",
    },
    architecture: {
      orchestration:
        "LangGraph recruiter agent with human-in-the-loop approval",
      vectorDatabase: "Qdrant Cloud: Gemini embeddings, job-filtered search",
      backgroundWorkers:
        "BullMQ / Redis jobs: PDF extraction, Gemini analysis, scoring",
      parsingEngine: "pdf2json / pdfjs-dist resume parsing pipeline",
    },
    repositoryLinks: {
      liveView: "https://smarthire.sathishraja.com",
    },
  },
  {
    id: "codesense-ai",
    title: "CodeSense AI",
    subtitle: "Multi-agent AI code review for GitHub pull requests",
    phase: "Live / V1",
    summary:
      "A code review platform that automatically reviews pull requests and publishes contextual feedback as inline GitHub review comments. Built to be a real part of an engineering workflow rather than another chatbot, it removes the manual review bottleneck so engineers can spend their time on more creative work.",
    deepDive:
      "When a PR is opened or updated, four specialist AI reviewers analyse it: Security (vulnerabilities and unsafe patterns), Performance (inefficient operations), Code Quality (maintainability, readability, complexity) and Testing (missing tests, edge cases, coverage gaps). Findings are persisted, then a deterministic coordinator deduplicates overlapping findings and ranks them by severity before the final review is published through the GitHub Review API. AI processing deliberately runs outside the webhook request, which gives asynchronous processing, job retries, persistent review state, publication checkpointing and safer handling of temporary AI-provider failures. Around that sit GitHub OAuth, signed HTTP-only sessions, GitHub App onboarding, repository synchronization, per-user repository authorization, structured Gemini responses and a Next.js dashboard, deployed on Vercel and Render with MongoDB Atlas and managed Redis.",
    technologies: [
      "Google Gemini",
      "GitHub Apps",
      "BullMQ",
      "Redis",
      "MongoDB",
      "Express",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
    ],
    telemetry: {
      throughput: "4 specialist AI reviewers per pull request",
      errorReduction: "Retry handling for AI-provider failures",
      activeNodes: "Live at codesense.sathishraja.com",
    },
    architecture: {
      orchestration: "4 specialist agents + deterministic severity coordinator",
      vectorDatabase: "N/A — MongoDB persists review findings",
      backgroundWorkers: "BullMQ / Redis review worker (async, with retries)",
      parsingEngine: "Signed GitHub webhook → structured Gemini responses",
    },
    repositoryLinks: {
      liveView: "https://codesense.sathishraja.com",
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
