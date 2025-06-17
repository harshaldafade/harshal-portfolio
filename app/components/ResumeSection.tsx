"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          Resume
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact, Education, Skills */}
          <div className="space-y-8">
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-2">Contact</h3>
              <div className="text-gray-300 space-y-1">
                <div>Harshal Dafade</div>
                <div><a href="tel:+19785696638" className="hover:underline">+1-978-569-6638</a></div>
                <div><a href="mailto:harshaldafade2001@gmail.com" className="hover:underline">harshaldafade2001@gmail.com</a></div>
                <div><a href="https://linkedin.com/in/harshal-dafade" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/harshal-dafade</a></div>
                <div><a href="https://github.com/harshaldafade" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/harshaldafade</a></div>
              </div>
            </div>
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <div className="mb-4">
                <div className="font-semibold">University of Massachusetts</div>
                <div className="text-gray-400">MS Computer Science | GPA: 3.7</div>
                <div className="text-gray-400">Sep 2023 - May 2025</div>
                <div className="text-gray-300 text-sm mt-1">Coursework: Algorithms, Operating Systems, Internet of Things, Human Robot Interaction, Human Computer Interaction, ML/DL security and privacy, NLP, Internet & Web Systems, Reinforcement Learning, Data Science</div>
              </div>
              <div>
                <div className="font-semibold">Pune University</div>
                <div className="text-gray-400">B.E. Computer Engineering | Distinction with Honors in AI/ML | GPA: 3.6</div>
                <div className="text-gray-400">Sep 2019 - May 2023</div>
                <div className="text-gray-300 text-sm mt-1">Coursework: Data Structures and Algorithms, Machine Learning, Deep Learning, Artificial Intelligence, Computer Vision, Cloud computing, Blockchain, Data Science and Big Data Analytics, Business Intelligence</div>
              </div>
            </div>
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-bold mb-2">Technical Skills</h3>
              <div className="text-gray-300 text-sm space-y-2">
                <div><span className="font-semibold">Programming Languages:</span> Python, C++, Java, JavaScript, TypeScript, Solidity, SQL, Bash, C#, Ruby, PHP</div>
                <div><span className="font-semibold">Machine Learning & AI:</span> TensorFlow, PyTorch, Scikit-learn, NumPy, Keras, Hugging Face Transformers, RAG, Generative AI, LangChain, Pydantic, RL (SARSA, Q-learning, n-step TD), Function Approximation, OpenAI Gym, Sentence-Transformers, OpenCV, CNNs, ViT</div>
                <div><span className="font-semibold">Development & DevOps Tools:</span> Git, Docker, Kubernetes, Jenkins, VS Code, Postman, SaaS Tools, Jupyter Notebook</div>
                <div><span className="font-semibold">Cloud & Databases:</span> AWS (EC2, S3, Lambda), Azure, GCP, Salesforce, PostgreSQL, MySQL, MongoDB, SQLite, AstraDB (Cassandra)</div>
              </div>
            </div>
          </div>
          {/* Right: Experience, Projects */}
          <div className="space-y-8">
            {/* Experience */}
            <div>
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <div className="mb-4">
                <div className="font-semibold">UMass Lowell (Office of Graduate and Professional Studies)</div>
                <div className="text-gray-400">Data Analyst/Engineer | Lowell, MA</div>
                <div className="text-gray-400">Jan 2024 - May 2025</div>
                <ul className="list-disc list-inside text-gray-300 text-sm mt-1 space-y-1">
                  <li>Built and scaled production-grade ETL pipelines in Python and SQL to clean, merge, and transform high-volume admissions data from Salesforce, CSV, and API sources, improving pipeline throughput by 1.3x while maintaining data integrity across 25k+ records/month. Enhanced downstream workflow stability by 30% by resolving data anomalies.</li>
                  <li>Developed, evaluated, and deployed machine learning models (logistic regression, decision trees, random forest classifiers) to predict applicant conversion and enrollment, increasing campaign precision by 25%.</li>
                  <li>Automated model selection and tuning workflows using GridSearchCV and cross-validation, and delivered Power BI dashboards for real-time insights into admissions trends, pipeline conversion, and model KPIs; reduced manual reporting time by 60%.</li>
                </ul>
              </div>
              <div className="mb-4">
                <div className="font-semibold">UMass Lowell (Lowell Center for Space Science and Technology)</div>
                <div className="text-gray-400">Web Maintenance Specialist | Lowell, MA</div>
                <div className="text-gray-400">Dec 2023 - May 2025</div>
                <ul className="list-disc list-inside text-gray-300 text-sm mt-1 space-y-1">
                  <li>Rebuilt institutional websites using Tridion CMS with responsive design patterns and modular components, improving page load speed by 20%. Enhancing scalability and cross-device compatibility, while boosting website traffic by over 42%.</li>
                  <li>Automated site content deployment workflows using Python and Bash scripts, reducing release time by 35% and eliminating reliance on manual FTP transfers through streamlined CI processes.</li>
                  <li>Implemented structured metadata, schema.org tags, and WCAG 2.1 compliance, improving SEO performance and accessibility.</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">All India Council for Technical Education</div>
                <div className="text-gray-400">Robotic Process Automation Intern | Pune, Maharashtra</div>
                <div className="text-gray-400">Mar 2022 - May 2022</div>
                <ul className="list-disc list-inside text-gray-300 text-sm mt-1 space-y-1">
                  <li>Built scalable Blue Prism bots automating approval workflows, reducing operational delay by 45% across document lifecycles.</li>
                  <li>Refactored legacy automation scripts into reusable logic blocks and object layers, shortening development cycles by 30%.</li>
                  <li>Performed exception handling, logging, and audit trail generation to ensure fault-tolerant automation and compliance.</li>
                </ul>
              </div>
            </div>
            {/* Projects */}
            <div>
              <h3 className="text-xl font-bold mb-2">Projects</h3>
              <div className="mb-4">
                <div className="font-semibold">Trump Of The Day</div>
                <div className="text-gray-400 text-sm">Open Source Project Owner (<a href="https://github.com/harshaldafade/trump-of-the-day-server" target="_blank" rel="noopener noreferrer" className="underline">repo</a>, <a href="https://trumpoftheday.com" target="_blank" rel="noopener noreferrer" className="underline">trumpoftheday.com</a>)</div>
                <ul className="list-disc list-inside text-gray-300 text-sm mt-1 space-y-1">
                  <li>Built and deployed a full-stack news aggregation platform using React and Node.js, automating web scraping from 20+ verified media sources with real-time ingestion, storing over 7,000 articles in Supabase (PostgreSQL).</li>
                  <li>Engineered scalable RESTful APIs and backend architecture supporting deduplication, timestamped indexing, ranking, and metadata-driven querying; structured for modularity and future extensibility.</li>
                  <li>Architected data pipelines for long-term content archival and semantic analysis; leading integration of OAuth 2.0, LLM-based summarization, and migration from Netlify to AWS (EC2, S3) for enhanced scalability and server control.</li>
                  <li>Directed GitHub-based collaboration with CI/CD workflows, issue tracking, pull request management, and contributor onboarding to drive open-source growth.</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">ML Based Pothole Detection and Mapping System</div>
                <div className="text-gray-400 text-sm">Research Collaboration with UMass Lowell (<a href="https://github.com/harshaldafade/real-time-pothole-detector" target="_blank" rel="noopener noreferrer" className="underline">repo</a>)</div>
                <ul className="list-disc list-inside text-gray-300 text-sm mt-1 space-y-1">
                  <li>Developed a real-time Android application utilizing multi-sensor fusion (accelerometer, gyroscope, magnetometer) and an on device LSTM model for anomaly detection with sub-200ms inference latency.</li>
                  <li>Collected and labeled 10,000+ mobile sensor readings across varied road surfaces; trained LSTM and classical models (Random Forest, SVM) achieving 92%+ classification accuracy.</li>
                  <li>Engineered a signal processing pipeline extracting frequency (FFT) and statistical (RMS, zero-crossing rate) features for robust time-series analysis and edge inference.</li>
                  <li>Integrated Google Maps API for GPS-based pothole geotagging and deployed a feedback loop for user validation and adaptive model retraining, reducing false positives by 30%.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 