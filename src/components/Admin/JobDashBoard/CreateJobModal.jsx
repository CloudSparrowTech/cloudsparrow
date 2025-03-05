import React from "react";

const CreateJobModal = ({
  newJobData,
  setNewJobData,
  setCreateModalVisible,
  handleCreateNewJob,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJobData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayInputChange = (e, type) => {
    const { value } = e.target;
    const updatedArray = value.split("-next-").map((val) => val.trim());
    setNewJobData((prev) => ({
      ...prev,
      [type]: updatedArray,
    }));
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-md w-full overflow-y-scroll no-scrollbar max-h-[80vh] mx-4">
        <h2 className="text-2xl font-semibold mb-4">Create New Job</h2>

        <label className="block text-sm font-medium mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={newJobData.title}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={newJobData.location}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">Terms</label>
        <input
          type="text"
          name="terms"
          value={newJobData.terms}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">Experience</label>
        <input
          type="text"
          name="experience"
          value={newJobData.experience}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">Remuneration</label>
        <input
          type="text"
          name="remuneration"
          value={newJobData.remuneration}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">Role</label>
        <input
          type="text"
          name="role"
          value={newJobData.role}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">URL</label>
        <input
          type="text"
          name="url"
          value={newJobData.url}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">
          {"Responsibilities (separate-by-(-next-))"}
        </label>
        <input
          type="text"
          value={newJobData.responsibilities.join("-next-")}
          onChange={(e) => handleArrayInputChange(e, "responsibilities")}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">
          {"Requirements (separate-by-(-next-))"}
        </label>
        <input
          type="text"
          value={newJobData.requirements.join("-next-")}
          onChange={(e) => handleArrayInputChange(e, "requirements")}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <div className="flex justify-end gap-4">
          <button
            onClick={() => setCreateModalVisible(false)}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateNewJob}
            className="bg-[#407BFF] text-white py-2 px-4 rounded-md hover:bg-[#335c99]"
          >
            Create Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateJobModal;
