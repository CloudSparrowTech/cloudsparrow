import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceSection from "./ServiceSection";
import DevCulture from "./DevCulture";
import PopUpModal from "./PopUpModal";
import CraftProduct from "../Common/CraftProduct";
import { SERVICES } from "../../utils/dummyData";
import { CARDS } from "../../utils/dummyData";

const popUpData = [
  {
    image: "/cloudsparrow-all-img/sicbanner.jpg",
  },
  {
    image: "/cloudsparrow-all-img/taxbanner.jpg",
  },
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false); // Track if modal has been shown
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio === 1 &&
          !hasTriggered
        ) {
          setShowModal(true);
          setHasTriggered(true); // Prevent modal from showing again
        }
      },
      {
        root: null, // Viewport
        threshold: 1.0, // Fully visible
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasTriggered]); // Depend on `hasTriggered` to prevent re-triggering

  return (
    <>
      <motion.div
        className="px-6 lg:flex text-center pt-24 pb-10 lg:pt-40 lg:pb-20 lg:px-50 lg:gap-16 text-[#1F252B]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="lg:w-[40%]">
          <motion.p
            className="py-2 px-2 lg:px-9 border border-[#9CA7AA] border-dashed text-xl lg:text-2xl w-fit rounded-md"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Services <span>*</span>
          </motion.p>
          <motion.h1
            className="lg:text-7xl md:text-5xl text-3xl font-bold text-start lg:my-10 my-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We dazzle your clients
          </motion.h1>
          <motion.h3
            className="text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We’re here to bring your vision to life.
          </motion.h3>
          <motion.div
            className="flex justify-start my-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button className="uppercase py-3 px-10 bg-[#F48B3A] rounded-md text-xs font-medium text-white">
              <Link to="/contact">Get Started Now!</Link>
            </button>
          </motion.div>
        </div>
        <div className="lg:w-[60%] w-full">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-7 lg:justify-end ">
            <Card {...CARDS[0]} delay={0.2} />
            <Card {...CARDS[1]} delay={0.3} />
          </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-7 lg:mt-8 mt-2" ref={sectionRef}>
            <Card {...CARDS[2]} delay={0.4} />
            <Card {...CARDS[3]} delay={0.5} />
          </div>
        </div>
      </motion.div>

      {SERVICES.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }} // Animate only once
        >
          <ServiceSection
            data={service.data}
            images={service.images}
            refrence={sectionRef}
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <DevCulture />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CraftProduct />
      </motion.div>
      {popUpData && (
        <PopUpModal
          data={popUpData}
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

const Card = ({ icon, text, image, color, delay }) => {
  return (
    <motion.div
      style={{ backgroundColor: color }}
      className="lg:w-[36%] rounded-lg p-4 text-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className="flex justify-end"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.1 }}
      >
        <img src={icon} alt="" className="size-9" />
      </motion.div>
      <motion.h3
        className="my-4 text-start font-medium"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        <span className="font-bold">{text[0]}</span>
        {text.slice(1)}
      </motion.h3>
      <motion.div
        className="flex justify-center items-center size-32 mt-10 mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        <img src={image} alt="" className="size-full" />
      </motion.div>
    </motion.div>
  );
};

export default Services;
