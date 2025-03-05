import React from "react";
import { motion } from "framer-motion";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin, CiLocationOn, CiMail } from "react-icons/ci";
import { Link, useResolvedPath } from "react-router-dom";

const Footer = ({ scrollToTop }) => {
  const path = useResolvedPath();
  return (
    <motion.div
      style={{
        display: path.pathname === "/customer" ? "none" : "",
      }}
      className="flex flex-col justify-between bg-[#181818] text-white px-2 lg:px-24 lg:h-[70vh] lg:pt-0 pt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row justify-evenly items-center h-[40%]">
        <motion.div
          className="flex lg:flex-col items-center justify-center h-full w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/cloudsparrow-all-img/logo.png"
            alt="Cloud Sparrow"
            className="w-16 mb-4"
          />
        </motion.div>
        <div className="block lg:hidden w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
        <div className="hidden lg:block h-full border-dotted bg-gradient-to-b w-[1px] from-[#55555500] via-gray-600 to-gray-600 text-transparent">
          .
        </div>
        <motion.div
          className="my-4 lg:my-0 flex flex-col items-center justify-center h-full w-full text-[#FFFFFF]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="font-medium lg:text-lg">WE'LL DELIVER RESULTS</p>
          <p className="font-medium lg:text-lg">THAT DRIVE GROWTH.</p>
          <p className="font-medium lg:text-lg">CHEAPER. FASTER.</p>
        </motion.div>
        <div className="block lg:hidden w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
        <div className="hidden lg:block h-full border-dotted bg-gradient-to-b w-[1px] from-[#55555500] via-gray-600 to-gray-600 text-transparent">
          .
        </div>
        <motion.div
          className="my-4 lg:my-0 flex justify-center items-center space-x-4 text-[40px] h-full w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            {
              href: "https://www.facebook.com/profile.php?id=61571866867135",
              icon: <CiFacebook />,
            },
            {
              href: "https://www.instagram.com/cloudsparrowtech",
              icon: <FaInstagram />,
            },
            {
              href: "https://www.linkedin.com/in/cloud-sparrow-aa6b48346/",
              icon: <CiLinkedin />,
            },
            { href: "https://wa.me/917838393552", icon: <FaWhatsapp /> },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
      <div className="w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
      <div className="lg:my-0 my-4 flex flex-col lg:flex-row lg:gap-0 gap-4 justify-evenly items-center h-[40%]">
        {[
          {
            icon: <FaPhoneAlt />,
            title: "CALL NOW:",
            text: "+917838393552",
            color: "text-gray-300",
          },
          {
            icon: <CiLocationOn />,
            text: ["C26 Block Sector 65,", "Noida, Uttar Pradesh"],
            color: "text-[#FFFBF0]",
          },
          {
            icon: <CiMail />,
            title: "EMAIL US:",
            text: "cloudsparrow938@gmail.com",
            color: "text-gray-300",
          },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="flex flex-col gap-1 items-center justify-center h-full w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-600 p-3 rounded-full text-xl">
                {item.icon}
              </div>
              {item.title && (
                <p className={`${item.color} mt-2`}>{item.title}</p>
              )}
              {Array.isArray(item.text) ? (
                item.text.map((line, i) => (
                  <p key={i} className={`${item.color} font-medium`}>
                    {line}
                  </p>
                ))
              ) : (
                <p className="font-medium">{item.text}</p>
              )}
            </motion.div>
            {index < 2 && (
              <>
                <div className="block lg:hidden w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
                <div className="hidden lg:block h-full border-dotted bg-gradient-to-t w-[1px] from-[#55555500] via-gray-600 to-gray-600 text-transparent">
                  .
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
      <div className="lg:my-0 my-4 flex flex-col justify-center items-center h-[20%]">
        <motion.div
          className="flex text-[#FFFFFF] items-center justify-evenly gap-2 lg:gap-14 text-xs font-medium h-full flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
        >
          {[
            { to: "/", label: "HOME" },
            { to: "/about", label: "ABOUT" },
            { to: "/services", label: "SERVICES" },
            { to: "/portfolio", label: "PORTFOLIO" },
            { to: "/careers", label: "CAREERS" },
            { to: "/contact", label: "CONTACT" },
            { to: "/team", label: "TEAM" },
            { to: "/termsandconditions", label: "PRIVACYPOLICY/T&Cs" },
          ].map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                onClick={scrollToTop}
                className="cursor-pointer hover:text-gray-400"
                to={link.to}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="hidden lg:block w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
        <motion.div
          className="h-full flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          viewport={{ once: true }}
        >
          <div className="text-xs my-2">
            <p>2025 © COULDSPRROWS TECHNOLOGY LLP All Rights Reserved</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
