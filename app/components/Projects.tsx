"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  demoUrl?: string;
  category: "ai" | "web" | "automation" | "mobile";
  features: string[];
}

const projects: Project[] = [
  {
    title: "Trump of the Day",
    description: "A full-stack news aggregation platform using React and Node.js, automating web scraping from 20+ verified media sources with real-time ingestion, storing over 7,000 articles in Supabase (PostgreSQL). Features include OAuth 2.0, LLM-based summarization, and AWS deployment.",
    image: "/projects/trump-news.jpg",
    technologies: ["React", "Node.js", "Supabase", "AWS", "OAuth 2.0"],
    githubUrl: "https://github.com/harshaldafade/trump-of-the-day-server",
    liveUrl: "https://trumpoftheday.com",
    category: "web",
    features: [
      "Automated web scraping from 20+ media sources",
      "Real-time ingestion and deduplication of news articles",
      "LLM-based summarization and metadata-driven querying",
      "OAuth 2.0 authentication and user management",
      "Deployed on AWS for scalability"
    ]
  },
  {
    title: "ML Based Pothole Detection",
    description: "A real-time Android application utilizing multi-sensor fusion and LSTM model for anomaly detection with sub-200ms inference latency. Features include GPS-based geotagging, signal processing pipeline, and 92%+ classification accuracy.",
    image: "/projects/pothole-detector.jpg",
    technologies: ["Android", "TensorFlow", "LSTM", "Signal Processing", "Google Maps API"],
    githubUrl: "https://github.com/harshaldafade/real-time-pothole-detector",
    liveUrl: "",
    category: "mobile",
    features: [
      "Real-time anomaly detection using LSTM",
      "Multi-sensor fusion (accelerometer, gyroscope, magnetometer)",
      "GPS-based pothole geotagging",
      "Edge inference with sub-200ms latency",
      "User feedback loop for adaptive retraining"
    ]
  },
 
  {
    title: "Reinforcement Learning",
    description: "An extensive end-to-end project series that explores core RL principles through progressive homeworks and a midterm and final project, implemented across a diverse range of environments like Blackjack, Cliff Walking, Taxi, Mountain Car, and CartPole using NumPy, OpenAI Gym, and function approximation techniques.",
    image: "/projects/reinforcement-learning.jpg",
    technologies: [
      "Python", "NumPy", "OpenAI Gym", "Matplotlib", "Reinforcement Learning", 
      "Function Approximation", "Monte Carlo", "TD Learning", "Policy Gradient"
    ],
    githubUrl: "https://github.com/harshaldafade/reinforcement-learning",  // Replace with direct RL repo if available
    liveUrl: "",
    category: "ai",
    features: [
      // Homework 1
      "Implemented ε-Greedy, UCB, and Random policies for Multi-Armed Bandits",
      "Developed visualizations comparing exploration-exploitation trade-offs",
      
      // Homework 2
      "Built Finite MDP environments with value functions, Bellman updates, and policy iteration",
      "Performed convergence analysis for state-value and action-value functions",
  
      // Homework 3
      "Solved Deterministic and Stochastic Cleaning Robot Problems via Value Iteration",
      "Visualized impact of stochastic transitions on conservative policy behavior",
  
      // Homework 4
      "Applied Monte Carlo prediction and control to the Blackjack environment",
      "Compared First-visit, Every-visit, and Off-policy MC using Importance Sampling",
  
      // Homework 5
      "Implemented SARSA and Q-learning agents in Cliff Walking",
      "Used decaying ε-greedy policy to optimize reward convergence",
  
      // Homework 6
      "Developed Fourier Basis and Semi-Gradient algorithms for Mountain Car with continuous state space",
      "Implemented function approximation using Semi-gradient SARSA and TD(0)",
  
      // Homework 7
      "Applied TD(λ) with eligibility traces to bridge TD and Monte Carlo learning",
      "Used decaying eligibility for both state-value and action-value prediction",
  
      // Homework 8
      "Built Actor-Critic agent with eligibility traces for Mountain Car",
      "Explored softmax policy networks and parameter-sensitive tuning",
  
      // Midterm Project
      "Engineered n-step SARSA for Cliff Walking and Taxi environments with dynamic ε decay and step-length tuning",
      "Analyzed convergence, sample efficiency, and learning stability across configurations",
  
      // Final Project
      "Implemented Actor-Critic with Fourier Basis for CartPole-v1 achieving 500 reward ceiling",
      "Performed 50-run benchmark with performance visualization and policy analysis",
  
      // Meta-level summary
      "Covered the full RL spectrum: Bandits, MDPs, Monte Carlo, TD, Policy Gradient, and Function Approximation",
      "Showcased results through real-time plots, animations, and environment-specific optimal policy visualizations"
    ]
  },
  {
    title: "LinkedIn Bot 🤖",
    description: "An intelligent automation tool built with Playwright and Python that streamlines LinkedIn's job application process. The bot handles multi-step Easy Apply forms, prevents duplicate submissions, and maintains a detailed application log with robust error handling.",
    image: "/projects/linkedin-bot.jpg",
    technologies: ["Python", "Playwright", "Pandas", "OpenPyXL", "Excel Automation"],
    githubUrl: "https://github.com/harshaldafade/LinkedIn-Bot", // update if repo name differs
    liveUrl: "",
    category: "automation",
    features: [
      "Automates LinkedIn Easy Apply job submissions end-to-end",
      "Handles complex multi-step forms including experience, education, skills, and location",
      "Tracks job applications in Excel with job ID, company, timestamp, and status",
      "Prevents duplicate applications using log-based filtering",
      "Robust error handling and retry logic for stuck forms or network timeouts",
      "Highly customizable through a structured `config.py` and dynamic profile blocks",
      "Built-in keyword-based filtering to exclude senior roles",
      "Modular and scalable structure ready for CI/CD and real-world deployment"
    ]
  },  
  {
    title: "URL Shortener",
    description: "A full-stack URL shortening service with click tracking. Built using React + TypeScript + Tailwind on the frontend and Node.js + Express + MongoDB on the backend. Automatically generates clean short links using NanoID and logs click statistics.",
    image: "/projects/url-shortener.jpg", // You can replace this with an actual screenshot from your README if needed
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "NanoID"],
    githubUrl: "https://github.com/harshaldafade/shorten-your-urls", // update this to actual repo link
    liveUrl: "", // fill in if deployed
    category: "web",
    features: [
      "Frontend built with React, TypeScript, Tailwind, and Vite",
      "Backend using Node.js, Express, TypeScript, and MongoDB",
      "Generates short URLs using NanoID with 10-character alphanumeric codes",
      "Click tracking on each shortened link (GET /:shortUrl endpoint)",
      "RESTful API: POST /api/shorten to generate, GET to redirect",
      "Fully modular codebase with separate client and server apps",
      "Environment-variable-driven configuration using `.env`",
      "MongoDB schema for storing full URLs, shortened codes, and click count",
      "Future roadmap includes QR code generation, user accounts, and analytics dashboard"
    ]
  },
  {
    title: "Plot2Vec 🎬",
    description: "A semantic movie recommendation engine that suggests contextually similar movies based on plot descriptions using Sentence Transformers, YAKE for keyword extraction, and FAISS for fast similarity search.",
    image: "/projects/plot2vec.jpg", // Replace with actual screenshot or illustration if available
    technologies: ["Python", "Sentence Transformers", "FAISS", "YAKE", "NLTK", "Pandas"],
    githubUrl: "https://github.com/harshaldafade/Plot2Vec", // update to actual repo
    liveUrl: "",
    category: "ai",
    features: [
      "Semantic similarity-based movie recommendations using plot-level embeddings",
      "Built on top of the all-mpnet-base-v2 Sentence Transformer model",
      "Supports both custom user input and existing movie selection",
      "Optional keyword-based search using YAKE to extract key phrases",
      "FAISS vector store for fast, scalable similarity indexing and retrieval",
      "Aggregation techniques for sentence embeddings (mean/sum pooling)",
      "Tested on a deduped subset of the Wiki Movie Plots dataset",
      "Offline-capable: no external API needed after initial embedding",
      "Highly modular architecture supporting future Streamlit/Flask frontend integration",
      "Future support planned for multi-language plots and embedding visualizations"
    ]
  },
  {
    title: "UMLS Inconsistency Checker",
    description: "A Python-based tool that parses UMLS ontology files to detect hierarchical inconsistencies such as parent-child cycles, broader-than violations, self-loops, and duplicate relationships in the MRREL.RRF dataset.",
    image: "/projects/umls-inconsistency-checker.jpg", // replace with actual screenshot if available
    technologies: ["Python", "Pandas", "NetworkX", "UMLS", "CSV Parsing", "Ontology Analysis"],
    githubUrl: "https://github.com/harshaldafade/UMLS-Inconsistency-Checker", // update if different
    liveUrl: "",
    category: "ai",
    features: [
      "Parses and analyzes UMLS `MRREL.RRF` file to extract concept relationships",
      "Detects cycles in parent-child (`PAR`/`CHD`) hierarchies",
      "Identifies broader-than (`RB`) and narrower-than (`RN`) violations",
      "Finds self-referential loops (CUI → CUI)",
      "Detects and logs duplicate relationships",
      "Outputs clean CSV reports for each inconsistency category",
      "Generates summary statistics for ontology health evaluation",
      "Command-line interface supports flexible analysis options (`--type` flag)",
      "Robust logging for debugging, transparency, and reproducibility",
      "Compatible with official UMLS datasets or public samples from Kaggle"
    ]
  },
  {
    title: "GLOW2D Atmospheric Model Integration 🌌",
    description: "Supported the deployment and testing of GLOW2D, a 2D global airglow and atmospheric density simulation model developed at UMass Lowell. Worked closely with postdoctoral researcher Dr. Sunip Mukherjee to adapt the scientific model for modern environments and contribute to research workflows.",
    image: "/projects/glow2d.jpg", // optional: can use a visual of the Earth's atmosphere or CLI simulation
    technologies: ["Fortran", "Python", "macOS", "Scientific Computing", "CLI Automation"],
    organizationUrl: "https://www.uml.edu/research/locsst/", // Optional
    packageUrl: "https://pypi.org/project/glow2d/", 
    category: "ai",
    features: [
      "Collaborated with Dr. Sunip Mukherjee (postdoc, UMass Lowell) to support research on GLOW2D atmospheric modeling",
      "Facilitated the full installation of GLOW2D on macOS, managing complex Fortran dependencies",
      "Resolved compatibility issues with modern compilers and adapted build scripts for M1/M2 chip support",
      "Tested simulation runs with custom input files and validated output data against expected airglow patterns",
      "Helped refine the CLI workflow and improved usability for future researchers using the tool locally",
      "Contributed to science-driven data preparation and simulation interpretation in space weather modeling"
    ]
  },
  {
    title: "Data Analytics Pipeline",
    description: "Built and scaled production-grade ETL pipelines in Python and SQL to clean, merge, and transform high-volume admissions data. Implemented ML models for applicant conversion prediction and automated reporting workflows.",
    image: "/projects/data-pipeline.jpg",
    technologies: ["Python", "SQL", "Machine Learning", "ETL", "Power BI"],
    organizationUrl: "https://www.uml.edu/academics/provost-office/innovation-workforce/",
    liveUrl: "",
    category: "ai",
    features: [
      "Production-grade ETL pipelines for high-volume data",
      "Automated data cleaning, merging, and transformation",
      "ML models for applicant conversion prediction",
      "Power BI dashboards for real-time insights",
      "Automated model selection and tuning"
    ]
  },
  {
    title: "Web Maintenance",
    description: "Rebuilt institutional websites using Tridion CMS with responsive design patterns and modular components. Automated site content deployment workflows using Python and Bash scripts, improving page load speed by 20%.",
    image: "/projects/web-maintenance.jpg",
    technologies: ["Tridion CMS", "Python", "Bash", "SEO", "WCAG 2.1"],
    organizationUrl: "https://www.uml.edu/research/locsst/",
    liveUrl: "",
    category: "web",
    features: [
      "Responsive design and modular components",
      "Automated content deployment with Python and Bash",
      "SEO optimization and structured metadata",
      "WCAG 2.1 accessibility compliance",
      "Improved page load speed by 20%"
    ]
  },
  {
    title: "RPA Workflow Automation",
    description: "Built scalable Blue Prism bots automating approval workflows, reducing operational delay by 45% across document lifecycles. Implemented exception handling, logging, and audit trail generation.",
    image: "/projects/rpa-automation.jpg",
    technologies: ["Blue Prism", "RPA", "Automation", "Workflow", "Audit"],
    organizationUrl: "https://www.aicte-india.org/",
    liveUrl: "",
    category: "automation",
    features: [
      "Blue Prism bots for workflow automation",
      "Exception handling and audit trail generation",
      "Refactored legacy scripts for reusability",
      "Reduced operational delay by 45%",
      "Compliance with regulatory requirements"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
} 