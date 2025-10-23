import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20 digital-font">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 digital-font">
                <span className="gradient-text mono-font">Sourav</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6 mono-font">
                Senior Developer & Blockchain Engineer
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-lg mono-font">
                Crafting exceptional digital experiences through clean code and innovative solutions. 
                Specialized in building scalable decentralized applications and fullstack solutions.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
                <motion.a
                  href="#projects"
                  className="btn-primary inline-block mono-font"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-600 rounded-md text-gray-300 hover:text-white transition-colors duration-300 mono-font"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me
                </motion.a>
              </div>

              <div className="flex space-x-4 sm:space-x-6">
                <motion.a
                  href="https://github.com/devxspectre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
                  whileHover={{ y: -3 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/sourav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
                  whileHover={{ y: -3 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="mailto:mailsourav014@gmail.com"
                  className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
                  whileHover={{ y: -3 }}
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-700 relative">
                <img
                  src="/sourav.png"
                  alt="Sourav"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full border-2 border-gray-500 opacity-30"></div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 border-2 border-gray-600 rounded-full opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-full opacity-30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;