"use client";

import { motion } from "framer-motion";
import StatsCounter from "./StatsCounter";
import Timeline from "./Timeline";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-8 max-w-4xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg">
              I&apos;m a Computer Science Master&apos;s student at UMass Lowell, specializing in AI/ML and full-stack development.
              With a strong foundation in both theoretical concepts and practical applications, I focus on building
              intelligent solutions that solve real-world problems.
            </p>
            <p className="text-gray-300 text-lg">
              My expertise spans from machine learning and deep learning to web development and automation.
              I&apos;m particularly passionate about leveraging AI to create impactful applications and
              exploring the intersection of technology and user experience.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/harshaldafade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/harshal-dafade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="mailto:harshaldafade2001@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Email
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse" />
              <img
                src="/profile.jpg"
                alt="Harshal Dafade profile"
                className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <StatsCounter />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Experience</h3>
          <Timeline />
        </motion.div>
      </div>
    </section>
  );
} 