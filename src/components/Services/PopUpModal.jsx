import {
  AiOutlineClose,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from "react-icons/ai";
import { useState } from "react";

const PopUpModal = ({ data, show, onClose }) => {
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    if (index === 0) {
      return;
    }
    setIndex((prev) => prev - 1);
  };

  const handleRight = () => {
    if (index === data.length - 1) {
      return;
    }
    setIndex((prev) => prev + 1);
  };
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center mx-4 sm:mx-10">
      <div className="bg-blue-100 p-4 lg:p-6 rounded-lg shadow-lg">
        <AiOutlineClose
          color="black"
          size={20}
          onClick={onClose}
          className="cursor-pointer"
        />

        <div className="relative text-black text-xs uppercase font-medium">
          <img
            src={data[index].image}
            alt=""
            className="w-4xl h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[440px] rounded-lg shadow-lg mt-4"
          />

          {/* Left Button */}
          <button
            onClick={handleLeft}
            disabled={index === 0}
            className="absolute min-h-full px-4 sm:px-6 top-0 left-0 cursor-pointer rounded-l-lg disabled:hidden hover:bg-gray-900 hover:opacity-50"
          >
            <AiOutlineLeftCircle color="black" size={40} />
          </button>

          {/* Right Button */}
          <button
            onClick={handleRight}
            disabled={index === data.length - 1}
            className="absolute min-h-full px-4 sm:px-6 top-0 right-0 cursor-pointer rounded-r-lg disabled:hidden hover:bg-gray-900 hover:opacity-50"
          >
            <AiOutlineRightCircle color="black" size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
