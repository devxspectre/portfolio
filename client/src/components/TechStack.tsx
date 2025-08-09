import { motion } from "framer-motion";

const images = Array.from({ length: 22 }, (_, i) => `${i + 1}.svg`);
const duplicatedImages = [...images, ...images];

const TechStack = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg  py-8 ">
      {/* Heading */}
      <div className="flex justify-center mb-8 px-4 ">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-wide"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Tech Stack
        </h2>
      </div>

      {/* Infinite Carousel */}
      <div className="flex justify-center ">
        <div className="max-w-8xl w-full overflow-hidden py-4  ">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {duplicatedImages.map((imgSrc, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-20 sm:w-24 md:w-28 lg:w-32 px-4"
              >
                <img
                  src={imgSrc}
                  alt={`tech-${index}`}
                  className="h-8 sm:h-10 md:h-12  object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
