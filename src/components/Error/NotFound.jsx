import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-gray-800 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated 404 Text */}
      <motion.h1
        className="text-8xl md:text-9xl lg:text-[12rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
      >
        404
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 mt-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Oops! This page seems to have wandered off.
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-sm md:text-base lg:text-lg text-gray-500 mt-2 max-w-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        The page you’re looking for doesn’t exist or has moved. Let’s get you
        back on track!
      </motion.p>

      {/* Back to Home Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6"
      >
        <Link
          to={"/"}
          className="mt-8 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base font-medium"
        >
          Back to Home
        </Link>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-indigo-200 rounded-full opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 bg-pink-200 rounded-full opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
    </motion.div>
  );
}

export default NotFound;