import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="digital-font">
        <div className="flex flex-col">
          <div className="mt-4">
            <h2 className="section-header text-3xl font-bold text-white mb-6 digital-font">
              About Me
            </h2>
            <motion.p
              className="text-gray-200 mono-font text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Backend-focused fullstack developer with expertise in system architecture, 
              microservices, distributed systems, and blockchain technologies. 
              Specialized in building scalable backend solutions with advanced technologies 
              including Apache Kafka for real-time data streaming, containerized deployments 
              with Docker, infrastructure as code with Terraform, and cloud platforms like AWS. 
              Experienced in developing secure, high-performance applications using Node.js, 
              TypeScript, and modern database solutions. Passionate about creating robust 
              systems that prioritize security, scalability, and performance across 
              fullstack applications and decentralized systems.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
