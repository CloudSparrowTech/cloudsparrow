import React from "react";
import { motion } from "framer-motion";
import { data } from "../../utils/dummyData";

const DevCulture = () => {
  return (
    <motion.div
      className="p-4 lg:py-24 lg:px-30 gap-16 lg:text-center text-[#1F252B]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="lg:text-6xl text-3xl font-medium">
          Create the culture of <br />{" "}
          <motion.span
            className="text-[#EC4918]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            development by
          </motion.span>{" "}
          Industry.
        </h1>
      </motion.div>

      <motion.div
        className="my-4 lg:my-10 w-fit mx-auto p-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-sm font-medium">
          We provide tailored digital solutions for various <br /> industries,
          leveraging the latest technologies to drive innovation, efficiency,
          and growth. <br /> From custom software to scalable cloud solutions, we
          help businesses stay ahead in their respective domains.
        </h3>
      </motion.div>

      <div className="flex lg:flex-wrap gap-4 items-center justify-center lg:px-14 mx-4 lg:mx-0 overflow-scroll lg:overflow-visible">
        {data.map((item, index) => (
          <motion.div
            key={item.title}
            className="border border-dashed border-[#9CA7AA] flex justify-center gap-4 items-center py-1 px-2 rounded-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }} // Slight hover effect
          >
            <p className="text-sm w-fit font-medium">{item.title}</p>
            <motion.div
              className="size-12 rounded-md overflow-hidden bg-[#FFEDC1] p-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.9 }}
              viewport={{ once: true }}
            >
              <img src={item.icon} alt={item.title} className="size-full" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DevCulture;