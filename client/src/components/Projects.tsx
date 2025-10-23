import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "Blockchain Payment Gateway",
      description: "Built a cryptocurrency payment gateway during undergraduate days. The system enabled secure and efficient cryptocurrency transactions with real-time conversion rates and multi-currency support.",
      technologies: ["React", "Node.js", "Blockchain", "Solana", "Web3.js"],
      image: "/payzee.png" // Using one of the images from public folder
    },
    {
      name: "Decentralized Exchange Platform",
      description: "Developed a decentralized exchange platform with advanced trading features, order matching algorithms, and cross-chain compatibility. Implemented robust security measures and efficient transaction processing.",
      technologies: ["React", "Rust", "Solana", "Smart Contracts", "TypeScript"],
      image: "/in-secure.png" // Using one of the images from public folder
    },
    {
      name: "NFT Marketplace",
      description: "Created a full-featured NFT marketplace with minting, buying, selling, and auction capabilities. Integrated wallet connectivity and IPFS storage for decentralized asset management.",
      technologies: ["React", "Ethereum", "IPFS", "Solidity", "MongoDB"],
      image: "/blog-x.png" // Using one of the images from public folder
    }
  ];

  return (
    <motion.div 
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="digital-font"
    >
      <h2 className="section-header text-3xl font-bold text-white mb-8 digital-font">
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="terminal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="terminal-header">
              <h3 className="text-xl font-bold text-white mb-2 digital-font">{project.name}</h3>
              <p className="text-gray-300 mb-3 terminal-content mono-font">{project.description}</p>
            </div>
            
            <div className="terminal-prompt mb-2 mono-font">$ technologies:</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="terminal-tech mono-font"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="terminal-prompt mb-2 mono-font">$ view_project:</div>
            <div className="flex flex-col md:flex-row gap-4 mt-3">
              <div className="md:w-1/3">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg w-full h-32 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm mono-font">Project Image</span>
                  )}
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="terminal-prompt mono-font">$ project_details:</div>
                <div className="text-gray-400 text-sm mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 mono-font">
                  <p className="mb-1">Status: <span className="text-green-400">Completed</span></p>
                  <p className="mb-1">Type: <span className="text-blue-400">Fullstack</span></p>
                  <p className="mb-1">Year: <span className="text-purple-400">2024</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;