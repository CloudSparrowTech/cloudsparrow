import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Banner = () => {
  const [curr, setCurr] = useState(0);

  const data = [
    "/cloudsparrow-all-img/BannerTabImg1.png",
    "/cloudsparrow-all-img/BannerTabImg2.png",
    "/cloudsparrow-all-img/BannerTabImg3.png",
  ];

  const prev = () => {
    curr === 0 ? setCurr(data.length - 1) : setCurr(curr - 1);
  };

  const next = () => {
    curr === data.length - 1 ? setCurr(0) : setCurr(curr + 1);
  };

  return (
    <div className="bg-[url('./assets/BackGroundImage.png')] bg-cover bg-center w-full h-full pt-20">
      {/* Main Content Section */}
      <div className="flex lg:pt-8 lg:flex-row flex-col items-center justify-center w-full lg:px-12 gap-7">
        {/* Left Section */}
        <motion.div
          className="lg:w-[60%] lg:pl-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-white text-3xl lg:text-5xl font-bold mx-auto">
            HIGHLY BESPOKE <br /> WEBSITES AND DIGITAL <br /> EXPERIENCES FOR{" "}
            <br /> AMBITIOUS{" "}
            <span className="bg-gradient-to-r from-[#2A6BFD] to-[#11CED2] inline-block text-transparent bg-clip-text">
              BRANDS
            </span>
          </p>
        </motion.div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start max-w-md text-center md:text-left">
          <img
            className="size-28"
            src="/cloudsparrow-all-img/CallUs.png"
            alt="Call Us"
          />
          <motion.p
            className="text-gray-300 text-base mt-6 px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Why stress over design and development? Or hire different agencies
            to do branding and marketing? We are your one-stop shop for all your
            design, development, and marketing needs.
          </motion.p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center justify-center w-full overflow-hidden mx-4 lg:mx-0">
          <IoIosArrowDropleftCircle
            className="text-3xl lg:text-4xl text-[black] rounded-full cursor-pointer"
            onClick={prev}
          />
          <div className="relative lg:w-4xl w-fit flex items-center justify-center">
            {/* Background Image */}
            <img
              className="w-full h-full object-cover"
              src="/cloudsparrow-all-img/home.png"
              alt="Background"
            />
            {/* Overlay Image with Smooth Animation */}
            <div className="absolute border-2 top-2 lg:top-5 h-[70%] w-[69%] object-contain lg:rounded-2xl rounded-md overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={curr}
                  src={data[curr]}
                  alt="Overlay"
                  className="size-full"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
            <img
              className="absolute w-full h-full top-0 object-cover"
              src="/cloudsparrow-all-img/hands.png"
              alt="Overlay"
            />
          </div>
          <IoIosArrowDroprightCircle
            className="text-3xl lg:text-4xl text-[black] rounded-full cursor-pointer"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;