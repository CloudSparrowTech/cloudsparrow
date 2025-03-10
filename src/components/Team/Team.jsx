import React from "react";
import Header from "../Common/Header";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const TeamComponent = () => {
  const rolePriority = {
    "Managing Director & Founder": 1,
    Director: 2,
    "Branch Manager": 3,
    "Manager IT & Sales": 4,
    "HR Head": 5,
    "HR Executive": 6,
    "IT Head": 7,
    "Senior Developer": 8,
    "Junior Developer": 9,
    "Team Leader": 10,
    "Assistant Team Leader": 11,
    "Business Development Associate": 12,
  };

  const teamMembers = useSelector((state) => {
    return state.teamSlice.teamsData;
  });

  const sortedData = [...teamMembers].sort(
    (a, b) => (rolePriority[a.role] || 99) - (rolePriority[b.role] || 99)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Header
        heading={"Meet The CloudSparrow Team"}
        description={[
          "Our team is dedicated to delivering innovative solutions in digital marketing, web development, and design, ensuring success for businesses worldwide.",
        ]}
        image={"/cloudsparrow-all-img/team.png"}
      />
      <div className="grid my-10 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-8 lg:px-16 xl:px-24 bg-gray-50">
        {sortedData?.map((member, memberIndex) => (
          <Card
            data={member}
            key={member.$id}
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
