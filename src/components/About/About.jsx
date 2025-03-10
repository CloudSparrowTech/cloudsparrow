import React from "react";
import Header from "../Common/Header";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header
        heading={"We create brands that get noticed"}
        image={"/cloudsparrow-all-img/about.png"}
      />
      <div className="">
        <div className="flex flex-col lg:flex-row border-b-2 border-[#9CA7AA] w-full lg:h-[33vh]">
          <div className="lg:py-0 py-6 w-full lg:border-r-2 lg:border-b-0 border-b-2 border-[#9CA7AA] flex lg:flex-col gap-4 items-center justify-evenly lg:justify-center text-center">
            <h1 className="text-5xl font-medium">99%</h1>
            <p className="text-[#EC4918] font-medium">
              Client Satisfaction Rate
            </p>
          </div>
          <div className="lg:py-0 py-10 w-full lg:border-r-2 lg:border-b-0 border-b-2 border-[#9CA7AA] flex lg:flex-col gap-4 items-center justify-evenly lg:justify-center text-center">
            <h1 className="text-5xl font-medium">5+</h1>
            <p className="text-[#EC4918] font-medium">Years of Expertise</p>
          </div>
          <div className="lg:py-0 py-10 w-full lg:border-r-2 lg:border-b-0 border-b-2 border-[#9CA7AA] flex lg:flex-col gap-4 items-center justify-evenly lg:justify-center text-center">
            <h1 className="text-5xl font-medium">200+</h1>
            <p className="text-[#EC4918] font-medium">
              Successful Projects Delivered
            </p>
          </div>
          <div className="lg:py-0 py-10 w-full flex lg:flex-col gap-4 items-center justify-evenly lg:justify-center text-center">
            <h1 className="text-5xl font-medium">50+</h1>
            <p className="text-[#EC4918] font-medium">
              Trusted Clients & Growing
            </p>
          </div>
        </div>
        <div className="flex lg:pt-20 lg:px-50 px-4 pt-10">
          <div className="lg:w-[60%]">
            <h1 className="text-3xl lg:text-6xl font-medium lg:leading-20 text-[#1F252B]">
              Increase <span className="text-[#F48B3A]">your leads</span> with{" "}
              <span className="text-[#EC4918]"> Expert Digital</span> Strategy
              and <span className="text-[#58B9F8]">Design</span>
            </h1>
            <p className="text-[#1F252B] text-xs lg:text-sm font-medium lg:mt-10 mt-4">
              At Cloud Sparrow, our team comprises highly skilled professionals
              with deep expertise in their respective fields. From tech-savvy
              developers and creative digital artists to innovative marketers
              and content strategists, we bring together the best minds to
              deliver top-notch digital solutions.
            </p>
            <p className="text-[#1F252B] text-xs lg:text-sm font-medium my-4">
              We specialize in a full spectrum of online marketing services,
              leveraging cutting-edge web technologies to ensure the highest
              standards of quality and commitment. Our dedicated team
              continuously monitors and optimizes online accounts across popular
              social platforms, ensuring that we exceed client expectations with
              every project.
            </p>
            <p className="text-[#1F252B] text-xs lg:text-sm font-medium lg:mb-10 mb-4">
              Based in India, we provide both offshore and on-site services for
              software development companies and end-users, working across
              various hardware and software platforms, including Linux, Windows,
              and Apache. Additionally, we utilize advanced technologies like
              HTML, PHP, and modern frameworks to deliver unparalleled solutions
              tailored to your business needs.
            </p>
          </div>
          <div className="hidden relative w-[40%] lg:flex items-end">
            <div className="w-full"></div>
            <div className="w-full bg-[#1B76FF] h-full rounded-tr-4xl"></div>{" "}
            {/* Fixed rounded-tr-4xl */}
            <img
              className="absolute"
              src="/cloudsparrow-all-img/mancutout.png"
              alt="Man Cutout"
            />
          </div>
        </div>
      </div>

      <div
        className="hidden lg:block pt-4 pb-4 lg:pt-12 lg:pb-20 px-10 lg:px-50 bg-[#F6F6F6] text-[#1F252B]" // Fixed pt-50
      >
        <h1 className="text-3xl lg:text-6xl font-medium lg:leading-20 mb-4 lg:mb-0">
          So, Are You <span className="text-[#EC4918]">Ready</span> To Enhance{" "}
          <br className="hidden lg:block" />
          Your <span className="text-[#1B76FF]">Business</span>{" "}
          <br className="hidden lg:block" /> With Us?
        </h1>
        <div className="h-[80vh] flex flex-col gap-6">
          <div className="flex h-full gap-4">
            <div className="flex items-end justify-end w-[30%] h-full">
              <img
                src="/cloudsparrow-all-img/guysandgirls.png"
                alt="Guys and Girls"
                className="size-60 rounded-2xl"
              />
            </div>
            <div className="w-[70%] h-full">
              <img
                src="/cloudsparrow-all-img/meating.png"
                alt="Meeting"
                className="w-full h-[90%] rounded-2xl"
              />
            </div>
          </div>
          <div className="flex h-full gap-4">
            <div className="w-[40%]">
              <img
                src="/cloudsparrow-all-img/discussion.png"
                alt="Discussion"
                className="size-full rounded-2xl"
              />
            </div>
            <div className="flex flex-col w-[60%] justify-between items-start px-[30px] pt-0">
              {" "}
              {/* Fixed px-30 */}
              <p className="font-medium">
                Our primary goal is to empower clients with knowledge of the
                latest website development technologies, enabling them to
                effectively promote their business models. By leveraging
                cutting-edge technology, top-tier quality, and a comprehensive
                service portfolio, we strive to achieve complete customer
                satisfaction.
              </p>
              <button className="uppercase py-3 px-10 bg-[#F48B3A] rounded-md text-xs font-medium text-white">
                <Link to="/contact">Get Started Now!</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
