"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "ai" | "tools" | "languages";
  description: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: "Python",
    level: 95,
    category: "languages",
    description: "Proficient in Python for scripting, automation, backend systems, and building scalable data/AI pipelines. Used extensively in ML, NLP, and scientific computing.",
    icon: "🐍"
  },
  {
    name: "JavaScript/TS",
    level: 90,
    category: "languages",
    description: "Skilled in modern JS and TS for full-stack development with React, Node.js, and backend APIs. Used across multiple production-grade projects.",
    icon: "📜"
  },
  {
    name: "Java",
    level: 80,
    category: "languages",
    description: "Experience with Java for building backend services, Android apps, and implementing algorithms and data structures. Used in academic and enterprise projects.",
    icon: "☕"
  },
  {
    name: "C/C++",
    level: 75,
    category: "languages",
    description: "Experience with C/C++ for performance-critical tasks, algorithmic implementations, and low-level computing. Used in academic and system projects.",
    icon: "⚙️"
  },
  {
    name: "SQL",
    level: 85,
    category: "languages",
    description: "Strong command of SQL for data analysis, query optimization, and backend integration with PostgreSQL, MySQL, and SQLite.",
    icon: "🧾"
  },
  {
    name: "Machine Learning",
    level: 92,
    category: "ai",
    description: "Skilled in building end-to-end ML systems with Scikit-learn, XGBoost, LightGBM, and deploying models in production. Familiar with regression, classification, clustering, and time-series.",
    icon: "🧠"
  },
  {
    name: "Deep Learning",
    level: 90,
    category: "ai",
    description: "Expert in CNNs, RNNs, Transformers, and attention-based models using PyTorch and TensorFlow. Worked on projects involving ViT, LSTM, GANs, and multimodal architectures.",
    icon: "🤖"
  },
  {
    name: "LLMs & NLP",
    level: 92,
    category: "ai",
    description: "Extensive work with Hugging Face Transformers, LangChain, and OpenAI APIs for prompt engineering, semantic search, retrieval-augmented generation (RAG), and text generation.",
    icon: "💬"
  },
  {
    name: "Web Development",
    level: 88,
    category: "frontend",
    description: "Full-stack experience using React, Next.js, Node.js, TypeScript, Express, Tailwind, and RESTful API integration. Familiar with building performant and secure frontend/backend systems.",
    icon: "🌐"
  },
  {
    name: "Cloud & DevOps",
    level: 87,
    category: "tools",
    description: "Hands-on experience with AWS (EC2, S3, Lambda, RDS), Docker, GitHub Actions, CI/CD workflows, and containerized deployments. Familiar with Terraform and Kubernetes basics.",
    icon: "☁️"
  },
  {
    name: "Databases",
    level: 85,
    category: "backend",
    description: "Skilled in relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases. Designed schemas, performed query optimization, and implemented backend-integrated data layers.",
    icon: "🗄️"
  },
  {
    name: "AI/ML Tools",
    level: 90,
    category: "ai",
    description: "Used OpenAI, Hugging Face, LangChain, Weaviate, FAISS, and ChromaDB for building search and generative AI pipelines. Familiar with Vector DBs and prompt engineering frameworks.",
    icon: "🛠️"
  },
  {
    name: "Automation & Scripting",
    level: 88,
    category: "tools",
    description: "Built bots and automation tools using Playwright, Selenium, BeautifulSoup, PyAutoGUI, and Blue Prism. Experience in web scraping, job automation, and RPA systems.",
    icon: "⚙️"
  },
  {
    name: "Data Engineering",
    level: 86,
    category: "backend",
    description: "Developed ETL pipelines using Pandas, NumPy, SQL, and Apache Airflow. Familiar with building reproducible workflows for structured and unstructured data pipelines.",
    icon: "📊"
  },
  {
    name: "Visualization & BI",
    level: 82,
    category: "tools",
    description: "Created dashboards and data visualizations using Power BI, Matplotlib, Seaborn, and Plotly. Experience in building insight-driven reports and analytical charts.",
    icon: "📈"
  },
  {
    name: "Version Control & Collaboration",
    level: 85,
    category: "tools",
    description: "Git, GitHub, GitLab for version control. Used in collaborative academic, research, and production environments.",
    icon: "🔃"
  }
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "AI/ML" },
  { id: "tools", label: "Tools & DevOps" },
  { id: "languages", label: "Programming Languages" }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                className="bg-gray-800 rounded-xl p-6 h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>

                <div className="relative h-2 bg-gray-700 rounded-full mb-4">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>

                <motion.p
                  className="text-gray-300 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
