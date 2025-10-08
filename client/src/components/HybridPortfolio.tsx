import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTwitter, FaDiscord, FaEnvelope, FaDownload, FaCode, FaProjectDiagram, FaUser, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface Command {
  command: string;
  output: React.ReactNode | string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  duration?: string;
  achievements?: string[];
}

const HybridPortfolio = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'projects' | 'skills' | 'experience' | 'contact' | 'socials'>('home');
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showCommandOutput, setShowCommandOutput] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<JSX.Element | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Sample projects data
  const projects: Project[] = [
    {
      title: "Payzee",
      description: "A comprehensive payment gateway solution that enables businesses to accept cryptocurrency payments seamlessly. It provides real-time payment processing, secure transaction handling, and instant notifications. Currently supporting Solana blockchain with plans to expand to other major blockchains in the future.",
      technologies: ["React.js", "Solana/web3.js", "Node.js", "Postgres", "Express"],
      githubUrl: "https://github.com/spectrecrafts/Payzee",
      demoUrl: "https://payzee-frontend.vercel.app/",
      duration: "Jan 2024 - Present",
      achievements: [
        "Implemented secure payment processing with real-time notifications",
        "Integrated Solana blockchain for cryptocurrency transactions"
      ]
    },
    {
      title: "Book-Review",
      description: "A community-driven platform where readers can share their thoughts, rate books, and explore reviews from fellow readers. Users can post detailed reviews, give star ratings, and browse a wide range of genres. Your next favorite book is just a review away!",
      technologies: ["React.js", "Vite", "TypeScript", "MongoDB", "Node.js", "Express"],
      githubUrl: "https://github.com/spectrecrafts/Book-review",
      demoUrl: "https://book-review-sourav.vercel.app/",
      duration: "Oct 2023 - Dec 2023",
      achievements: [
        "Created a full-stack application with authentication",
        "Implemented CRUD operations for book reviews"
      ]
    },
    {
      title: "InSecure",
      description: "A secure and user-friendly solution for managing and safeguarding private keys, ensuring complete control over your digital assets. With built-in two-factor authentication (2FA), users benefit from an added layer of security, protecting against unauthorized access.",
      technologies: ["React.js", "Express", "Prisma", "Postgres", "Solana", "Typescript", "Node.js"],
      githubUrl: "https://github.com/spectrecrafts/InSecure",
      demoUrl: "https://in-secure.vercel.app/",
      duration: "Feb 2024 - May 2024",
      achievements: [
        "Developed secure key management system with 2FA",
        "Implemented blockchain integration for digital assets"
      ]
    },
    {
      title: "BlogX",
      description: "A modern space for writers, thinkers, and storytellers to share their ideas, experiences, and expertise with a global audience. It offers a clean, distraction-free writing environment and powerful publishing tools.",
      technologies: ["React.js", "Hono", "TypeScript", "Prisma", "Postgres", "Cloudflare"],
      githubUrl: "https://github.com/spectrecrafts/medium-clone",
      duration: "Jun 2024 - Present",
      achievements: [
        "Built a publishing platform with distraction-free writing",
        "Implemented real-time content saving and publishing tools"
      ]
    }
  ];

  // Navigation commands
  const navCommands: Record<string, () => void> = {
    'about': () => setActiveSection('about'),
    'projects': () => setActiveSection('projects'),
    'skills': () => setActiveSection('skills'),
    'experience': () => setActiveSection('experience'),
    'contact': () => setActiveSection('contact'),
    'socials': () => setActiveSection('socials'),
    'help': () => {
      setTerminalOutput(
        <div className="space-y-2">
          <p className="text-cyan-400">Available commands:</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div><span className="text-green-400">help</span> - Show this help message</div>
            <div><span className="text-green-400">about</span> - Learn more about me</div>
            <div><span className="text-green-400">projects</span> - List my projects</div>
            <div><span className="text-green-400">skills</span> - Show my technical skills</div>
            <div><span className="text-green-400">experience</span> - Show my work experience</div>
            <div><span className="text-green-400">contact</span> - Get my contact information</div>
            <div><span className="text-green-400">socials</span> - Show my social links</div>
          </div>
        </div>
      );
      setShowCommandOutput(true);
    },
    'whoami': () => {
      setTerminalOutput(
        <div className="space-y-2">
          <p className="text-cyan-400 font-bold">SOURAV KUMAR</p>
          <p className="text-gray-300"><span className="text-green-400">Role:</span> Fullstack Developer & Open Source Enthusiast</p>
          <p className="text-gray-300"><span className="text-green-400">Location:</span> India</p>
          <p className="text-gray-300"><span className="text-green-400">Status:</span> Available for opportunities</p>
        </div>
      );
      setShowCommandOutput(true);
    }
  };

  const executeCommand = (cmd: string) => {
    cmd = cmd.trim().toLowerCase();
    
    if (navCommands.hasOwnProperty(cmd)) {
      (navCommands as any)[cmd]();
      setTerminalOutput(null);
      setShowCommandOutput(false);
      return;
    }
    
    setTerminalOutput(
      <div className="space-y-2">
        <p className="text-red-400">Command '{cmd}' not found.</p>
        <p className="text-gray-400">Type 'help' to see available commands.</p>
      </div>
    );
    setShowCommandOutput(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    executeCommand(input);
    setCommandHistory(prev => [...prev, { command: input, output: terminalOutput || '' }]);
    setInput('');
  };

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory, showCommandOutput]);

  // Section animations
  const sectionVariants = {
    hidden: { opacity: 0, x: 50, rotateY: 90 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: -50, 
      rotateY: -90,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-green-300 font-mono overflow-hidden">
      {/* Header with navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="ml-3 text-sm text-gray-400">sourav@portfolio:~$</div>
          </div>
          
          <div className="hidden md:flex space-x-6">
            {(['home', 'about', 'projects', 'skills', 'experience', 'contact'] as const).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-3 py-1 rounded transition-all duration-300 ${
                  activeSection === section 
                    ? 'bg-cyan-900/50 text-cyan-400 border border-cyan-700' 
                    : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => setShowTerminal(!showTerminal)}
            className="px-3 py-1 bg-gray-800 rounded text-sm hover:bg-gray-700 transition"
          >
            {showTerminal ? 'Close Terminal' : 'Open Terminal'}
          </button>
        </div>
      </div>

      <div className="pt-16 pb-8">
        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto px-4 mt-8">
          {/* Home Section */}
          <AnimatePresence mode="wait">
            {activeSection === 'home' && (
              <motion.div
                key="home"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="min-h-[80vh] flex flex-col justify-center"
              >
                <div className="text-center space-y-6">
                  <motion.h1 
                    className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4"
                    variants={itemVariants}
                  >
                    SOURAV KUMAR
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-300 mb-6"
                    variants={itemVariants}
                  >
                    Fullstack Developer & Open Source Enthusiast
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-400 max-w-2xl mx-auto mb-8"
                    variants={itemVariants}
                  >
                    Building efficient and user-friendly web applications with modern technologies. 
                    Passionate about creating solutions that push the boundaries of what's possible.
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap justify-center gap-4"
                    variants={itemVariants}
                  >
                    <button 
                      onClick={() => setActiveSection('projects')}
                      className="px-6 py-3 bg-cyan-900/50 border border-cyan-700 rounded-lg text-cyan-400 hover:bg-cyan-800/50 transition-all duration-300 transform hover:scale-105"
                    >
                      View My Work
                    </button>
                    
                    <button 
                      onClick={() => setActiveSection('contact')}
                      className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get In Touch
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* About Section */}
          <AnimatePresence mode="wait">
            {activeSection === 'about' && (
              <motion.div
                key="about"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="py-8"
              >
                <motion.h2 
                  className="text-3xl font-bold text-cyan-400 mb-8 flex items-center"
                  variants={itemVariants}
                >
                  <FaUser className="mr-3" /> About Me
                </motion.h2>
                
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 items-center"
                  variants={itemVariants}
                >
                  <div>
                    <p className="text-gray-300 mb-4">
                      Hello! I'm Sourav, a passionate fullstack developer with expertise in creating efficient and user-friendly web applications.
                    </p>
                    <p className="text-gray-300 mb-4">
                      I specialize in modern web technologies and have experience building scalable applications with various tech stacks.
                    </p>
                    <p className="text-gray-300 mb-4">
                      My approach combines technical excellence with user-centric design to create solutions that are both powerful and intuitive.
                    </p>
                    <p className="text-gray-300">
                      I'm always eager to learn new technologies and tackle challenging problems that push the boundaries of what's possible.
                    </p>
                  </div>
                  
                  <motion.div 
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-green-400 mb-4">Quick Facts</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Fullstack Developer
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Open Source Enthusiast
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Problem Solver
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Continuous Learner
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Projects Section */}
          <AnimatePresence mode="wait">
            {activeSection === 'projects' && (
              <motion.div
                key="projects"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="py-8"
              >
                <motion.h2 
                  className="text-3xl font-bold text-cyan-400 mb-8 flex items-center"
                  variants={itemVariants}
                >
                  <FaProjectDiagram className="mr-3" /> My Projects
                </motion.h2>
                
                <motion.div 
                  className="space-y-8"
                  variants={itemVariants}
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                          {project.duration && (
                            <p className="text-gray-400 text-sm">{project.duration}</p>
                          )}
                        </div>
                        
                        <div className="flex space-x-3 mt-2 md:mt-0">
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition"
                            >
                              <FaGithub size={20} />
                            </a>
                          )}
                          {project.demoUrl && (
                            <a 
                              href={project.demoUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-cyan-400 transition"
                            >
                              <FaCode size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="text-xs bg-gray-700 px-3 py-1 rounded-full text-cyan-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {project.achievements && (
                        <div>
                          <h4 className="font-semibold text-green-400 mb-2">Key Achievements:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {project.achievements.map((achievement, i) => (
                              <li key={i} className="text-gray-300 text-sm">{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skills Section */}
          <AnimatePresence mode="wait">
            {activeSection === 'skills' && (
              <motion.div
                key="skills"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="py-8"
              >
                <motion.h2 
                  className="text-3xl font-bold text-cyan-400 mb-8 flex items-center"
                  variants={itemVariants}
                >
                  <FaCode className="mr-3" /> Technical Skills
                </motion.h2>
                
                <motion.div 
                  className="grid md:grid-cols-3 gap-6"
                  variants={itemVariants}
                >
                  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-green-400 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Frontend
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        React.js
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        TypeScript
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        Next.js
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        Tailwind CSS
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        Redux
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-green-400 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                      </svg>
                      Backend
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        Node.js
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        Express
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        RESTful APIs
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        GraphQL
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        Prisma
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-green-400 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      Databases
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        PostgreSQL
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        MongoDB
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        Redis
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        Supabase
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Experience Section */}
          <AnimatePresence mode="wait">
            {activeSection === 'experience' && (
              <motion.div
                key="experience"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="py-8"
              >
                <motion.h2 
                  className="text-3xl font-bold text-cyan-400 mb-8 flex items-center"
                  variants={itemVariants}
                >
                  <FaBriefcase className="mr-3" /> Work Experience
                </motion.h2>
                
                <motion.div 
                  className="space-y-6"
                  variants={itemVariants}
                >
                  <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">Fullstack Developer</h3>
                      <span className="text-gray-400 text-sm">Jan 2024 - Present</span>
                    </div>
                    <p className="text-gray-300">Building and maintaining fullstack web applications with React, Node.js, and various databases.</p>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">Frontend Developer Intern</h3>
                      <span className="text-gray-400 text-sm">Oct 2023 - Dec 2023</span>
                    </div>
                    <p className="text-gray-300">Developed user interfaces with React and implemented responsive designs.</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact Section */}
          <AnimatePresence mode="wait">
            {activeSection === 'contact' && (
              <motion.div
                key="contact"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="py-8"
              >
                <motion.h2 
                  className="text-3xl font-bold text-cyan-400 mb-8 flex items-center"
                  variants={itemVariants}
                >
                  <FaEnvelope className="mr-3" /> Contact Me
                </motion.h2>
                
                <motion.div 
                  className="grid md:grid-cols-2 gap-8"
                  variants={itemVariants}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
                    <p className="text-gray-300 mb-6">
                      Have a project in mind or want to discuss potential opportunities? 
                      Feel free to reach out!
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <FaEnvelope className="text-cyan-400 mr-3" />
                        <span className="text-gray-300">souravkumarcse2023@gmail.com</span>
                      </div>
                      
                      <a 
                        href="https://drive.google.com/file/d/1_c3aNWxasSW9-129UojbFSIKZdn0RyS-/view?usp=sharing" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition"
                      >
                        <FaDownload className="mr-3" />
                        <span>Download Resume</span>
                      </a>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4">Status</h3>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400">Available for opportunities</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social Links Section */}
          <AnimatePresence mode="wait">
            {activeSection === 'socials' && (
              <motion.div
                key="socials"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="py-8"
              >
                <motion.h2 
                  className="text-3xl font-bold text-cyan-400 mb-8 flex items-center"
                  variants={itemVariants}
                >
                  <FaGraduationCap className="mr-3" /> Connect With Me
                </motion.h2>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  variants={itemVariants}
                >
                  <a 
                    href="https://github.com/spectrecrafts" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 flex flex-col items-center text-center group"
                  >
                    <FaGithub className="text-3xl text-white mb-3 group-hover:text-cyan-400 transition" />
                    <h3 className="font-semibold text-white mb-2">GitHub</h3>
                    <p className="text-gray-400 text-sm">spectrecrafts</p>
                  </a>
                  
                  <a 
                    href="https://x.com/_spectretwt" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 flex flex-col items-center text-center group"
                  >
                    <FaTwitter className="text-3xl text-white mb-3 group-hover:text-cyan-400 transition" />
                    <h3 className="font-semibold text-white mb-2">Twitter</h3>
                    <p className="text-gray-400 text-sm">@_spectretwt</p>
                  </a>
                  
                  <a 
                    href="https://discord.com/users/Sourav_007_" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 flex flex-col items-center text-center group"
                  >
                    <FaDiscord className="text-3xl text-white mb-3 group-hover:text-cyan-400 transition" />
                    <h3 className="font-semibold text-white mb-2">Discord</h3>
                    <p className="text-gray-400 text-sm">Sourav_007_</p>
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CLI Terminal Panel - Slide in from bottom */}
        <AnimatePresence>
          {showTerminal && (
            <>
              <motion.div 
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowTerminal(false)}
              />
              
              <motion.div
                className="fixed bottom-0 left-0 right-0 h-1/2 bg-gray-900 border-t border-gray-700 z-50 overflow-hidden"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex space-x-2 mr-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-400">sourav@portfolio:~$ terminal</div>
                  </div>
                  <button 
                    onClick={() => setShowTerminal(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    Close
                  </button>
                </div>
                
                <div 
                  ref={terminalRef}
                  className="h-[calc(100%-100px)] overflow-y-auto p-4 space-y-3 font-mono"
                >
                  <div className="text-cyan-400 font-bold">[sourav@portfolio ~]$ <span className="text-white">help</span></div>
                  <div className="text-gray-200">
                    <div className="text-cyan-400">Available commands:</div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div><span className="text-green-400">help</span> - Show this help message</div>
                      <div><span className="text-green-400">about</span> - Learn more about me</div>
                      <div><span className="text-green-400">projects</span> - List my projects</div>
                      <div><span className="text-green-400">skills</span> - Show my technical skills</div>
                      <div><span className="text-green-400">experience</span> - Show my work experience</div>
                      <div><span className="text-green-400">contact</span> - Get my contact information</div>
                    </div>
                  </div>
                  
                  {commandHistory.map((cmd, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-cyan-400 font-bold">[sourav@portfolio ~]$ <span className="text-white">{cmd.command}</span></div>
                      {cmd.output && (
                        <div className="text-gray-200">{cmd.output}</div>
                      )}
                    </div>
                  ))}
                  
                  {showCommandOutput && terminalOutput && (
                    <div className="text-gray-200">{terminalOutput}</div>
                  )}
                </div>
                
                <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 flex">
                  <span className="text-cyan-400 mr-2">[sourav@portfolio ~]$</span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-white caret-green-500 font-mono"
                    placeholder="Type a command (or click navigation above)..."
                    autoFocus
                  />
                  <button type="submit" className="ml-2 text-gray-400 hover:text-white">
                    ↵
                  </button>
                </form>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Sourav Kumar. All rights reserved.</p>
        <p className="mt-1">Built with React, TypeScript, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default HybridPortfolio;