import React from "react";
import { motion } from "framer-motion";
import { JobPage } from "./JobPage";

const Careers = () => {
  return (
    <>
      <motion.div
        className="bg-[url('./assets/careerimg.png')] bg-cover bg-center lg:min-h-[500px] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="px-4 pt-26 pb-10 lg:px-0 lg:pt-0 lg:pb-0 lg:pl-28 lg:w-full lg:min-h-[500px] bg-gradient-to-r from-[#080808B8] via-transparent to-transparent flex flex-col items-start justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className="font-bold text-3xl my-4 lg:my-0 lg:text-[74px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Join The Cloud-Sparrow
          </motion.h1>
          <motion.p
            className="font-medium text-xs lg:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            At Cloud-Sparrow, we are on a mission to transform{" "}
            <br className="hidden lg:block" /> how businesses leverage digital
            marketing, web development, and design to achieve success.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="p-4 lg:p-12 flex lg:mx-20 gap-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="hidden lg:block w-1/2">
          <div className="w-[610px] h-[546px] flex">
            {[ 
              { src: "/cloudsparrow-all-img/girl1.jpeg", width: "w-1/3", extra: "" },
              { src: "/cloudsparrow-all-img/girl2.jpeg", width: "w-1/3 h-[500px]", extra: "mx-1 mt-[40px]" },
              { src: "/cloudsparrow-all-img/girl3.jpeg", width: "w-1/3 h-[420px]", extra: "mt-[40px]" },
            ].map((img, index) => (
              <motion.div
                key={index}
                className={`overflow-hidden ${img.width} rounded-3xl ${img.extra}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={img.src} alt="" />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="lg:w-1/2 lg:mt-12 lg:ml-18"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-[48px] text-[#080808] leading-[1.1]">
            Innovators. Builders. <br /> Visionaries.
          </h1>
          <motion.p
            className="text-xs lg:text-sm my-6 font-medium text-[#080808]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            At Cloud-Sparrow, we craft cutting-edge digital experiences that
            drive brand growth and engagement.
            <br className="hidden lg:block" /> From high-performance websites to
            seamless mobile apps, compelling marketing strategies, and visually
            stunning designs—we bring ideas to life.
            <br className="hidden lg:block" /> Our team of experts specializes
            in web and app development, UI/UX design, branding, and digital
            marketing to help businesses thrive in a competitive digital
            landscape.
          </motion.p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-sm text-white text-sm font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            See Open Positions
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col lg:items-center lg:justify-center lg:mb-12 mx-4 lg:mx-0 lg:text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="font-bold text-4xl lg:text-[64px] text-[#080808] lg:w-1/2 lg:leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Career growth
          <br />
          is always in sight.
        </motion.h1>
        <motion.p
          className="text-[16px] my-6 font-medium text-[#080808] lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We see the career path as a sequence of careful choices, decisions &
          experiences that <br /> define you as a person & a professional.
          That’s why we ask you to share your career goals <br /> once you join
          us, so we can envision a future path tailor-made for you.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <JobPage />
      </motion.div>
    </>
  );
};

export default Careers;