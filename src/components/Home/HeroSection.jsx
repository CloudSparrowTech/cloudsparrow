import React from "react";
import { motion } from "framer-motion"; // Added for animations
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title Section */}
      <motion.div
        className="lg:w-[80%] text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="font-bold text-2xl lg:text-[58px] text-[#0C0C0C] mt-4 mx-4 lg:mx-0 lg:mt-[50px] lg:leading-14">
          WE REIMAGINE DIGITAL NARRATIVES, EMPOWERING BRANDS TO CONNECT WITH
          CONSUMERS IN{" "}
          <span className="bg-gradient-to-r from-[#2A6BFD] via-[#11CED2] to-[#11CED2] inline-block text-transparent bg-clip-text">
            MEANINGFUL WAYS
          </span>
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-row gap-12 items-center w-full lg:mt-10">
        {/* Image Section */}
        <motion.div
          className="hidden lg:block w-[860px] h-[460px] mr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            className="size-full"
            src="/cloudsparrow-all-img/HeroSectionImg.gif"
            alt=""
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex flex-col lg:w-[460px] text-left lg:mt-14 mt-4 mx-4 lg:mx-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-start">
            <motion.img
              className="size-[35px]"
              src="/cloudsparrow-all-img/ThirdPage2.png"
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.p
              className="text-[30px] font-bold pl-[20px] max-w-96 leading-tight"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              A multi-disciplined creative company
            </motion.p>
          </div>

          <div className="mt-[20px]">
            <motion.p
              className="text-[16px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Operating under the brand name Cloud Sparrow Technologies, our
              company (COULDSPRROWS TECHNOLOGY LLP) has been successfully
              creating various projects in the fields of web development and
              other online services for 10 years.
            </motion.p>
            <motion.p
              className="text-[16px] mt-[10px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Today Cloud Sparrow Technologies continues to be the online
              leading brand where businesses can find each and every online
              service they may need.
            </motion.p>
            <motion.button
              className="flex items-center justify-evenly h-[35px] w-[100px] text-[12px] text-white bg-[#2A6BFD] font-semibold rounded-[4px] mt-[10px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <BiMessageRoundedDetail className="text-xl" />
              Let's Talk
            </motion.button>
          </div>
          <motion.div
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between lg:mt-18 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <div className="flex justify-center items-center gap-4">
              <div className="relative flex items-center overflow-hidden w-36 h-12">
                <motion.img
                  className="size-12"
                  src="/cloudsparrow-all-img/Ellipse 3.png"
                  alt=""
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                />
                <motion.img
                  className="size-12 ml-8"
                  src="/cloudsparrow-all-img/Ellipse 4.png"
                  alt=""
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                />
                <motion.img
                  className="size-12 ml-16"
                  src="/cloudsparrow-all-img/Ellipse 5.png"
                  alt=""
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <FaCirclePlus className="ml-24 mb-1 rounded-full border border-white size-10 text-[#2A6BFD] bg-white" />
                </motion.div>
              </div>
              <motion.div
                className="text-[12px] max-w-32 font-medium text-[#0C0C0C]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <p>Meet our IT team of designers & developers</p>
              </motion.div>
            </div>
            <motion.div
              className="mt-4 lg:mt-0" // Fixed typo: mg:mt-0 to lg:mt-0
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/about"
                className="text-[12px] px-6 py-2 border border-[#0374BB33] rounded-lg text-[#0C0C0C]"
              >
                About Us &gt;
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
