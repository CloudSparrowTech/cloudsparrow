import React, { useState, useEffect } from "react";

const TestimonialModal = ({ testimonial, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    avatar: "",
    logo: "",
    description: "",
  });

  useEffect(() => {
    if (testimonial) {
      setFormData({
        name: testimonial.name,
        company: testimonial.company,
        avatar: testimonial.avatar,
        logo: testimonial.logo,
        description: testimonial.description,
      });
    }
  }, [testimonial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(testimonial ? { id: testimonial._id, ...formData } : formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {testimonial ? "Edit" : "Add"} Testimonial
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full p-2 border rounded"
              required
            />
            <label htmlFor="avatar" className="btn">
              Select Avatar Image
            </label>
            <input
              className="border p-2 rounded"
              type="file"
              id="avatar"
              accept="image/*"
              placeholder="Avatar URL"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  avatar: e.target.files[0],
                })
              }
              required
            />
            <div>
              <label htmlFor="logo" className="btn">
                Select Logo Image
              </label>
              <input
                id="logo"
                className="border p-2 rounded"
                type="file"
                accept="image/*"
                placeholder="Logo URL"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    logo: e.target.files[0],
                  })
                }
                required
              />
            </div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {testimonial ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialModal;
