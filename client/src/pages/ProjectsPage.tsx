import { Link } from "react-router-dom"

const projects = [
  {
    name: "Payzee",
    description:
      "Built enterprise-grade backend for cryptocurrency transactions on Solana, achieving 99.9% success rate for 10,000+ daily transactions using Node.js and Express. Developed RESTful APIs with MongoDB and Redis for caching, implementing asynchronous processing with worker threads to handle peak loads without downtime. Architected distributed systems with Docker and AWS, incorporating load balancing and auto-scaling to maintain 100ms average latency under high traffic. Integrated secure authentication and validation mechanisms, reducing fraud incidents by 60% through on-chain verification and real-time monitoring",
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Solana Web3.js",
      "Docker",
      "Vercel",
      "Kafka",
    ],
  },
  {
    name: "Metaverse 2D",
    description:
      "Architected scalable backend for a multiplayer game using Node.js and WebSockets, supporting 500+ concurrent players with real-time, low-latency communication. Implemented Redis Pub/Sub for efficient message brokering, reducing server load by 40% and enabling seamless event-driven updates in distributed systems. Wrote tests implementing test driven development. Deployed fault-tolerant microservices with Docker orchestration, achieving 99.9% uptime and handling peak loads with sub-100ms response times. Optimized backend infrastructure for high-concurrency gaming workloads, integrating PostgreSQL for persistent data and Redis for caching to reduce latency by 30%",
    technologies: [
      "Node.js",
      "WebSockets",
      "Redis Pub/Sub",
      "PostgreSQL",
      "Docker",
      "Jest",
    ],
  },
  {
    name: "PickPal",
    description:
      "Developed scalable backend services in Node.js and TypeScript with Prisma ORM, supporting multi-tenant architecture for 1,000+ concurrent users. Optimized PostgreSQL database schema and queries, implementing Redis caching to decrease response times by 45% in distributed environments. Deployed microservices using Docker, ensuring high availability and fault tolerance for crowdsourcing tasks like data labeling and content moderation. Integrated CI/CD pipelines for seamless deployments, reducing deployment time by 70% and enabling rapid iteration in cloud-based systems",
    technologies: ["React", "Ethereum", "IPFS", "Solidity", "MongoDB"],
  },
  {
    name: "Property Tokenization Platform",
    description:
      "Created a blockchain-based property tokenization platform using Ethereum and Sepolia testnet, enabling fractional ownership of real estate assets. Developed smart contracts with Solidity to handle property tokens, ownership transfers, and dividend distribution. Implemented a secure frontend using React and Web3.js to connect with MetaMask and interact with smart contracts. Designed a comprehensive token standard system that ensures regulatory compliance while maintaining efficient transaction processing. Integrated IPFS for storing property documentation and metadata, ensuring transparent and immutable records. Created an intuitive marketplace UI for property token trading with real-time price feeds and portfolio tracking. The platform enables property owners to tokenize real estate assets, allowing investors to purchase fractional shares and participate in property ownership with automated dividend distribution",
    technologies: [
      "Ethereum",
      "Solidity",
      "Web3.js",
      "React",
      "Sepolia",
      "IPFS",
      "Smart Contracts",
      "Token Standards",
    ],
  },
  {
    name: "Developer Profile NFT Builder",
    description:
      "Built an NFT builder platform for creating developer profile NFTs with on-chain verification using Solana, Anchor, and Cargo. Developed Rust-based smart contracts that enable developers to mint unique NFT profiles showcasing their skills, projects, and achievements. Implemented the Anchor framework for secure and efficient smart contract development with comprehensive testing using Mocha and Rust unit tests. Built an intuitive React frontend that connects to Phantom wallet and allows developers to create, customize, and manage their profile NFTs. Integrated GitHub API and CI/CD pipelines for automatic verification of developer contributions and achievements. Designed a verification system that validates developer credentials on-chain, making it easier for recruiters to identify and evaluate talent through immutable, verifiable credentials",
    technologies: [
      "Solana",
      "Anchor",
      "Rust",
      "Cargo",
      "React",
      "Phantom Wallet",
      "GitHub API",
      "On-chain Verification",
    ],
  },
]

const ProjectsPage = () => {
  return (
    <section className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          to="/"
          className="text-sm text-black/40 hover:text-black transition-colors font-sans inline-block"
        >
          &larr; back
        </Link>
        <h2 className="text-2xl font-bold text-black mt-6 mb-12 font-sans">
          Projects
        </h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-b border-black/10 pb-12 last:border-0 last:pb-0"
            >
              <h3 className="text-xl font-semibold text-black font-sans">
                {project.name}
              </h3>
              <div className="mt-4 text-sm text-black/70 leading-relaxed space-y-2 font-serif">
                {project.description.split(". ").map((sentence, idx, array) => {
                  const trimmed = sentence.trim()
                  return trimmed ? (
                    <p key={idx}>
                      {trimmed}
                      {idx < array.length - 1 ? "." : ""}
                    </p>
                  ) : null
                })}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 font-sans">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs text-black/50 border border-black/20 px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
