import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="mb-12">
      <div className="bg-gray-800 p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-200">
              <img 
                src="/sourav.png" 
                alt="Sourav" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Personal Info */}
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Sourav</h2>
                <p className="text-xl text-gray-300 mb-4">Developer & Blockchain Engineer</p>
              </div>
              <div className="mt-4 md:mt-0 text-sm text-gray-400">
                <div className="flex items-center mb-1">
                  <FaMapMarkerAlt className="mr-2 text-gray-500" />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center mb-1">
                  <FaEnvelope className="mr-2 text-gray-500" />
                  <span>sourav@example.com</span>
                </div>
                <div className="flex items-center mb-1">
                  <FaPhone className="mr-2 text-gray-500" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="mr-2 text-gray-500" />
                  <span className="mr-4">
                    <a href="https://linkedin.com/in/sourav" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      linkedin.com/in/sourav
                    </a>
                  </span>
                  <FaGithub className="mr-2 text-gray-500" />
                  <span>
                    <a href="https://github.com/devxspectre" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      github.com/devxspectre
                    </a>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white mb-3 border-b pb-2">About Me</h3>
              <p className="text-gray-300 leading-relaxed">
                Experienced fullstack developer with 3+ years of expertise in React, TypeScript, and blockchain technologies. 
                Specialized in building scalable decentralized applications and fullstack solutions with a focus on security, 
                performance, and user experience. Passionate about creating innovative systems that push the boundaries of 
                web development and blockchain adoption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;