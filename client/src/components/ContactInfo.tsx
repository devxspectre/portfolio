import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section id="contact" className="mb-12">
      <div className="bg-gray-800 p-8">
        <h2 className="text-2xl font-bold text-white mb-6 border-b pb-2">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-6">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-gray-500" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-gray-500" />
                <span>sourav@example.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-gray-500" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Connect with Me</h3>
            <p className="text-gray-300 mb-6">
              Check out my profiles on these platforms.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <FaLinkedin className="mr-3 text-gray-500" />
                <a 
                  href="https://linkedin.com/in/sourav" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline"
                >
                  linkedin.com/in/sourav
                </a>
              </div>
              <div className="flex items-center">
                <FaGithub className="mr-3 text-gray-500" />
                <a 
                  href="https://github.com/devxspectre" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline"
                >
                  github.com/devxspectre
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-white mb-2">Preferred Contact Method</h4>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">Email</span>
                <span className="px-3 py-1 bg-green-900 text-green-200 rounded-full text-sm">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;