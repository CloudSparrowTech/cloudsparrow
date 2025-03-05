import React, { useEffect, useState } from "react";
import Testimonials from "../../../backend/testimonials"; // Adjust the import path as necessary
import imageService from "../../../backend/ImageManager"; // Adjust the import path as necessary
import TestimonialModal from "./TestimonialModal";
import TestimonialTable from "./TestimonialTable";

const TestimonialsDashboard = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const data = await Testimonials.getAllTestimonials();
      setTestimonials(data);
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
    }
  };

  const handleCreate = async (testimonial) => {
    try {
      const { imageUrl: avatar } = await imageService.uploadImage(
        testimonial.avatar
      );
      (avatar);
      const { imageUrl: logo } = await imageService.uploadImage(
        testimonial.logo
      );
      (logo);
      await Testimonials.createTestimonials({ ...testimonial, avatar, logo });
      fetchTestimonials();
    } catch (error) {
      console.error("Failed to create testimonial:", error);
    }
  };

  const handleUpdate = async (testimonial) => {
    try {
      const { imageUrl: avatar } = await imageService.uploadImage(
        testimonial.avatar
      );
      (avatar);
      const { imageUrl: logo } = await imageService.uploadImage(
        testimonial.logo
      );
      (logo);
      await Testimonials.updateTestimonials({ ...testimonial, avatar, logo });
      fetchTestimonials();
    } catch (error) {
      console.error("Failed to update testimonial:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await Testimonials.deleteTestimonials(id);
      fetchTestimonials();
    } catch (error) {
      console.error("Failed to delete testimonial:", error);
    }
  };

  const openModal = (testimonial = null) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <div className="px-4 py-20">
      <button
        onClick={() => openModal()}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Testimonial
      </button>
      <TestimonialTable
        testimonials={testimonials}
        onEdit={openModal}
        onDelete={handleDelete}
      />
      {isModalOpen && (
        <TestimonialModal
          testimonial={selectedTestimonial}
          onClose={closeModal}
          onSubmit={selectedTestimonial ? handleUpdate : handleCreate}
        />
      )}
    </div>
  );
};

export default TestimonialsDashboard;
