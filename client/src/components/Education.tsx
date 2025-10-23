import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "Bachelors in Engineering",
      institution: "M S Ramaiah institute of Technology",
      period: "2022-2026",
    },
  ];

  return (
    <motion.section
      id="education"
      className="mb-16 digital-font"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div>
        <h2 className="section-header text-3xl font-bold text-white mb-8 digital-font">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="pb-6 border-b border-gray-700 last:border-0 last:pb-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 digital-font">
                    {edu.degree}
                  </h3>
                  <span className="text-xl font-semibold text-gray-200 mono-font">
                    {edu.institution}
                  </span>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-gray-300 text-lg font-medium mono-font">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
