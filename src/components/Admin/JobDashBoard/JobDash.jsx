import React, { useEffect, useState } from "react";
import jobService from "../../../backend/job"; // Assuming `jobService` handles the API interactions
import JobCard from "./JobDashCard";
import UpdateJobModal from "./UpdateJobModal";
import CreateJobModal from "./CreateJobModal";
import { toast } from "react-toastify";

const JobDash = () => {
  const [jobs, setJobs] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    title: "",
    location: "",
    terms: "",
    experience: "",
    remuneration: "",
    role: "",
    responsibilities: [],
    requirements: [],
    url: "",
  });

  const [newJobData, setNewJobData] = useState({
    title: "",
    location: "",
    terms: "",
    experience: "",
    remuneration: "",
    role: "",
    responsibilities: [],
    requirements: [],
    url: "",
  });

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure");
    if (confirm) {
      try {
        const response = await jobService.deleteJob(id);
        if (response) {
          toast("Job deleted successfully");
          setJobs((prevJobs) => prevJobs.filter((item) => item._id !== id));
        }
      } catch (error) {
        toast(error?.message);
      }
    }
  };

  const handleUpdate = (item) => {
    setCurrentItem(item);
    setUpdatedData({ ...item });
    setModalVisible(true);
  };

  const handleCreateJob = () => {
    setCreateModalVisible(true);
  };

  const handleSaveChanges = async () => {
    try {
      const response = await jobService.updateJob({
        id: currentItem._id,
        ...updatedData,
      });
      if (response) {
        toast("Changes saved successfully!");
        setModalVisible(false);
      }
    } catch (error) {
      toast(error?.message);
    }
  };

  const handleCreateNewJob = async () => {
    try {
      const response = await jobService.createJob(newJobData);
      if (response) {
        toast("Job created successfully!");
        setCreateModalVisible(false);
        setJobs((prevJobs) => [response, ...prevJobs]);
      }
    } catch (error) {
      toast(error?.message);
    }
  };

  useEffect(() => {
    jobService.getAllJobs().then((jobData) => {
      if (jobData) {
        setJobs(jobData);
      }
    });
  }, [handleSaveChanges, handleCreateNewJob]);

  if (jobs?.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-20 px-4 lg:px-20 flex items-center justify-center flex-col gap-4">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#407BFF]">
          No Jobs Available Yet!
        </h1>
        <button
          onClick={handleCreateJob}
          className="bg-green-500 text-white py-2 px-4 rounded-md mb-6 hover:bg-green-600 transition duration-300"
        >
          Create New Job
        </button>
        {createModalVisible && (
          <CreateJobModal
            newJobData={newJobData}
            setNewJobData={setNewJobData}
            setCreateModalVisible={setCreateModalVisible}
            handleCreateNewJob={handleCreateNewJob}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 lg:px-28">
      <div className="flex justify-between">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#407BFF] mb-10">
          Jobs Management
        </h1>
        <button
          onClick={handleCreateJob}
          className="bg-green-500 text-white py-2 px-4 size-fit rounded-md mb-6 hover:bg-green-600 transition duration-300"
        >
          Create New Job
        </button>
      </div>

      <div className="flex flex-wrap justify-between gap-4">
        {jobs.map((item) => (
          <JobCard
            key={item._id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Modal for Updating Job */}
      {modalVisible && (
        <UpdateJobModal
          item={currentItem}
          updatedData={updatedData}
          setUpdatedData={setUpdatedData}
          setModalVisible={setModalVisible}
          handleSaveChanges={handleSaveChanges}
        />
      )}

      {/* Modal for Creating New Job */}
      {createModalVisible && (
        <CreateJobModal
          newJobData={newJobData}
          setNewJobData={setNewJobData}
          setCreateModalVisible={setCreateModalVisible}
          handleCreateNewJob={handleCreateNewJob}
        />
      )}
    </div>
  );
};

export default JobDash;
