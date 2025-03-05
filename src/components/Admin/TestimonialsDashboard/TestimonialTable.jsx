import React from 'react';

const TestimonialTable = ({ testimonials, onEdit, onDelete }) => {
  return (
    <div className="mt-6">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Company</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map((testimonial) => (
            <tr key={testimonial._id}>
              <td className="py-2 px-4 border-b">{testimonial.name}</td>
              <td className="py-2 px-4 border-b">{testimonial.company}</td>
              <td className="py-2 px-4 border-b">{testimonial.description}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => onEdit(testimonial)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(testimonial._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestimonialTable;