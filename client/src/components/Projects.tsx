import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

interface Project {
  title: string;
  description: string;
  imgSrc: string;
  githubUrl: string;
  liveUrl?: string;
  techStack: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Book-Review",
      description:
        "A community-driven platform where readers can share their thoughts, rate books, and explore reviews from fellow readers. Users can post detailed reviews, give star ratings, and browse a wide range of genres. Your next favorite book is just a review away!",
      imgSrc: "book-review.png",
      githubUrl: "https://github.com/Sourav6971/Book-review",
      liveUrl: "https://book-review-sourav.vercel.app/",
      techStack: [
        "React.js",
        "Vite",
        "TypeScript",
        "MongoDB",
        "Node.js",
        "Express",
      ],
    },
    {
      title: "Payzee",
      description:
        "A modern, user-friendly digital payments platform designed to make sending, receiving, and managing money seamless and secure. Built with a focus on speed, simplicity, and transparency, Payzee enables users to handle transactions effortlessly.",
      imgSrc: "payzee.png",
      githubUrl: "https://github.com/Sourav6971/Payzee",
      liveUrl: "https://payzee-frontend.vercel.app/",
      techStack: [
        "React.js",
        "Solana/web3.js",
        "Node.js",
        "MongoDB",
        "Express",
      ],
    },
    {
      title: "SolanaX",
      description:
        "SolanaX is a powerful token creation and minting platform built on the Solana blockchain, designed to simplify the process of launching your own digital assets. Whether you're building a project, launching a community coin, or exploring Web3, SolanaX offers secure, scalable tools to bring your ideas to life.",
      imgSrc: "solana.png",
      githubUrl: "https://github.com/Sourav6971/solanaX",
      liveUrl: "https://solana-x-kappa.vercel.app/",
      techStack: [
        "Solana/web3.js",
        "TypeScript",
        "React",
        "Node",
        "Prisma",
        "Postgres",
      ],
    },
    {
      title: "InSecure (In progress)",
      description:
        "A secure and user-friendly solution for managing and safeguarding private keys, ensuring complete control over your digital assets. With built-in two-factor authentication (2FA), users benefit from an added layer of security, protecting against unauthorized access.",
      imgSrc: "in-secure.png",
      githubUrl: "https://github.com/Sourav6971/InSecure",
      liveUrl: "https://in-secure.vercel.app/",
      techStack: [
        "React.js",
        "Express",
        "Prisma",
        "Postgres",
        "Solana",
        "Typescript",
        "Node.js",
      ],
    },
    {
      title: "BlogX (In progress)",
      description:
        "A modern space for writers, thinkers, and storytellers to share their ideas, experiences, and expertise with a global audience. It offers a clean, distraction-free writing environment and powerful publishing tools.",
      imgSrc: "blog-x.png",
      githubUrl: "https://github.com/Sourav6971/medium-clone",
      liveUrl: "",
      techStack: [
        "React.js",
        "Hono",
        "TypeScript",
        "Prisma",
        "Postgres",
        "Cloudflare",
      ],
    },
  ];

  return (
    <div
      className="py-20 bg-gradient-to-b from-indigo-950 via-violet-950 to-slate-900 min-h-screen"
      id="projects"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex flex-col items-center gap-12"
      >
        {projects.map((project, index) => (
          <ProjectContainer project={project} key={index} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

function ProjectContainer({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        y: -6,
        boxShadow: "0px 12px 40px rgba(139, 92, 246, 0.25)",
      }}
      className="max-w-6xl w-[90%] md:w-[85%] lg:w-[80%] p-6 md:p-10 rounded-2xl bg-white/5 backdrop-blur-2xl shadow-2xl border border-violet-700/40 hover:border-violet-400 transition"
    >
      <div
        className={`flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
          isEven ? "" : "md:flex-row-reverse"
        }`}
      >
        {/* Text */}
        <div className="w-full">
          <h2 className="text-2xl font-extrabold text-violet-100 mb-3 relative w-fit">
            {project.title}
            <span className="block h-1 w-20 md:w-24 bg-gradient-to-r from-violet-500 via-indigo-400 to-blue-400 mt-2 rounded-full"></span>
          </h2>
          <p className="text-violet-200 leading-relaxed mb-5 text-base font-light">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3 mt-4">
            {project.techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-violet-800/30 text-violet-200 rounded-full text-xs md:text-sm border border-violet-500/20 transition"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Image + Links */}
        <div className="flex flex-col items-center gap-4 w-full">
          <motion.img
            src={project.imgSrc}
            alt={project.title}
            className="rounded-2xl shadow-lg border border-violet-700/40 w-full max-w-xs sm:max-w-sm md:max-w-md hover:shadow-violet-500/40 transition object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
          <div className="flex gap-6 text-violet-200 text-xl">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-400 transition"
              >
                <FaGithub />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-400 transition"
              >
                <IoIosLink />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
