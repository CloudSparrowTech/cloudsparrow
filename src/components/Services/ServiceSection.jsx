import React from "react";
import { motion } from "framer-motion";

const ServiceSection = ({ data, images }) => {
  const labels = Object.keys(images);
  return (
    <motion.div
      style={{ color: data.color, backgroundColor: data.bgcolor }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative flex py-10 lg:px-30 gap-16 text-start">
        <div className="lg:w-[60%] py-2 px-10 lg:px-20 lg:py-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="uppercase font-medium">Un-Put-Downable</p>
          </motion.div>
          <motion.div
            className="my-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h1 className="lg:text-5xl text-3xl font-medium">{data.title}</h1>
          </motion.div>
          <motion.div
            className="my-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-medium" style={{ color: data.pcolor }}>
              {data.content}
            </p>
          </motion.div>
          <motion.div
            className="my-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ol className="my-2 px-4 list-disc font-medium text-sm">
              {data.features.map((feature, index) => (
                <motion.li
                  key={feature}
                  className="my-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {feature}
                </motion.li>
              ))}
            </ol>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <button
              style={{ color: data.btcolor }}
              className="py-3 px-10 border rounded-md text-xs font-medium"
            >
              And More
            </button>
          </motion.div>
        </div>
        <div className="hidden lg:flex justify-center w-[40%]">
          <motion.div
            className="border-x-1 mt-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <TechItem
              src={images[labels[0]]}
              label={labels[0].toUpperCase()}
              delay={0.9}
            />
            <TechItem
              src={images[labels[1]]}
              label={labels[1].toUpperCase()}
              delay={1.0}
              border="border-y-1"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <TechItem
              src={images[labels[2]]}
              label={labels[2].toUpperCase()}
              delay={1.1}
              border="border-b-1"
            />
            <TechItem
              src={images[labels[3]]}
              label={labels[3].toUpperCase()}
              delay={1.2}
              border="border-b-1"
            />
          </motion.div>
          <motion.div
            className="border-x-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <TechItem
              src={images[labels[4]]}
              label={labels[4].toUpperCase()}
              delay={1.3}
            />
            <TechItem
              src={images[labels[5]]}
              label={labels[5].toUpperCase()}
              delay={1.4}
              border="border-y-1"
            />
            <TechItem
              src={images[labels[6]]}
              label={labels[6].toUpperCase()}
              delay={1.5}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Helper component for tech stack items
const TechItem = ({ src, label, delay, border = "" }) => (
  <motion.div
    className={`flex flex-col gap-1 justify-center items-center px-10 py-6 ${border}`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.1 }}
  >
    <img src={src} alt={label} className="size-20" />
    <p className="text-xs font-medium">{label}</p>
  </motion.div>
);

export default ServiceSection;
