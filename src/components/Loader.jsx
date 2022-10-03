import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full bg-light dark:bg-dark-100">
      <AnimatePresence mode="wait">
        <motion.div
          className="p-2 rounded-full bg-primary"
          animate={{
            opacity: [1, 0.5, 1, 0.5, 1],
            scale: [1.5, 0.5, 1.5, 0.5, 1.5],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Loader;
