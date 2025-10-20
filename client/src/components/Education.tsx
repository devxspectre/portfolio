const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "XYZ University",
      period: "2016 - 2020",
      details: "Relevant coursework: Data Structures, Algorithms, Software Engineering, Distributed Systems"
    }
  ];

  return (
    <section id="education" className="mb-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                <div className="flex flex-col items-start md:items-end mt-1 md:mt-0">
                  <span className="text-lg font-medium text-blue-600">{edu.institution}</span>
                  <span className="text-gray-600 text-sm mt-1">{edu.period}</span>
                </div>
              </div>
              {edu.details && <p className="mt-2 text-gray-700">{edu.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;