import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "Payzee",
      description: `Built enterprise-grade backend for cryptocurrency transactions on Solana, achieving 99.9% success rate for 10,000+ daily
      transactions using Node.js and Express. Developed RESTful APIs with MongoDB and Redis for caching, implementing asynchronous processing with worker
      threads to handle peak loads without downtime. Architected distributed systems with Docker and AWS, incorporating load balancing and auto-scaling to maintain 100ms
      average latency under high traffic. Integrated secure authentication and validation mechanisms, reducing fraud incidents by 60% through on-chain
      verification and real-time monitoring`,
      technologies: [
        "Node.js",
        "Express",
        "postgresSql",
        "Redis",
        "Solana Web3.js",
        "Docker",
        "Vercel",
        "Kafka",
      ],
      image: "/payzee.png", // Using one of the images from public folder
    },
    {
      name: "Metaverse 2D",
      description: `Architected scalable backend for a multiplayer game using Node.js and WebSockets, supporting 500+ concurrent players
      with real-time, low-latency communication. Implemented Redis Pub/Sub for efficient message brokering, reducing server load by 40% and enabling seamless
      event-driven updates in distributed systems. Wrote tests implementing test driven development. Deployed fault-tolerant microservices with Docker orchestration, achieving 99.9% uptime and handling peak loads with
      sub-100ms response times. Optimized backend infrastructure for high-concurrency gaming workloads, integrating PostgreSQL for persistent data and
      Redis for caching to reduce latency by 30%`,

      technologies: [
        "Node.js",
        "WebSockets",
        "Redis Pub/Sub",
        "PostgreSQL",
        "Docker",
        "jest",
      ],
    },
    {
      name: "PickPal",
      description: `  Developed scalable backend services in Node.js and TypeScript with Prisma ORM, supporting multi-tenant architecture
        for 1,000+ concurrent users. Optimized PostgreSQL database schema and queries, implementing Redis caching to decrease response times by 45% in
        distributed environments. Deployed microservices using Docker, ensuring high availability and fault tolerance for crowdsourcing tasks like data
        labeling and content moderation. Integrated CI/CD pipelines for seamless deployments, reducing deployment time by 70% and enabling rapid iteration in
        cloud-based systems`,
      technologies: ["React", "Ethereum", "IPFS", "Solidity", "MongoDB"],
      image: "/blog-x.png", // Using one of the images from public folder
    },
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
              <h3 className="text-xl font-bold text-white mb-2 digital-font">
                {project.name}
              </h3>
              <div className="text-gray-300 mb-3 terminal-content mono-font space-y-2">
                {project.description.split(". ").map((sentence, idx, array) => {
                  // Only create bullet points for non-empty sentences
                  const trimmed = sentence.trim();
                  return trimmed ? (
                    <div key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        {trimmed}
                        {idx < array.length - 1 ? "." : ""}
                      </span>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            <div className="terminal-prompt mb-2 mono-font">
              $ technologies:
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="terminal-tech mono-font">
                  {tech}
                </span>
              ))}
            </div>

            <div className="terminal-prompt mb-2 mono-font">
              $ view_project:
            </div>
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
                    <span className="text-gray-500 text-sm mono-font">
                      Project Image
                    </span>
                  )}
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="terminal-prompt mono-font">
                  $ project_details:
                </div>
                <div className="text-gray-400 text-sm mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 mono-font">
                  <p className="mb-1">
                    Status: <span className="text-green-400">Completed</span>
                  </p>
                  <p className="mb-1">
                    Type: <span className="text-blue-400">Fullstack</span>
                  </p>
                  <p className="mb-1">
                    Year: <span className="text-purple-400">2024</span>
                  </p>
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
