import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BannerFooter from "./BannerFooter";
import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";
import Work from "./Work";
import Testimonials from "./Testimonials";
import TechStack from "./TechStack";
import ProductCycle from "./ProductCycle";
import Loader from "../Common/Loader";
import Banner from "./Banner";
import authService from "../../backend/auth";
import { toast } from "react-toastify";

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const controller = new AbortController(); // To prevent memory leaks

    if (!token) return; // Stop execution if params are missing

    const verifyEmail = async () => {
      setLoading(true);
      try {
        const response = await authService.verifyEmail({ token });
        if (response) {
          toast.success("Email Verified Successfully");
        }
      } catch (e) {
        if (e.name !== "AbortError") {
          toast.error(e?.message || "Email Verification Failed");
        }
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();

    return () => controller.abort(); // Cleanup on unmount
  }, []);

  const fadeInAnimation = (delay) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  if (loading) {
    return <Loader text={"verifying your email"} />;
  }

  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div {...fadeInAnimation(0.2)}>
        <Banner />
      </motion.div>
      <motion.div {...fadeInAnimation(0.4)}>
        <BannerFooter />
      </motion.div>
      <motion.div {...fadeInAnimation(0.6)}>
        <HeroSection />
      </motion.div>
      <motion.div {...fadeInAnimation(0.8)}>
        <WhatWeDo />
      </motion.div>
      <motion.div {...fadeInAnimation(1.0)}>
        <Work />
      </motion.div>
      <motion.div {...fadeInAnimation(1.2)}>
        <Testimonials />
      </motion.div>
      <motion.div {...fadeInAnimation(1.4)}>
        <TechStack />
      </motion.div>
      <motion.div {...fadeInAnimation(1.6)}>
        <ProductCycle />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
