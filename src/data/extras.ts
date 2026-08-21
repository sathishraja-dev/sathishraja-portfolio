export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    icon: "🧩",
    title: "Web Application Development",
    description:
      "Full-stack web apps built with Node.js, React, and Next.js — from MVP to production scale.",
  },
  {
    icon: "🌐",
    title: "Custom Website Development",
    description:
      "Custom-built business and marketing websites, optimized for performance and SEO.",
  },
  {
    icon: "🤖",
    title: "AI Chatbot Solutions",
    description:
      "Conversational AI agents built with LangGraph and RAG, tailored to your data and workflows.",
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    description:
      "Background job pipelines and automation systems that remove manual, repetitive work.",
  },
  {
    icon: "🔌",
    title: "API Development & Integration",
    description:
      "RESTful and GraphQL APIs designed for reliability, plus integration with third-party systems.",
  },
  {
    icon: "☁️",
    title: "AWS Cloud Deployment",
    description:
      "Containerized deployments on AWS with Docker, CI/CD pipelines, and production monitoring.",
  },
  {
    icon: "🚀",
    title: "MVP Development",
    description:
      "Fast, focused builds to validate an idea before committing to a larger investment.",
  },
  {
    icon: "💡",
    title: "Technical Consulting",
    description:
      "Architecture reviews, tech stack decisions, and hands-on guidance for engineering teams.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: "What's your typical project timeline?",
    answer:
      "It depends on scope — a focused MVP typically takes a few weeks, while a full production platform takes longer. We'll agree on a timeline together after scoping the project.",
  },
  {
    question: "Do you work with clients outside Singapore?",
    answer:
      "Yes — I work remotely with clients internationally, and I'm based in Singapore for local/APAC engagements.",
  },
  {
    question: "What's your tech stack?",
    answer:
      "Primarily Node.js, React, Next.js, and TypeScript on the full-stack side, with LangGraph, RAG, and MCP for AI-agent work, deployed on AWS with Docker.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes — post-launch support and iteration can be scoped as part of the engagement. Let's discuss what ongoing support looks like for your project.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out via the contact form or WhatsApp with a short description of what you need, and we'll set up a call to scope it out.",
  },
];

export interface PricingTier {
  name: string;
  description: string;
  features: string[];
}

export const pricingData: PricingTier[] = [
  {
    name: "Starter Website",
    description: "A focused marketing or portfolio site to get you online.",
    features: [
      "Custom design, mobile-first",
      "Up to ~5 pages",
      "Basic SEO setup",
    ],
  },
  {
    name: "Business Website",
    description: "A fuller business site with more content and integrations.",
    features: [
      "Multi-page site with CMS or blog",
      "Contact/lead forms",
      "SEO + performance optimization",
    ],
  },
  {
    name: "Custom Web Application",
    description: "A full-stack application built around your workflow.",
    features: [
      "Custom backend + database design",
      "User accounts / dashboards",
      "API integrations",
    ],
  },
  {
    name: "AI Automation Solution",
    description: "AI agents or automation wired into your business process.",
    features: [
      "AI chatbot or agent workflow",
      "Workflow automation pipeline",
      "Integration with your existing tools",
    ],
  },
];
