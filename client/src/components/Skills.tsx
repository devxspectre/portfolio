const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "/1.svg" },
        { name: "TypeScript", icon: "/2.svg" },
        { name: "JavaScript", icon: "/3.svg" },
        { name: "HTML5", icon: "/4.svg" },
        { name: "CSS3", icon: "/5.svg" },
        { name: "Tailwind CSS", icon: "/6.svg" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "/7.svg" },
        { name: "Express", icon: "/8.svg" },
        { name: "MongoDB", icon: "/9.svg" },
        { name: "PostgreSQL", icon: "/10.svg" },
        { name: "REST APIs", icon: "/11.svg" }
      ]
    },
    {
      category: "Blockchain",
      skills: [
        { name: "Solana", icon: "/solana.png" },
        { name: "Ethereum", icon: "/12.svg" },
        { name: "Smart Contracts", icon: "/13.svg" },
        { name: "Web3.js", icon: "/14.svg" },
        { name: "Rust", icon: "/15.svg" },
        { name: "Solidity", icon: "/16.svg" }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: "/17.svg" },
        { name: "Docker", icon: "/18.svg" },
        { name: "CI/CD", icon: "/19.svg" },
        { name: "AWS", icon: "/20.svg" },
        { name: "Jest", icon: "/21.svg" },
        { name: "Framer Motion", icon: "/22.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="mb-12">
      <div className="bg-gray-800 p-8">
        <h2 className="text-2xl font-bold text-white mb-6 border-b pb-2">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-1">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-xs text-gray-300 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;