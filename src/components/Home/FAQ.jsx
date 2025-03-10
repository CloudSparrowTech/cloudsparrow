import React from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { problems } from "../../utils/dummyData";

const FAQ = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-blue-900 via-[#2A6BFD] to-[#14b4f4] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Top Section */}
      <div className="bg-gradient-to-b from-gray-300 via-white to-white h-full rounded-b-[48px] py-4 lg:py-28 px-4 lg:px-20">
        {/* FAQ Section */}
        <div>
          <motion.div
            className="flex items-center justify-center pt-6 lg:pt-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <img src="/cloudsparrow-all-img/FourthPage.png" alt="Logo" />
            <p className="text-[10px] sm:text-[12px] text-[#2A6BFD] font-bold ml-4">
              FAQ
            </p>
            <img
              className="ml-5"
              src="/cloudsparrow-all-img/FourthPage.png"
              alt="Logo"
            />
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center mt-4 lg:mt-7 lg:leading-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <p className="text-3xl lg:text-6xl font-bold text-center">
              WHAT PROBLEM ARE
            </p>
            <p className="text-3xl lg:text-6xl font-bold text-center">
              YOU TRYING TO SOLVE?
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-2 mt-4 lg:mt-6 items-center justify-center">
            {problems.map((problem) => (
              <Card key={problem.id} text={problem.text} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="flex flex-col pt-10 lg:pt-24 lg:min-h-[90vh] min-h-[36vh]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="flex flex-wrap items-center justify-center">
          <img src="/cloudsparrow-all-img/FourthPage.png" alt="Logo" />
          <p className="text-[12px] sm:text-[14px] text-white font-bold ml-4">
            AVAILABLE FOR PROJECTS
          </p>
          <img
            className="ml-5"
            src="/cloudsparrow-all-img/FourthPage.png"
            alt="Logo"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center my-4">
          <p className="text-4xl lg:text-6xl text-white font-bold">
            LET'S BUILD YOUR
          </p>
          <p className="text-4xl lg:text-6xl text-white font-bold">
            PRODUCT TOGETHER
          </p>
        </div>

        <motion.div
          className="flex flex-col items-center justify-center text-center mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <p className="text-xs lg:text-sm text-white font-bold">
            Partner with us for a digital journey that transforms your business
            ideas
          </p>
          <p className="text-xs lg:text-sm text-white font-bold">
            into successful, cutting-edge solutions.
          </p>
          <motion.button
            className="z-10 h-8 w-24 mt-4 text-[12px] text-[#2A6BFD] bg-white font-semibold rounded-[4px] hover:cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/contact">Let's Start</Link>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Footer Image */}
      <motion.div
        className="hidden lg:flex justify-center w-full items-center mt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <img
          src="/cloudsparrow-all-img/FooterImage.png"
          alt="UI Design"
          className="absolute w-full shadow-lg rounded-lg bottom-0"
        />
      </motion.div>
    </motion.div>
  );
};

const Card = ({ text }) => {
  return (
    <motion.div
      className="flex items-center justify-between w-[360px] py-4 px-6 mt-2 border rounded-md border-[#0C0C0C33]" // Fixed w-lg
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="text-base">{text}</p>
      <FaPlus className="text-[#2A6BFD] text-xl" />
    </motion.div>
  );
};

export default FAQ;
