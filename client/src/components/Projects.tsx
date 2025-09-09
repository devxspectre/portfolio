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
			title: "Payzee",
			description:
				"Payzee is a comprehensive payment gateway solution that enables businesses to accept cryptocurrency payments seamlessly. It provides real-time payment processing, secure transaction handling, and instant notifications. Currently supporting Solana blockchain with plans to expand to other major blockchains in the future.",
			imgSrc: "payzee.png",
			githubUrl: "https://github.com/spectrecrafts/Payzee",
			liveUrl: "https://payzee-frontend.vercel.app/",
			techStack: [
				"React.js",
				"Solana/web3.js",
				"Node.js",
				"Postgres",
				"Express",
			],
		},
		{
			title: "Book-Review",
			description:
				"A community-driven platform where readers can share their thoughts, rate books, and explore reviews from fellow readers. Users can post detailed reviews, give star ratings, and browse a wide range of genres. Your next favorite book is just a review away!",
			imgSrc: "book-review.png",
			githubUrl: "https://github.com/spectrecrafts/Book-review",
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
			title: "InSecure (In progress)",
			description:
				"A secure and user-friendly solution for managing and safeguarding private keys, ensuring complete control over your digital assets. With built-in two-factor authentication (2FA), users benefit from an added layer of security, protecting against unauthorized access.",
			imgSrc: "in-secure.png",
			githubUrl: "https://github.com/spectrecrafts/InSecure",
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
			githubUrl: "https://github.com/spectrecrafts/medium-clone",
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
		<div className="py-20  min-h-screen" id="projects">
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
			}}
			className="max-w-6xl w-[90%] md:w-[85%] lg:w-[80%] p-6 md:p-10 rounded-2xl bg-white/5 backdrop-blur-2xl "
		>
			<div
				className={`flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
					isEven ? "" : "md:flex-row-reverse"
				}`}
			>
				{/* Text */}
				<div className="w-full">
					<h2 className="text-2xl font-extrabold text-slate-100 mb-3 relative w-fit">
						{project.title}
						<span className="block h-1 w-20 md:w-24 "></span>
					</h2>
					<p className="text-slate-100 leading-relaxed mb-5 text-base font-light">
						{project.description}
					</p>
					<div className="flex flex-wrap gap-2 md:gap-3 mt-4">
						{project.techStack.map((tech, idx) => (
							<span
								key={idx}
								className="px-3 py-1 border-slate-100 border text-slate-200 rounded-full text-xs md:text-sm "
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Image + Links */}
				<div className="flex flex-col items-center gap-4 w-full">
					<motion.img
						src={project.imgSrc}
						alt={project.title}
						className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md  object-cover"
						whileHover={{ scale: 1.02 }}
						transition={{ type: "spring", stiffness: 150 }}
					/>
					<div className="flex gap-6 text-slate-200 text-xl">
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-slate-400 transition"
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
