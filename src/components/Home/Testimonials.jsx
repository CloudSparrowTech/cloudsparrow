import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import testimonialsService from "../../backend/testimonials";

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -330 : 330,
        behavior: "smooth",
      });
    }
  };

  const getData = async () => {
    try {
      const data = await testimonialsService.getAllTestimonials();
      if (data) {
        setTestimonials(data);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col h-full py-2 mx-6 lg:py-16 lg:mx-32">
      <div className="flex items-center mt-6">
        <img
          src="/cloudsparrow-all-img/FourthPage.png"
          alt="Cloud Sparrow Logo"
          className="w-auto"
        />
        <p className="text-[#2A6BFD] font-bold text-[16px] ml-3">
          TESTIMONIALS
        </p>
      </div>

      <div className="lg:flex">
        <div className="flex-1">
          <div className="mt-4 md:min-w-md lg:mt-8">
            <h2 className="text-3xl lg:text-5xl font-bold lg:leading-12">
              WHAT OUR HAPPY CUSTOMERS SAY
            </h2>
            <p className="text-sm mt-4 font-medium text-gray-700">
              {" "}
              Here the reviews that we got from our customers
            </p>
          </div>

          <button className="mt-6 h-10 w-36 text-[14px] bg-[#2A6BFD] text-white font-semibold rounded-[6px]">
            <Link to="/contact">Work With Us</Link>
          </button>

          <div className="flex flex-col mt-6 lg:mt-12">
            <p className="mb-6 text-sm font-medium text-gray-700">
              Satisfied customers! 😮
            </p>
            <div className="flex gap-2">
              <div className="relative flex items-center overflow-hidden w-36 h-10">
                <img
                  className="size-10"
                  src="/cloudsparrow-all-img/Ellipse 3.png"
                  alt="Customer 1"
                />
                <img
                  className="size-10 ml-8"
                  src="/cloudsparrow-all-img/Ellipse 4.png"
                  alt="Customer 2"
                />
                <img
                  className="size-10 ml-16"
                  src="/cloudsparrow-all-img/Ellipse 5.png"
                  alt="Customer 3"
                />
                <FaCirclePlus className="ml-24 mb-1 rounded-full border border-white size-8 text-[#2A6BFD] bg-white" />
              </div>
              <div
                className="text-sm max-w-32 font-medium text-[#0C0C0C]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <Link to="/careers">Join them now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-2 flex justify-start items-center gap-4 overflow-hidden">
          <IoIosArrowDropleftCircle
            onClick={() => scroll("left")}
            className="hidden lg:block rounded-full size-14 cursor-pointer"
          />
          <div
            ref={scrollRef}
            className="overflow-x-scroll no-scrollbar mt-10 flex gap-6"
          >
            {testimonials.length > 0 ? (
              testimonials.map((testimonial) => (
                <Card key={testimonial.$id} {...testimonial} /> // Fixed key to $id for Appwrite
              ))
            ) : (
              <p className="text-[#0C0C0C] text-sm">
                No testimonials available yet.
              </p>
            )}
          </div>
          <IoIosArrowDroprightCircle
            onClick={() => scroll("right")}
            className="hidden lg:block rounded-full size-14 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ description, name, company, avatar, logo }) => {
  return (
    <div
      className="flex flex-col justify-between border border-[#E5E5E5] rounded-2xl max-w-sm lg:w-[360px] h-auto p-6 flex-shrink-0" // Adjusted w-sm to w-[360px]
    >
      <div className="flex items-center justify-between">
        <FaQuoteLeft className="text-blue-500 text-2xl" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-blue-500" />
          ))}
        </div>
      </div>

      <p className="text-[16px] text-[#0C0C0C] my-6 line-clamp-5">
        {description}
      </p>
      <div className="my-2 bg-gradient-to-r from-white via-black to-white h-1 w-full"></div>

      <div className="flex justify-between gap-4 items-center">
        <div className="flex gap-2">
          <img src={avatar} alt="Customer" className="size-10" />
          <div className="text-[#323232]">
            <h1 className="text-sm font-bold">{name}</h1>
            <p className="text-sm">{company}</p>
          </div>
        </div>
        <div>
          <img src={logo} alt="Company Logo" className="h-7 w-16" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
