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
    <div id="projects">
      <h2 className="text-2xl font-bold text-white mb-4 border-b pb-2">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 pb-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-gray-700 border-2 border-dashed rounded-xl w-full h-40 flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-400">Project Image</span>
                  )}
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;