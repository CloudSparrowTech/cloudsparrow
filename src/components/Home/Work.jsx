import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";

const Work = () => {
  const [curr, setCurr] = useState(0);

  const data = [
    "/cloudsparrow-all-img/bottomTab.png",
    "/cloudsparrow-all-img/discussion.png",
    "/cloudsparrow-all-img/meating.png",
  ];

  const prev = () => {
    setCurr(curr === 0 ? data.length - 1 : curr - 1);
  };

  const next = () => {
    setCurr(curr === data.length - 1 ? 0 : curr + 1);
  };

  return (
    <motion.div
      className="hidden lg:block mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Images */}
      <div className="w-full relative h-80"> {/* Added height to contain absolute images */}
        <motion.img
          className="h-full w-full absolute top-0 left-0 object-cover z-0" // Ensured full coverage
          src="/cloudsparrow-all-img/work1.png"
          alt="Background 1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.img
          className="h-full w-full absolute top-0 left-0 object-cover z-10" // Stacked on top
          src="/cloudsparrow-all-img/work2.png"
          alt="Background 2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col gap-12 items-center justify-center w-full px-8 pt-[66px]" // Fixed pt-66
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            to="/portfolio"
            className="z-20 text-sm font-bold px-4 py-2 bg-[#2A6BFD] text-white rounded-md" // Increased z-index
          >
            Explore Our Work
          </Link>
        </motion.div>
        <div className="flex items-center justify-evenly bg-[url('/cloudsparrow-all-img/Rectangle24.png')] bg-cover bg-center h-[80vh] w-full px-40">
          <motion.div
            className="flex flex-col justify-between items-center w-[25%] h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex items-center justify-center h-[40%]">
              <motion.img
                className="w-36 max-h-full object-contain"
                src="/cloudsparrow-all-img/peakStudio.png"
                alt="Peak Studio"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
            </div>
            <motion.div
              className="rounded-t-md overflow-hidden border-[3px]" // Fixed border-l-3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <img
                className="w-36 h-80 object-cover"
                src="/cloudsparrow-all-img/phoneimg.png"
                alt="Phone Image 1"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-between items-center w-[54%] gap-[18px]" // Fixed gap-18
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="relative rounded-xl overflow-hidden border-4 h-72 w-[540px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={curr}
                  className="w-full h-full object-cover"
                  src={data[curr]}
                  alt="Slider Image"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
            <motion.div
              className="flex justify-between items-center w-full text-white" // Removed hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <IoIosArrowDropleftCircle
                  onClick={prev}
                  className="rounded-full border border-white size-8 cursor-pointer"
                />
              </motion.div>
              <button className="font-bold text-sm">CHECK VIEW PROJECT</button>
              <motion.div
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <IoIosArrowDroprightCircle
                  onClick={next}
                  className="rounded-full border border-white size-8 cursor-pointer"
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center gap-20 items-center w-[25%] h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/portfolio"
                className="rounded-sm font-bold text-xs border bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
              >
                Check Live Project
              </Link>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden border-[3px]" // Fixed border-3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <img
                className="w-36 h-[280px]" // Fixed h-70 to h-[280px]
                src="/cloudsparrow-all-img/phoneimg2.png"
                alt="Phone Image 2"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Work;