"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "ai" | "tools";
  description: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: "Python",
    level: 95,
    category: "backend",
    description: "Expert in Python for AI/ML, data analysis, and backend development",
    icon: "🐍"
  },
  {
    name: "Machine Learning",
    level: 90,
    category: "ai",
    description: "TensorFlow, PyTorch, Scikit-learn, and advanced ML concepts",
    icon: "🧠"
  },
  {
    name: "Deep Learning",
    level: 90,
    category: "ai",
    description: "CNNs, ViT, Transformers, and modern DL architectures",
    icon: "🤖"
  },
  {
    name: "Web Development",
    level: 85,
    category: "frontend",
    description: "React, Node.js, TypeScript, and modern web technologies",
    icon: "🌐"
  },
  {
    name: "Cloud & DevOps",
    level: 85,
    category: "tools",
    description: "AWS, Docker, Kubernetes, and CI/CD practices",
    icon: "☁️"
  },
  {
    name: "Databases",
    level: 85,
    category: "backend",
    description: "PostgreSQL, MongoDB, SQLite, and database design",
    icon: "🗄️"
  },
  {
    name: "AI/ML Tools",
    level: 90,
    category: "ai",
    description: "LangChain, Hugging Face, OpenAI, and RAG systems",
    icon: "🔧"
  },
  {
    name: "Development Tools",
    level: 85,
    category: "tools",
    description: "Git, VS Code, Postman, and development workflows",
    icon: "🛠️"
  }
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "AI/ML" },
  { id: "tools", label: "Tools & DevOps" }
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
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
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
                  <h3 className="text-xl font-bold">{skill.name}</h3>
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