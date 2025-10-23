import { motion } from "framer-motion";
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython,
  SiSolidity,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiEthereum,
  SiSolana,
  SiWeb3Dotjs,
  SiBlockchaindotcom,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiAmazon
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "Solidity", icon: SiSolidity },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Ethereum", icon: SiEthereum },
    { name: "Solana", icon: SiSolana },
    { name: "Web3.js", icon: SiWeb3Dotjs },
    { name: "Blockchain", icon: SiBlockchaindotcom },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Vercel", icon: SiVercel },
    { name: "AWS", icon: SiAmazon },
  ];

  return (
    <motion.section 
      id="skills" 
      className="mb-16 digital-font"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div>
        <h2 className="section-header text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 digital-font">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
          {skillCategories.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div 
                key={index}
                className="skill-item flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg bg-gray-800/20 hover:bg-gray-800/40 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -8 }}
              >
                <div className="text-2xl sm:text-3xl text-gray-300 mb-1 sm:mb-2">
                  <IconComponent />
                </div>
                <span className="text-xs sm:text-sm text-gray-200 text-center mono-font">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
