import React, { useEffect, useState } from "react";
import enquiryService from "../../backend/enquiry";
import { toast } from "react-toastify";

const EnquiryDash = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    description: "",
  });

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      try {
        const response = await enquiryService.deleteEnquiry(id);
        if (response) {
          toast("deleted successfully");
        }
      } catch (error) {
        toast(error?.message);
      }
    }
  };

  const handleUpdate = (item) => {
    setCurrentItem(item);
    setUpdatedData({ ...item }); // Set the data to the current item's values
    setModalVisible(true); // Show the modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (service) => {
    setUpdatedData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSaveChanges = async () => {
    try {
      const response = await enquiryService.updateEnquiry({
        id: currentItem._id,
        ...updatedData,
      });
      if (response) {
        toast("changes saved!");
        setModalVisible(false);
      }
    } catch (error) {
      toast(error?.message);
    }
  };

  useEffect(() => {
    enquiryService.getAllEnquiries().then((enquiriesData) => {
      if (enquiriesData) {
        setEnquiries(enquiriesData);
      }
    });
  }, [handleSaveChanges]);

  if (enquiries?.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-20 px-4 lg:px-20 flex items-center justify-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#407BFF]">
          No Enquiries Yet!
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 lg:px-28">
      <h1 className="text-3xl lg:text-5xl font-bold text-[#407BFF] mb-10">
        Enquiries Management
      </h1>
      <div className="flex flex-wrap justify-between gap-4">
        {enquiries.map((item) => (
          <div
            key={item._id}
            className="bg-white p-6 rounded-lg shadow-lg w-96"
          >
            <h2 className="text-2xl font-semibold text-[#1F252B] mb-4">
              {item.name}
            </h2>
            <p className="text-sm text-gray-500 mb-2">Email: {item.email}</p>
            <p className="text-sm text-gray-500 mb-2">Phone: {item.phone}</p>
            <p className="text-sm text-gray-500 mb-4">
              Services:{" "}
              {item.services.map((service) => (
                <span
                  key={service}
                  className="inline-block bg-[#F48B3A] text-white text-xs rounded-md py-1 px-2 mr-2 mb-2"
                >
                  {service.charAt(0).toUpperCase() + service.slice(1)}
                </span>
              ))}
            </p>
            <p className="text-sm text-gray-700 mb-4">{item.description}</p>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => handleUpdate(item)}
                className="bg-[#407BFF] text-white py-2 px-4 rounded-md hover:bg-[#335c99] transition duration-300"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {modalVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-semibold mb-4">
              Update : {currentItem?.name}
            </h2>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={updatedData.name}
              onChange={handleInputChange}
              className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
            />

            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={updatedData.email}
              onChange={handleInputChange}
              className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
            />

            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="text"
              name="number"
              value={updatedData.number}
              onChange={handleInputChange}
              className="bg-gray-100 border border-gray-300 rounded-md w-full p-2 mb-4"
            />

            <label className="block text-sm font-medium mb-2">Services</label>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[
                "ecommerce",
                "design",
                "marketing",
                "webdevelopment",
                "shopify",
              ].map((service) => (
                <div key={service} className="flex items-center">
                  <input
                    type="checkbox"
                    id={service}
                    checked={updatedData?.services?.includes(service)}
                    onChange={() => handleServiceChange(service)}
                    className="mr-2"
                  />
                  <label htmlFor={service} className="text-sm">
                    {service.charAt(0).toUpperCase() + service.slice(1)}
                  </label>
                </div>
              ))}
            </div>

            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={updatedData.description}
              onChange={handleInputChange}
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
      )}
    </div>
  );
};

export default EnquiryDash;
