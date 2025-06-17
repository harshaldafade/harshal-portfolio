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
    title: "Data Analytics Pipeline",
    description: "Built and scaled production-grade ETL pipelines in Python and SQL to clean, merge, and transform high-volume admissions data. Implemented ML models for applicant conversion prediction and automated reporting workflows.",
    image: "/projects/data-pipeline.jpg",
    technologies: ["Python", "SQL", "Machine Learning", "ETL", "Power BI"],
    githubUrl: "https://github.com/harshaldafade",
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
    title: "Web Maintenance System",
    description: "Rebuilt institutional websites using Tridion CMS with responsive design patterns and modular components. Automated site content deployment workflows using Python and Bash scripts, improving page load speed by 20%.",
    image: "/projects/web-maintenance.jpg",
    technologies: ["Tridion CMS", "Python", "Bash", "SEO", "WCAG 2.1"],
    githubUrl: "https://github.com/harshaldafade",
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
    githubUrl: "https://github.com/harshaldafade",
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

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI/ML" },
  { id: "web", label: "Web Development" },
  { id: "automation", label: "Automation" },
  { id: "mobile", label: "Mobile Apps" }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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