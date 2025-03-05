import { motion } from "framer-motion";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useState } from "react";
import { useSelector } from "react-redux";

export const JobPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const jobDetailsData = useSelector((state) => state.jobSlice?.jobsData);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {jobDetailsData && (
        <motion.div
          className="bg-gray-200 mx-0 lg:mx-16 lg:px-8 py-6 lg:py-12 mb-0 lg:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {jobDetailsData.map((data, index) => (
            <JobDescriptionPoint
              jobDetails={data}
              toggleCollapse={toggleCollapse}
              index={index}
              activeIndex={activeIndex}
              key={index}
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

const JobDescriptionPoint = ({
  jobDetails,
  toggleCollapse,
  index,
  activeIndex,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div
        className={
          "flex border-t-2 p-2 lg:mx-8 mx-2 justify-between " +
          (activeIndex !== index ? "border-[#5F5F61]" : "border-[#0F75BC]")
        }
      >
        <div className="w-[65%]">
          <h3
            className={
              "lg:text-[28px] text-xl font-semibold " +
              (activeIndex !== index ? "text-[#080808]" : "text-[#0F75BC]")
            }
          >
            {jobDetails.title}
          </h3>
        </div>
        <motion.div
          className="flex gap-2 justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
          viewport={{ once: true }}
        >
          <button onClick={() => toggleCollapse(index)}>
            {activeIndex === index ? (
              <IoIosArrowDropdownCircle className="text-4xl text-[#0F75BC]" />
            ) : (
              <IoIosArrowDroprightCircle className="text-4xl bg-[#5F5F61] text-white rounded-full" />
            )}
          </button>
        </motion.div>
      </div>
      {activeIndex === index && (
        <motion.div
          className="flex flex-col lg:mx-8 mx-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
        >
          <JobDescriptionCard JobDetails={jobDetails} />
        </motion.div>
      )}
    </motion.div>
  );
};

const JobDescriptionCard = ({ JobDetails }) => {
  return (
    <motion.div
      className="bg-white p-4 lg:p-8 my-2 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <motion.p
          className="text-[18px] font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Job Description:
        </motion.p>
        <motion.div
          className="text-[16px] my-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="font-bold">
            Job title: <span className="font-normal">{JobDetails.title}</span>
          </p>
          <p className="font-bold">
            Location: <span className="font-normal">{JobDetails.location}</span>
          </p>
          <p className="font-bold">
            Terms: <span className="font-normal">{JobDetails.terms}</span>
          </p>
          <p className="font-bold">
            Experience:{" "}
            <span className="font-normal">{JobDetails.experience}</span>
          </p>
          <p className="font-bold">
            Remuneration:{" "}
            <span className="font-normal">{JobDetails.remuneration}</span>
          </p>
        </motion.div>
      </div>
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-[18px] font-bold">About the role:</p>
        <p className="text-[16px] mt-2">{JobDetails.role}</p>
      </motion.div>
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-[18px] font-bold">Responsibilities:</p>
        <ul className="list-disc ml-5">
          {JobDetails.responsibilities.map((res, index) => (
            <motion.li
              key={index}
              className="text-[16px]"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              {res}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-[18px] font-bold">Candidate requirements:</p>
        <ul className="list-disc ml-5">
          {JobDetails.requirements.map((res, index) => (
            <motion.li
              key={index}
              className="text-[16px]"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            >
              {res}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.button
        className="bg-[#0F75BC] py-2 px-6 rounded-sm text-white text-[15px] w-48"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <a href={JobDetails.url} target="_blank" rel="noopener noreferrer">
          Apply for this Job
        </a>
      </motion.button>
    </motion.div>
  );
};