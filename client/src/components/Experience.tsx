import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Fullstack Developer intern",
      company: "Poper.ai",
      period: "07-2025 - 09-2025",
      description: `Engineered robust backend APIs using Node.js and Express for real-time communication, supporting AI-driven features
        and handling high-concurrency requests with 99% uptime, Developed over 30 reusable React components for AI workflows, while optimizing backend endpoints to handle upto 1000+ daily queries with 95% accuracy using LangChain and OpenAI APIs, Created custom Webpack configurations for embeddable widgets and chatbot integrations, minimizing bundle sizes by
        40% and ensuring seamless backend-frontend synchronization
        • Built interactive HTML5 Canvas games integrated with backend services, boosting user engagement by 60% through
        efficient data streaming and real-time updatesBuilt and maintained fullstack applications with React, TypeScript, and Node.js. Collaborated with cross-functional teams to design and implement user-facing features with responsive UIs.`,
    },
  ];

  return (
    <motion.section 
      id="experience" 
      className="mb-16 digital-font"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div>
        <h2 className="section-header text-3xl font-bold text-white mb-8 digital-font">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="pb-6 border-b border-gray-700 last:border-0 last:pb-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 digital-font">{exp.role}</h3>
                  <span className="text-xl font-semibold text-gray-200 mono-font">{exp.company}</span>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-gray-300 text-lg font-medium mono-font">
                    {exp.period}
                  </span>
                </div>
              </div>
              <div className="pl-4 border-l-2 border-gray-600">
                <p className="text-gray-200 text-lg leading-relaxed mono-font">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
