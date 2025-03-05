import React, { useRef } from "react";
import { motion } from "framer-motion";

const CraftProduct = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="py-2 text-[#1F252B]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="lg:flex lg:px-30 px-4">
        <motion.div
          className="lg:w-[40%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="lg:text-6xl text-3xl font-medium">
            We share how <br /> to craft{" "}
            <motion.span
              className="text-[#EC4918]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              products
            </motion.span>
          </h1>
        </motion.div>
        <motion.div
          className="flex justify-center items-end lg:w-[40%] my-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium">
            At Cloud Sparrow, we believe in transforming ideas into exceptional
            products.
          </p>
        </motion.div>
        <motion.div
          className="hidden lg:flex justify-center items-end gap-4 w-[20%]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => scroll("left")}
            className="border border-[#9CA7AA] rounded-4xl px-6 py-1 font-bold text-3xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>
          <motion.button
            onClick={() => scroll("right")}
            className="border border-[#9CA7AA] rounded-4xl px-6 py-1 font-bold text-3xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </motion.div>
      </div>
      <div
        ref={scrollRef}
        className="px-4 lg:px-8 lg:my-14 my-4 flex gap-8 overflow-x-scroll no-scrollbar"
      >
        {[
          {
            img: "/cloudsparrow-all-img/car.png",
            icon: "/cloudsparrow-all-img/project_1_icon.png",
            label: "PROJECT 01",
            width: "lg:min-w-[40vw]",
          },
          {
            img: "/cloudsparrow-all-img/man.png",
            icon: "/cloudsparrow-all-img/project_2_icon.png",
            label: "PROJECT 02",
            width: "lg:min-w-[22vw]",
          },
          {
            img: "/cloudsparrow-all-img/children.png",
            icon: "/cloudsparrow-all-img/project_3_icon.png",
            label: "PROJECT 03",
            width: "lg:min-w-[22vw]",
          },
          {
            img: "/cloudsparrow-all-img/model.png",
            icon: "/cloudsparrow-all-img/project_4_icon.png",
            label: "PROJECT 04",
            width: "lg:min-w-[22vw]",
          },
        ].map((project, index) => (
          <motion.div
            key={project.label}
            className={`relative min-w-full ${project.width} h-[30vh] lg:h-[60vh] rounded-2xl overflow-hidden`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 1.0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={project.img} alt="" className="size-full" />
            <div className="absolute top-0 left-0 flex flex-col justify-between items-start w-full h-full px-4 py-6">
              <motion.div
                className={index === 0 ? "h-16 w-60" : "size-16"}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 1.1 }}
                viewport={{ once: true }}
              >
                <img src={project.icon} alt="" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 1.2 }}
                viewport={{ once: true }}
              >
                <button className="bg-[#F48B3A] rounded-4xl px-8 py-4 text-xs font-medium cursor-pointer">
                  {project.label}
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CraftProduct;