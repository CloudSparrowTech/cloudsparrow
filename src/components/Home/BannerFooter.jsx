import React from "react";
import { motion } from "framer-motion";
import { FaCirclePlus } from "react-icons/fa6";

const BannerFooter = () => {
  return (
    <motion.div
      className="flex flex-col w-full border bg-[#0C0C0C] lg:px-8 lg:py-9 py-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-row items-center justify-between w-full px-4 lg:px-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="font-bold text-white text-5xl lg:text-6xl text-left lg:leading-16">
          DIGITAL PRODUCTS <br /> EXPERIENCES
        </p>
        <img
          className="hidden lg:block h-30"
          src="/cloudsparrow-all-img/secondPage.png"
          alt=""
        />
      </motion.div>

      {/* Middle Section */}
      <div className="flex lg:flex-row flex-col items-center justify-between w-full lg:px-16 my-4 lg:my-0">
        <div className="flex lg:ml-8">
          {[
            "/cloudsparrow-all-img/webDesign.png",
            "/cloudsparrow-all-img/mobileApp.png",
            "/cloudsparrow-all-img/seo.png",
          ].map((src, index) => (
            <motion.div
              key={index}
              className="lg:size-60 p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <img className="" src={src} alt="" />
            </motion.div>
          ))}
        </div>
        {/* Right Section */}
        <motion.div
          className="text-white text-left mx-auto lg:pb-20"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-9xl font-semibold">4.0x</p>
          </div>
          <div className="my-2 bg-gradient-to-r from-black via-white to-black h-1 w-full"></div>
          <div className="flex gap-8 justify-center items-center">
            <motion.p
              className="text-xs lg:text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              Use our most popular Brand & <br /> web design resources to <br />
              jumpstart your latest project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <FaCirclePlus className="rounded-full border border-white size-12 text-[#2A6BFD] bg-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Image Gallery Section */}
      <div className="flex gap-4 lg:gap-0 lg:flex-wrap justify-evenly items-center overflow-scroll lg:overflow-visible no-scrollbar">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <motion.img
            key={num}
            className="h-20 object-contain"
            src={`/cloudsparrow-all-img/image${num}.png`}
            alt=""
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 + num * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default BannerFooter;