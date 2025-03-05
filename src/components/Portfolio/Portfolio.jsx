import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-[radial-gradient(circle_at_bottom,#FDE7E1_20%,#FFF9EC_30%,#FFFFFF_60%)] text-gray-800 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated "Coming Soon" Text */}
      <motion.h1
        className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tight"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
      >
        COMING{" "}
        <span className="text-[#407BFF] bg-clip-text bg-gradient-to-r from-[#407BFF] to-[#407BFF] animate-pulse">
          SOON
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-base md:text-lg lg:text-md font-medium text-gray-600 mt-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our portfolio is under construction. Exciting projects are on the way!
      </motion.p>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-[#FDE7E1] rounded-full opacity-30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 bg-[#FFF9EC] rounded-full opacity-30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
    </motion.div>
  );
};

export default Portfolio;