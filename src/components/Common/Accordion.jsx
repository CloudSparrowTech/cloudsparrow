import { useState } from "react";

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full p-4 bg-white text-left"
          >
            <span className="text-lg font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "p-4 bg-gray-50" : "max-h-0"
            }`}
          >
            <ul className="text-gray-700 list-disc pl-6">
              {item.content.map((content, index) => (
                <li key={index} className="py-2">
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
