import React, { useRef } from "react";
import { motion } from "framer-motion"; // Added for animations
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const WhatWeDo = () => {
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
      className="lg:pl-10 lg:pt-18"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Section Header */}
      <motion.div
        className="flex items-center mt-5 ml-4 lg:ml-28"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="/cloudsparrow-all-img/FourthPage.png"
          alt="No"
          className="w-5 md:w-auto"
        />
        <p className="ml-3 text-[#2A6BFD] font-bold text-sm">WHAT WE DO</p>
      </motion.div>

      {/* Title */}
      <motion.p
        className="mt-4 ml-4 lg:ml-28 lg:max-w-[58%] text-3xl lg:text-6xl font-bold lg:leading-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        WE AIM FOR 100% CUSTOMER SATISFACTION
      </motion.p>

      {/* Card Section */}
      <div className="flex justify-center items-center mt-5 lg:mt-10 mx-4 gap-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          <IoIosArrowDropleftCircle
            onClick={() => scroll("left")}
            className="hidden lg:block rounded-full border border-white size-20 cursor-pointer"
          />
        </motion.div>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar justify-evenly gap-4"
        >
          {[
            {
              logo: "/cloudsparrow-all-img/Card1Logo.png",
              img: "/cloudsparrow-all-img/Card1Image.png",
              title: "Web Design/Development",
              description:
                "The range of our web design services is quite extensive. From blogs and forums to multimedia galleries and complete online stores, our specialty is affordable designs for small and medium businesses.",
              tags: [
                "Website Design",
                "Website Development",
                "WordPress",
                "eCommerce Website",
                "Responsive Web Design",
                "Custom CMS",
              ],
            },
            {
              logo: "/cloudsparrow-all-img/Card2Logo.png",
              img: "/cloudsparrow-all-img/Card2Image.png",
              title: "Mobile App Development",
              description:
                "No matter how good a design looks, it cannot save a poorly functioning website. This is why Interlacing Technologies strive to provide the best web development services with our talented developers using cutting-edge technologies.",
              tags: [
                "Mobile App",
                "Android App",
                "IOS App",
                "Mobile Websites",
                "Hybrid Apps",
                "Native Applications",
              ],
            },
            {
              logo: "/cloudsparrow-all-img/Card3Logo.png",
              img: "/cloudsparrow-all-img/Card3Image.png",
              title: "SEO Optimization",
              description:
                "The final step of utilizing a website is enabling it to get as many visitors as possible. Our SEO services ensure a top spot for your website in search engines results thus maximizing the traffic.",
              tags: [
                "SEO Content Strategy",
                "SEO Writing",
                "Website SEO",
                "Reports",
                "Keyword Research",
                "On-Page Optimization",
                "Copywriting",
              ],
            },
            {
              logo: "/cloudsparrow-all-img/Card1Logo.png",
              img: "/cloudsparrow-all-img/Card1Image.png",
              title: "Web Design/Development",
              description:
                "The range of our web design services is quite extensive. From blogs and forums to multimedia galleries and complete online stores, our specialty is affordable designs for small and medium businesses.",
              tags: [
                "Website Design",
                "Website Development",
                "WordPress",
                "eCommerce Website",
                "Responsive Web Design",
                "Custom CMS",
              ],
            },
          ].map((card, index) => (
            <Card
              key={index}
              logo={card.logo}
              img={card.img}
              title={card.title}
              description={card.description}
              tags={card.tags}
              index={index} // Pass index for staggered animation
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <IoIosArrowDroprightCircle
            onClick={() => scroll("right")}
            className="hidden lg:block rounded-full border border-white size-20 cursor-pointer"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Card = ({ logo, img, title, description, tags, index }) => {
  return (
    <motion.div
      className="flex flex-col bg-[#0C0C0C] min-w-full lg:min-w-sm lg:max-w-md h-auto p-8 rounded-lg shadow-lg text-white"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Card Header */}
      <div className="flex justify-between items-start">
        <motion.div
          className="flex justify-center items-center w-10 h-10 rounded-full bg-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
        >
          <img src={logo} alt="Logo" className="w-6 h-6" />
        </motion.div>
        <motion.img
          src={img}
          alt="N/A"
          className="rounded-md object-cover lg:w-3xs h-32 lg:h-36"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 + index * 0.2 }}
        />
      </div>

      {/* Card Content */}
      <motion.div
        className="flex justify-between items-center mt-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
      >
        <div>
          <h2 className="text-xl lg:text-2xl font-bold uppercase">{title}</h2>
        </div>
        <div>
          <IoIosArrowDroprightCircle className="text-2xl lg:text-4xl bg-[#FFFFFF] text-black rounded-full" />
        </div>
      </motion.div>
      <motion.p
        className="text-sm mt-4 line-clamp-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
      >
        {description}
      </motion.p>

      {/* Tags */}
      <motion.div
        className="flex flex-wrap gap-2 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 + index * 0.2 }}
      >
        {tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="bg-[#0f0f0f] text-[#00e6e6] px-3 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WhatWeDo;