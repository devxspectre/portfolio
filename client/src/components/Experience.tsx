const Experience = () => {
  const experiences = [
    {
      role: "Senior Blockchain Developer",
      company: "Tech Innovations",
      period: "2022 - Present",
      description: "Led development of cryptocurrency payment systems with focus on security and efficiency. Architected and implemented decentralized applications on Solana blockchain, resulting in improved performance and reduced transaction costs."
    },
    {
      role: "Fullstack Developer",
      company: "Blockchain Solutions",
      period: "2021 - 2022",
      description: "Built and maintained fullstack applications with React, TypeScript, and Node.js. Collaborated with cross-functional teams to design and implement user-facing features with responsive UIs."
    },
    {
      role: "Web Developer",
      company: "Startup XYZ",
      period: "2020 - 2021",
      description: "Implemented responsive web applications and integrated third-party services. Developed APIs and backend services that improved application performance by 30%."
    }
  ];

  return (
    <section id="experience" className="mb-12">
      <div className="bg-gray-800 p-8">
        <h2 className="text-2xl font-bold text-white mb-6 border-b pb-2">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="pb-4 border-b border-gray-700 last:border-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <div className="flex flex-col items-start md:items-end mt-1 md:mt-0">
                  <span className="text-lg font-medium text-blue-400">{exp.company}</span>
                  <span className="text-gray-400 text-sm mt-1">{exp.period}</span>
                </div>
              </div>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;