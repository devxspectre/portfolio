import { motion } from "framer-motion";

const images = Array.from({ length: 22 }, (_, i) => `${i + 1}.svg`);
const duplicatedImages = [...images, ...images];

const TechStack = () => {
  return (
    <div className="py-12">
      {/* Heading */}
      <div className="flex justify-center mb-8 px-4">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 tracking-wide"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Tech Stack
        </h2>
      </div>

      {/* Infinite Carousel */}
      <div className="flex justify-center">
        <div className="max-w-6xl w-full overflow-hidden py-4">
          <motion.div
            className="flex w-max gap-6 sm:gap-8 md:gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {duplicatedImages.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`tech-${index}`}
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain filter-none"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
