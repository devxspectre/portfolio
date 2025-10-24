import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.section
      id="contact"
      className="mb-12 digital-font"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div>
        <h2 className="section-header text-3xl font-bold text-white mb-8 digital-font">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4 digital-font">
              Get in Touch
            </h3>
            <p className="text-gray-200 mb-8 text-lg mono-font">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>

            <div className="space-y-4">
              <div className="flex items-center p-3 rounded-lg bg-gray-800/20 hover:bg-gray-800/40 transition-colors duration-300">
                <FaMapMarkerAlt className="mr-4 text-gray-300 text-xl" />
                <span className="text-gray-200 mono-font">
                  Bangalore, India
                </span>
              </div>
              <div className="flex items-center p-3 rounded-lg bg-gray-800/20 hover:bg-gray-800/40 transition-colors duration-300">
                <FaEnvelope className="mr-4 text-gray-300 text-xl" />
                <span className="text-gray-200 mono-font">
                  mailsourav014@gmail.com
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4 digital-font">
              Connect with Me
            </h3>
            <p className="text-gray-200 mb-8 text-lg mono-font">
              Check out my profiles on these platforms.
            </p>

            <div className="space-y-4">
              <a
                href="https://linkedin.com/in/sourav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg bg-gray-800/20 hover:bg-gray-800/40 transition-colors duration-300 block"
              >
                <FaLinkedin className="mr-4 text-gray-300 text-xl" />
                <span className="text-gray-200 mono-font">
                  linkedin.com/in/sourav
                </span>
              </a>
              <a
                href="https://github.com/devxspectre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg bg-gray-800/20 hover:bg-gray-800/40 transition-colors duration-300 block"
              >
                <FaGithub className="mr-4 text-gray-300 text-xl" />
                <span className="text-gray-200 mono-font">
                  github.com/devxspectre
                </span>
              </a>
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-semibold text-white mb-4 digital-font">
                Preferred Contact Method
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800/30 text-gray-200 rounded-full text-sm font-medium border border-gray-600 mono-font">
                  Email
                </span>
                <span className="px-4 py-2 bg-gray-800/30 text-gray-200 rounded-full text-sm font-medium border border-gray-600 mono-font">
                  LinkedIn
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;
