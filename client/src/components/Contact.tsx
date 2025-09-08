import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [feedback, setFeedback] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name || !email || !feedback) return;
		setSubmitted(true);
		console.log({ name, email, feedback });
		setName("");
		setEmail("");
		setFeedback("");
		setTimeout(() => setSubmitted(false), 2500);
	};

	return (
		<div
			className="flex justify-center items-center min-h-screen px-4"
			id="contact"
		>
			<div className="backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-lg md:max-w-xl border border-slate-400">
				<h2
					className="text-3xl font-extrabold text-slate-300 mb-8 text-center tracking-wide"
					style={{ fontFamily: "Space Grotesk, sans-serif" }}
				>
					Let's Connect
				</h2>

				<form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
					<input
						type="text"
						placeholder="Your Name"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="bg-transparent border border-white/40 placeholder-slate-500 text-slate-300 rounded-xl p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-white w-full"
					/>
					<input
						type="email"
						placeholder="Your Email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="bg-transparent border border-white/40 placeholder-slate-500 text-slate-300 rounded-xl p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-white w-full"
					/>
					<textarea
						placeholder="Your Feedback"
						required
						value={feedback}
						onChange={(e) => setFeedback(e.target.value)}
						rows={4}
						className="bg-transparent border border-white/40 placeholder-slate-500 text-slate-300 rounded-xl p-3 sm:p-4 pb-6 focus:outline-none focus:ring-2 focus:ring-white resize-none w-full"
					></textarea>
					<motion.button
						whileTap={{ scale: 0.97 }}
						type="submit"
						className="border border-white text-slate-300 rounded-xl py-3 mt-1 font-semibold shadow-md hover:shadow-white/30 transition text-base sm:text-lg cursor-pointer"
					>
						Submit Feedback
					</motion.button>
				</form>

				{/* Social Icons */}
				<div className="flex justify-center gap-8 sm:gap-10 mt-8 sm:mt-10 text-2xl sm:text-3xl text-slate-300">
					<SocialIcon
						icon={<FaGithub />}
						url="https://github.com/spectrecrafts"
					/>
					<SocialIcon
						icon={<FaDiscord />}
						url="https://discord.com/users/Sourav_007_"
					/>
					<SocialIcon icon={<FaTwitter />} url="https://x.com/_Sourav014" />
				</div>

				{/* Animated Feedback Alert */}
				<AnimatePresence>
					{submitted && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.4 }}
							className="fixed bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-300 text-black px-6 py-3 rounded-xl shadow-lg backdrop-blur-md text-center text-sm sm:text-base z-50"
						>
							Feedback sent successfully!
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Contact;

interface SocialIconProps {
	icon: React.ReactNode;
	url: string;
}

function SocialIcon({ icon, url }: SocialIconProps) {
	return (
		<motion.a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			whileHover={{ scale: 1.2, color: "#ccc" }}
			whileTap={{ scale: 0.95 }}
			className="transition"
		>
			{icon}
		</motion.a>
	);
}
