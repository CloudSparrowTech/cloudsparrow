import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Overlay from "../Contact/Overlay";
import { carouselData } from "../../utils/dummyData";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full pt-16">
      {showOverlay && (
        <Overlay
          service={carouselData[currentIndex].title}
          description={carouselData[currentIndex].description}
          setShowOverlay={setShowOverlay}
        />
      )}

      {/* AnimatePresence outside to avoid re-renders */}
      <AnimatePresence mode="wait">
        {/* Main Image with Ultra-Smooth Animation */}
        <div className="w-full max-h-[600px] md:max-h-[90vh] overflow-hidden bg-black">
          <motion.img
            key={currentIndex} // ✅ Ensures smooth transitions
            src={carouselData[currentIndex]?.image}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-auto object-contain"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(6px)" }} // ✅ Increased blur effect for smoother transition
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              staggerChildren: 0.3, // ✅ Added stagger for smoother transitions
            }}
          />
        </div>
      </AnimatePresence>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

      {/* Title & Description with Smooth Motion */}
      <div className="absolute bg-gradient-to-r bottom-8 md:bottom-12 left-5 md:left-10 text-white max-w-xs sm:max-w-sm md:max-w-xl">
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl lg:text-6xl font-bold"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {carouselData[currentIndex]?.title}
        </motion.h2>
        <motion.p
          className="text-xs sm:text-sm md:text-base lg:text-lg mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {carouselData[currentIndex]?.description}
        </motion.p>
        <motion.button
          onClick={() => setShowOverlay(true)}
          className="mt-4 px-4 sm:px-6 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {carouselData[currentIndex]?.buttonText}
        </motion.button>
      </div>

      {/* Thumbnail Navigation with Soft Motion */}
      <div className="absolute right-2 bottom-2 sm:bottom-4 -translate-r-2 flex space-x-2 md:space-x-3">
        {carouselData.map((data, index) => (
          <motion.img
            key={index}
            src={data.image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-14 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 lg:w-24 lg:h-14 object-cover cursor-pointer rounded-md transition-all ${
              index === currentIndex
                ? "border-2 border-white scale-110 shadow-lg"
                : "opacity-50 hover:opacity-100 transition-opacity duration-300" // ✅ Smooth opacity change
            }`}
            whileHover={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
