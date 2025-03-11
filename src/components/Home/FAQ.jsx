import React from "react";
import { Link } from "react-router-dom";
import { problems } from "../../utils/dummyData";
import Accordion from "../Common/Accordion";

const FAQ = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-[#2A6BFD] to-[#14b4f4] relative">
      {/* Top Section */}
      <div className="bg-gradient-to-b from-gray-300 via-white to-white h-full rounded-b-[48px] py-4 lg:py-10 px-4 lg:px-20">
        {/* FAQ Section */}
        <div className="wrapper">
          <div className="flex items-center justify-center pt-6 lg:pt-12 flex-wrap">
            <img src="/cloudsparrow-all-img/FourthPage.png" alt="Logo" />
            <p className="text-[10px] sm:text-[12px] text-[#2A6BFD] font-bold ml-4">
              FAQ
            </p>
            <img
              className="ml-5"
              src="/cloudsparrow-all-img/FourthPage.png"
              alt="Logo"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-4 lg:mt-7 lg:leading-16">
            <p className="text-3xl lg:text-6xl font-bold text-center">
              WHAT PROBLEM ARE
            </p>
            <p className="text-3xl lg:text-6xl font-bold text-center">
              YOU TRYING TO SOLVE?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:mt-6">
            <Accordion data={problems} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col pt-10 lg:pt-24 lg:min-h-[90vh] min-h-[36vh]">
        <div className="flex flex-wrap items-center justify-center">
          <img src="/cloudsparrow-all-img/FourthPage.png" alt="Logo" />
          <p className="text-[12px] sm:text-[14px] text-white font-bold ml-4">
            AVAILABLE FOR PROJECTS
          </p>
          <img
            className="ml-5"
            src="/cloudsparrow-all-img/FourthPage.png"
            alt="Logo"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center my-4">
          <p className="text-4xl lg:text-6xl text-white font-bold">
            LET'S BUILD YOUR
          </p>
          <p className="text-4xl lg:text-6xl text-white font-bold">
            PRODUCT TOGETHER
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-2">
          <p className="text-xs lg:text-sm text-white font-bold">
            Partner with us for a digital journey that transforms your business
            ideas
          </p>
          <p className="text-xs lg:text-sm text-white font-bold">
            into successful, cutting-edge solutions.
          </p>
          <button className="z-10 h-8 w-24 mt-4 text-[12px] text-[#2A6BFD] bg-white font-semibold rounded-[4px] hover:cursor-pointer">
            <Link to="/contact">Let's Start</Link>
          </button>
        </div>
      </div>

      {/* Footer Image */}
      <div className="hidden lg:flex justify-center w-full items-center mt-5">
        <img
          src="/cloudsparrow-all-img/FooterImage.png"
          alt="UI Design"
          className="absolute w-full shadow-lg rounded-lg bottom-0"
        />
      </div>
    </div>
  );
};

export default FAQ;
