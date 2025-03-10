import React from "react";

const Header = ({ heading, description = [], image, btn }) => {
  return (
    <div className="flex gap-4 flex-col-reverse lg:flex-row py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 lg:min-h-[74vh]">
      <div className="flex-6 text-white text-center lg:text-left flex justify-center items-center">
        <div className="lg:w-[70%] px-6 flex flex-col items-center lg:items-start gap-4">
          <h1 className="text-3xl lg:text-5xl font-bold">{heading}</h1>
          {description.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}
          {btn && (
            <button
              onClick={btn.action}
              className="px-8 py-3 rounded-lg bg-blue-900 w-fit cursor-pointer"
            >
              {btn.title}
            </button>
          )}
        </div>
      </div>
      <div className="lg:flex-4 flex justify-center items-center">
        <img className="size-44" src={image} alt="certificate" />
      </div>
    </div>
  );
};

export default Header;
