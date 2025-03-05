import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFoundAdmin() {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 via-white to-red-50 text-gray-800 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated 403 Text */}
      <motion.h1
        className="text-8xl md:text-9xl lg:text-[12rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-red-500 to-orange-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
      >
        403
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mt-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Access Denied
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-sm md:text-base lg:text-lg text-gray-600 mt-2 max-w-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        You don’t have permission to access this page. Please contact an admin
        for assistance.
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
          className="mt-8 px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base font-medium"
        >
          Back to Home
        </Link>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-gray-300 rounded-full opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 bg-red-300 rounded-full opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
    </motion.div>
  );
}

export default NotFoundAdmin;