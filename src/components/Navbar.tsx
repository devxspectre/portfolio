import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const items = ["Home", "Projects", "Contact"];
  const [showCompact, setShowCompact] = useState(false);

  const handleClick = (item: string) => {
    const targetId = item.toLowerCase(); // "Home" -> "home", "Projects" -> "projects"
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowCompact(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Full Navbar at top */}
      <AnimatePresence>
        {!showCompact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-700 to-violet-500 shadow-lg backdrop-blur-md"
          >
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-5 text-white">
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest"
                style={{ fontFamily: "Bitcount Grid Double" }}
              >
                S
              </div>
              <div className="flex gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg font-mono">
                {items.map((item, index) => (
                  <button
                    type="button"
                    key={index}
                    className="cursor-pointer hover:underline underline-offset-4 px-2 sm:px-3 md:px-4 py-1 rounded transition "
                    onClick={() => handleClick(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compact Floating Navbar */}
      <AnimatePresence>
        {showCompact && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.9, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-indigo-700 to-violet-500 rounded-full px-6 sm:px-8 py-3 shadow-xl backdrop-blur-md border border-violet-400/30"
          >
            <div className="flex gap-4 sm:gap-6 text-white font-mono text-xs sm:text-sm md:text-base">
              {items.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  className="cursor-pointer px-2 sm:px-3 md:px-4 py-1 rounded hover:underline underline-offset-8 transition"
                  onClick={() => handleClick(item)}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
