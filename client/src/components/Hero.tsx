import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1fyPt43-Sk-IWz0L3tnMJCwGVp4mMSFW9/view?usp=sharing",
      "_blank"
    );
  };

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="flex justify-center items-center pt-28 md:pt-32 px-4 bg-gradient-to-b min-h-screen"
      id="home"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Left: Heading + Description */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left text-slate-200">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <TypeAnimation
              sequence={["Hello, I am Sourav...", 2000]}
              speed={20}
              wrapper="span"
              cursor={true}
              repeat={0}
            />
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 sm:mb-8 max-w-xl text-slate-300 px-2">
            A fullstack developer with experience in building efficient and
            user-friendly web applications using a variety of technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center md:justify-start mt-2">
            <motion.button
              onClick={handleContact}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-base sm:text-lg font-medium shadow hover:shadow-cyan-500/30 transition w-full sm:w-auto"
            >
              Say Hello
            </motion.button>
            <motion.button
              onClick={handleResume}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-3 rounded-md bg-slate-200 text-black text-base sm:text-lg font-medium flex items-center justify-center shadow hover:shadow-slate-300/30 transition w-full sm:w-auto"
            >
              Resume
              <img
                src="download.svg"
                className="h-5 sm:h-6 ml-2"
                alt="Download"
              />
            </motion.button>
          </div>
        </div>

        {/* Right: Image + Socials */}
        <div className="flex flex-col items-center gap-6">
          <motion.img
            src="sourav.png"
            alt="Hero"
            className="rounded-full shadow-lg shadow-slate-950/40 border border-slate-600 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover hover:shadow-cyan-500/40 transition"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <div className="flex gap-6 sm:gap-8 text-2xl sm:text-3xl text-slate-300">
            <SocialIcon
              icon={<FaGithub />}
              url="https://github.com/Sourav6971"
              color="#f5f5f5"
            />
            <SocialIcon
              icon={<FaDiscord />}
              url="https://discord.com/users/Sourav_007_"
              color="#7289da"
            />
            <SocialIcon
              icon={<FaTwitter />}
              url="https://x.com/_Sourav014"
              color="#1DA1F2"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

interface SocialIconProps {
  icon: React.ReactNode;
  url: string;
  color: string;
}

function SocialIcon({ icon, url, color }: SocialIconProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.25, color: color }}
      whileTap={{ scale: 0.95 }}
      className="transition"
    >
      {icon}
    </motion.a>
  );
}
