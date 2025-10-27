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
    },
    {
      name: "Property Tokenization Platform",
      description: `Created a blockchain-based property tokenization platform using Ethereum and Sepolia testnet, enabling fractional ownership of real estate assets. Developed smart contracts with Solidity to handle property tokens, ownership transfers, and dividend distribution. Implemented a secure frontend using React and Web3.js to connect with MetaMask and interact with smart contracts. Designed a comprehensive token standard system that ensures regulatory compliance while maintaining efficient transaction processing. Integrated IPFS for storing property documentation and metadata, ensuring transparent and immutable records. Created an intuitive marketplace UI for property token trading with real-time price feeds and portfolio tracking. The platform enables property owners to tokenize real estate assets, allowing investors to purchase fractional shares and participate in property ownership with automated dividend distribution`,
      technologies: [
        "Ethereum",
        "Solidity",
        "Web3.js",
        "React",
        "Sepolia",
        "IPFS",
        "Smart Contracts",
        "Token Standards"
      ],
    },
    {
      name: "Developer Profile NFT Builder",
      description: `Built an NFT builder platform for creating developer profile NFTs with on-chain verification using Solana, Anchor, and Cargo. Developed Rust-based smart contracts that enable developers to mint unique NFT profiles showcasing their skills, projects, and achievements. Implemented the Anchor framework for secure and efficient smart contract development with comprehensive testing using Mocha and Rust unit tests. Built an intuitive React frontend that connects to Phantom wallet and allows developers to create, customize, and manage their profile NFTs. Integrated GitHub API and CI/CD pipelines for automatic verification of developer contributions and achievements. Designed a verification system that validates developer credentials on-chain, making it easier for recruiters to identify and evaluate talent through immutable, verifiable credentials`,
      technologies: [
        "Solana",
        "Anchor",
        "Rust",
        "Cargo",
        "React",
        "Phantom Wallet",
        "GitHub API",
        "On-chain Verification"
      ],
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


          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
