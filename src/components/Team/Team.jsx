import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const TeamComponent = () => {
  const teamMembers = useSelector((state) => {
    return state.teamSlice.teamsData;
  });

  return (
    <motion.div
      className="px-4 py-20 lg:py-24 md:px-8 lg:px-16 xl:px-24 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="text-center font-medium"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h5 className="text-gray-600 text-lg uppercase tracking-wide">
          Our Team
        </h5>
        <h1 className="text-3xl md:text-5xl font-bold my-4">
          Meet The
          <motion.span
            className="text-blue-600"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {" CloudSparrow "}
          </motion.span>
          Team
        </h1>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our team is dedicated to delivering innovative solutions in digital
          marketing, <br /> web development, and design, ensuring success for
          businesses worldwide.
        </motion.p>
      </motion.div>

      <div className="grid mt-10 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers?.map((member, memberIndex) => (
          <Card
            data={member}
            key={member._id}
            delay={memberIndex * 0.2 + 0.4 + memberIndex * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ data, delay }) => {
  return (
    <motion.div
      className="border border-gray-200 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-full aspect-[3/2] overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
        viewport={{ once: true }}
      >
        <img
          src={data.avatar}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="p-4 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
        <p className="text-gray-500 text-xs">{data.email}</p>
        <p className="text-blue-600 font-medium mt-1">{data.role}</p>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {data.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TeamComponent;
