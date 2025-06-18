"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const timelineData: TimelineItem[] = [
  {
    period: "Jan 2024 – May 2025",
    title: "Data Analyst / Engineer",
    company: "UMass Lowell – Office of Graduate & Professional Studies",
    description:
      "Led analytics pipelines for the university's admissions department. Built scalable ETL systems, deployed predictive models, and created real-time dashboards for actionable insights.",
    achievements: [
      "Built and scaled ETL pipelines processing 25K+ records/month from Salesforce, CSV, and API sources",
      "Deployed ML models (logistic regression, decision trees, random forest) to predict applicant conversion",
      "Increased marketing precision by 25% by identifying high-probability leads",
      "Automated feature selection using GridSearchCV and cross-validation",
      "Integrated Power BI dashboards with real-time updates, cutting reporting time by 60%"
    ],
    technologies: [
      "Python",
      "SQL",
      "Power BI",
      "Scikit-learn",
      "Logistic Regression",
      "Random Forest",
      "GridSearchCV",
      "Pandas",
      "ETL"
    ]
  },
  {
    period: "Dec 2023 – May 2025",
    title: "Web Maintenance Specialist",
    company: "Lowell Center for Space Science and Technology (LoCSST)",
    description:
      "Managed multiple institutional websites, improving their performance, reliability, and accessibility. Automated publishing workflows and optimized front-end load times.",
    achievements: [
      "Redesigned site templates and reduced page load times by 20%",
      "Increased organic traffic by 42% through SEO optimization",
      "Implemented schema.org structured metadata and achieved full WCAG 2.1 accessibility compliance",
      "Automated content deployment pipelines using Python and Bash, reducing release time by 35%"
    ],
    technologies: [
      "Tridion CMS",
      "Python",
      "Bash",
      "SEO",
      "CI/CD",
      "Accessibility",
      "WCAG 2.1"
    ]
  },
  {
    period: "Jun 2022 – Aug 2022",
    title: "RPA Intern",
    company: "All India Council for Technical Education",
    description:
      "Developed and deployed Blue Prism bots to automate administrative approval processes and eliminate bottlenecks in document management systems.",
    achievements: [
      "Designed and deployed multiple scalable Blue Prism bots",
      "Reduced operational delays by 45% across multi-step workflows",
      "Improved bot reliability by implementing robust exception handling",
      "Refactored legacy automation code to improve maintainability and reduce runtime errors",
      "Collaborated with compliance teams to ensure regulatory alignment"
    ],
    technologies: [
      "Blue Prism",
      "RPA",
      "Automation",
      "Exception Handling",
      "Workflow Design"
    ]
  },
  {
    period: "Sep 2023 – May 2025",
    title: "M.S. in Computer Science",
    company: "University of Massachusetts Lowell",
    description:
      "Graduate coursework and research focused on artificial intelligence, machine learning, full-stack systems, and NLP. GPA: 3.7.",
    achievements: [
      "Completed advanced coursework in: Reinforcement Learning, Machine Learning and Deep Learning Security, Human-Robot Interaction, Human-Computer Interaction, Natural Language Processing, Data Science, Web Systems, Operating Systems, and IoT",
      "Developed multiple LLM-integrated tools, including a news aggregation platform and OpenAPI automation agent",
      "Built end-to-end full-stack systems with React, Node.js, Supabase, and Tailwind",
      "Conducted independent research into adversarial robustness and explainability for deep learning models",
      "Worked as a Data Analyst/Engineer and Web Maintenance Specialist concurrently with full-time graduate study"
    ],
    technologies: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "Supabase",
      "ChromaDB",
      "LangChain"
    ]
  },
  {
    period: "Aug 2019 – May 2023",
    title: "B.E. in Computer Engineering (Honors in AI/ML)",
    company: "Pune University",
    description:
      "Undergraduate honors program focused on artificial intelligence, machine learning, and data science. Graduated with Distinction. GPA: 3.6.",
    achievements: [
      "Completed core coursework in: Data Structures and Algorithms, Machine Learning, Deep Learning, Artificial Intelligence, Cloud Computing, Blockchain, Business Intelligence, and Computer Vision",
      "Built an LSTM-based Android pothole detection system using accelerometer and gyroscope data",
      "Served as lead developer on academic projects integrating IoT with ML models",
      "Earned honors distinction in AI/ML specialization across 4-year program"
    ],
    technologies: [
      "Python",
      "C++",
      "Java",
      "Android",
      "LSTM",
      "Sensor Fusion",
      "AI/ML",
      "TensorFlow",
      "Keras"
    ]
  }
];

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-blue-600" />

      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="relative mb-12"
        >
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-start md:items-center`}
          >
            <div className="w-full md:w-1/2 px-4">
              <motion.div
                className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-2xl cursor-pointer border border-gray-700"
                whileHover={{ scale: 1.02 }}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <div className="text-sm text-purple-400 font-mono mb-1">
                  {item.period}
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                <div className="font-semibold text-blue-400">{item.company}</div>
                <div className="text-gray-300 mb-4">{item.description}</div>

                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-1 text-purple-300">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1 text-purple-300">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs bg-gray-800 border border-gray-600 rounded-full text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center py-4 md:py-0">
              <motion.div
                className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
