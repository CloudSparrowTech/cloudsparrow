import React from "react";

const JobDashCard = ({ item, onUpdate, onDelete, error }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-semibold text-[#1F252B] mb-4">
        {item.title}
      </h2>

      <div className="max-h-48 overflow-y-scroll no-scrollbar">
        <p className="text-sm text-gray-500 mb-2">Location: {item.location}</p>
        <p className="text-sm text-gray-500 mb-2">Terms: {item.terms}</p>
        <p className="text-sm text-gray-500 mb-2">
          Experience: {item.experience}
        </p>
        <p className="text-sm text-gray-500 mb-2">
          Remuneration: {item.remuneration}
        </p>
        <p className="text-sm text-gray-500 mb-2">Role: {item.role}</p>
        <p className="text-sm text-gray-500 mb-4">
          Responsibilities: {item.responsibilities.join(", ")}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Requirements: {item.requirements.join(", ")}
        </p>
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={() => onUpdate(item)}
          className="bg-[#407BFF] text-white py-2 px-4 rounded-md hover:bg-[#335c99] transition duration-300"
        >
          Update
        </button>
        <button
          disabled={error}
          onClick={() => onDelete(item._id)}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobDashCard;
