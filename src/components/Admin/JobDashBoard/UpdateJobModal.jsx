import React from "react";

const UpdateJobModal = ({
  item,
  updatedData,
  setUpdatedData,
  setModalVisible,
  handleSaveChanges,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayInputChange = (e, type) => {
    const { value } = e.target;
    const updatedArray = value.split("-next-").map((val) => val.trim());
    setUpdatedData((prev) => ({
      ...prev,
      [type]: updatedArray,
    }));
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-md w-full overflow-y-scroll no-scrollbar max-h-[80vh] mx-4">
        <h2 className="text-2xl font-semibold mb-4">
          Update Job: {item?.title}
        </h2>

        <label className="block text-sm font-medium mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={updatedData.title}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={updatedData.location}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">Terms</label>
        <input
          type="text"
          name="terms"
          value={updatedData.terms}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">Experience</label>
        <input
          type="text"
          name="experience"
          value={updatedData.experience}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">Remuneration</label>
        <input
          type="text"
          name="remuneration"
          value={updatedData.remuneration}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">Role</label>
        <input
          type="text"
          name="role"
          value={updatedData.role}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">URL</label>
        <input
          type="text"
          name="url"
          value={updatedData.url}
          onChange={handleInputChange}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">
          {"Responsibilities (separate-by-(-next-))"}
        </label>
        <input
          type="text"
          value={updatedData.responsibilities.join("-next-")}
          onChange={(e) => handleArrayInputChange(e, "responsibilities")}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">
          {"Requirements (separate-by-(-next-))"}
        </label>
        <input
          type="text"
          value={updatedData.requirements.join("-next-")}
          onChange={(e) => handleArrayInputChange(e, "requirements")}
          className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
        />

        <div className="flex justify-end gap-4">
          <button
            onClick={() => setModalVisible(false)}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveChanges}
            className="bg-[#407BFF] text-white py-2 px-4 rounded-md hover:bg-[#335c99]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateJobModal;
