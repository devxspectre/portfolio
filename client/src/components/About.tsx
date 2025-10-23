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
              className="text-gray-200 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Experienced fullstack developer with expertise in React,
              TypeScript, and blockchain technologies. Specialized in building
              scalable decentralized applications and fullstack solutions with
              a focus on security, performance, and user experience.
              Passionate about creating innovative systems that push the
              boundaries of web development and blockchain adoption.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
