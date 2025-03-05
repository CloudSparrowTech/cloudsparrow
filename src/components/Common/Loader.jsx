import React from "react";
import { motion } from "framer-motion";

// Animation variants for horizontal text movement with fade
const leftVariants = {
  initial: { x: "100vw", opacity: 0 },
  animate: {
    x: "-100vw",
    opacity: [0, 1, 1, 0], // Fade in and out during movement
    transition: {
      x: { duration: 3, ease: "linear", repeat: Infinity },
      opacity: { duration: 3, times: [0, 0.2, 0.8, 1], repeat: Infinity },
    },
  },
};

const rightVariants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: {
    x: "100vw",
    opacity: [0, 1, 1, 0], // Fade in and out during movement
    transition: {
      x: { duration: 3, ease: "linear", repeat: Infinity },
      opacity: { duration: 3, times: [0, 0.2, 0.8, 1], repeat: Infinity },
    },
  },
};

// Fade effect for the entire loader
const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: "easeIn" } },
  exit: { opacity: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Loader = ({ text }) => {
  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center overflow-hidden"
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Top Section - Text Moves Left */}
      <div className="h-[33vh] flex flex-col justify-center items-center">
        <motion.div
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-200"
          variants={leftVariants}
          initial="initial"
          animate="animate"
        >
          Cloud Sparrow
        </motion.div>
      </div>

      {/* Middle Section - Text Moves Right */}
      <div className="h-[33vh] bg-gray-800/50 flex flex-col justify-center items-center px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-white"
          variants={rightVariants}
          initial="initial"
          animate="animate"
        >
          {text}
        </motion.h1>
      </div>

      {/* Bottom Section - Text Moves Left */}
      <div className="h-[33vh] flex flex-col justify-center items-center">
        <motion.div
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-200"
          variants={leftVariants}
          initial="initial"
          animate="animate"
        >
          Cloud Sparrow
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
