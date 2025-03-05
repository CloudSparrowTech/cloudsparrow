import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TechStack = () => {
  return (
    <motion.div
      className="hidden lg:flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Top Section */}
      <motion.div
        className="border-y-2 border-[#0C0C0C] w-full text-center py-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Removed empty img tags; added placeholder if needed */}
        <p className="uppercase text-[#2A6BFD] text-sm font-bold">
          Technology stack we use for
        </p>
      </motion.div>

      {/* Mid Section */}
      <motion.div
        className="bg-[url('/cloudsparrow-all-img/TechStackBG.png')] flex flex-col gap-6 justify-center items-center w-[80vw] border-x-[2px] bg-cover" // Fixed border-x-2 and syntax
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Mid Top Section */}
        <div className="pt-14 px-60 text-center">
          <h1 className="uppercase font-bold text-6xl">
            The Technology <br /> we use and abuse
          </h1>
        </div>

        {/* Middle Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <button className="text-sm font-bold px-8 py-3 bg-[#2A6BFD] text-white rounded-md">
            <Link to="/contact">Work With Us</Link>
          </button>
        </motion.div>

        {/* Mid Bottom Section */}
        <motion.div
          className="flex w-full items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex w-full items-center">
            <div className="grid grid-cols-4 grid-rows-3">
              <div className="size-16 text-transparent">1</div>
              <div className="size-16 text-transparent">2</div>
              <div className="size-16 text-transparent">3</div>
              <motion.div
                className="size-16 border-2 border-r-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <img src="/cloudsparrow-all-img/react.png" alt="React" />
              </motion.div>
              <div className="size-16 text-transparent">5</div>
              <div className="size-16 text-transparent">6</div>
              <motion.div
                className="size-16 border-2 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <img src="/cloudsparrow-all-img/js.png" alt="JavaScript" />
              </motion.div>
              <div className="size-16 text-transparent">8</div>
              <div className="size-16 text-transparent">9</div>
              <motion.div
                className="size-16 border-2 border-b-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <img src="/cloudsparrow-all-img/react.png" alt="React" />
              </motion.div>
              <div className="size-16 text-transparent">11</div>
              <div className="size-16 text-transparent">12</div>
            </div>
            <div className="grid grid-cols-4 grid-rows-3">
              <motion.div
                className="size-16 border-2 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <img src="/cloudsparrow-all-img/red.png" alt="Red" />
              </motion.div>
              <div className="size-16 text-transparent">2</div>
              <div className="size-16 text-transparent">3</div>
              <div className="size-16 text-transparent">4</div>
              <div className="size-16 text-transparent">5</div>
              <motion.div
                className="size-16 border-2 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <img src="/cloudsparrow-all-img/php.png" alt="PHP" />
              </motion.div>
              <div className="size-16 text-transparent">7</div>
              <div className="size-16 text-transparent">8</div>
              <div className="size-16 text-transparent">9</div>
              <div className="size-16 text-transparent">10</div>
              <motion.div
                className="size-16 border-2 border-b-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <img src="/cloudsparrow-all-img/kotlin.png" alt="Kotlin" />
              </motion.div>
              <div className="size-16 text-transparent">12</div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div></div>
            <div className="grid grid-cols-4 grid-rows-3">
              <motion.div
                className="size-16 border-2 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <img src="/cloudsparrow-all-img/wordpress.png" alt="WordPress" />
              </motion.div>
              <div className="size-16 text-transparent">2</div>
              <div className="size-16 text-transparent">3</div>
              <div className="size-16 text-transparent">4</div>
              <div className="size-16 text-transparent">5</div>
              <motion.div
                className="size-16 border-2 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <img src="/cloudsparrow-all-img/woo.png" alt="WooCommerce" />
              </motion.div>
              <div className="size-16 text-transparent">7</div>
              <div className="size-16 text-transparent">8</div>
              <div className="size-16 text-transparent">9</div>
              <div className="size-16 text-transparent">10</div>
              <motion.div
                className="size-16 border-2 border-b-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <img src="/cloudsparrow-all-img/shopify.png" alt="Shopify" />
              </motion.div>
              <div className="size-16 text-transparent">12</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="border-y-2 border-[#0C0C0C] w-full text-center flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.0 }}
      >
        <div className="flex w-[80vw] border-x-[1px]"> {/* Fixed border-x-1 */}
          <div className="size-16 border-r-2 border-l-[1px] flex items-center justify-center"> {/* Fixed border-l-1 */}
            <motion.img
              src="/cloudsparrow-all-img/angular.png"
              alt="Angular"
              className="size-full object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
            />
          </div>
          <div className="h-16 w-96 text-center flex items-center justify-center">
            <p className="uppercase text-[#000000] text-lg font-medium">
              Now Booking New Projects
            </p>
          </div>
          <div className="size-16 border-x-2 flex items-center justify-center">
            <motion.img
              src="/cloudsparrow-all-img/swift.png"
              alt="Swift"
              className="size-full object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.3 }}
            />
          </div>
          <div className="h-16 w-[652px] text-center flex justify-between items-center">
            <div className="w-[80%]">
              <p className="uppercase text-[#323232] text-xs font-bold text-left pl-4">
                Get an on-demand, full-service creative partner—today.
              </p>
            </div>
            <motion.div
              className="w-[20%]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <button className="text-sm font-bold px-4 py-2 border text-[#0C0C0C] rounded-md">
                Book a Call
              </button>
            </motion.div>
          </div>
          <div className="size-16 border-l-2 border-r-[1px] flex items-center justify-center"> {/* Fixed border-r-1 */}
            <motion.img
              src="/cloudsparrow-all-img/adobe.png"
              alt="Adobe"
              className="size-full object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechStack;