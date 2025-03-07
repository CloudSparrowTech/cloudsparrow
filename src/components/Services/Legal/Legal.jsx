import React from "react";

const insightData = [
  {
    description: "Reduced Business Risks",
  },
  {
    description: "Improved Business Efficiency",
  },
  {
    description: "Increased Legal Fee Savings",
  },
  {
    description: "Higher Industry Impact",
  },
];

const approachData = [
  {
    title: "Comprehensive Assessment",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-1-Consultation.eb97f9bb.webp&w=1080&q=75",
  },
  {
    title: "Customized Solutions",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquick-application-process.fd8d0f0a.webp&w=1080&q=75",
  },
  {
    title: "Proactive Compliance",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpert-guidance.666f3d6a.webp&w=1080&q=75",
  },
  {
    title: "Expert Advice",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflexible-terms.7e59ddcf.webp&w=1080&q=75",
  },
  {
    title: "Documentation & Filing",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransparent-services.c34cff45.webp&w=1080&q=75",
  },
];

const Legal = () => {
  return (
    <div className="min-h-screen">
      <div className="flex gap-4 flex-col-reverse lg:flex-row py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 lg:min-h-[74vh]">
        <div className="flex-6 text-white text-center lg:text-left flex justify-center items-center">
          <div className="lg:w-[70%] px-6 flex flex-col items-center lg:items-start gap-4">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Legal & Compliances
            </h1>
            <p>
              We provide 360° support for all legal aspects, including company
              registration, compliance audits, and contract management.
            </p>
            <p>Ready to streamline your legal processes?</p>
            <button className="px-8 py-4 rounded-lg bg-blue-900 w-fit cursor-pointer">
              Get Legal Assistance
            </button>
          </div>
        </div>
        <div className="lg:flex-4 flex justify-center items-center">
          <img
            className="size-44"
            src="/cloudsparrow-all-img/legal.webp"
            alt="legal"
          />
        </div>
      </div>
      <div className="px-4 lg:px-20 py-10 lg:py-30 text-center bg-blue-100 ">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-10">
          The Legal & Compliance Advantages
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          {insightData.map((data) => {
            return <InsightCard key={data.label} data={data} />;
          })}
        </div>
      </div>
      <div className="px-4 lg:px-20 py-10 lg:py-30 text-center">
        <h1 className="text-4xl font-bold mb-4 lg:mb-10">Our Approach</h1>
        <div className="flex flex-col lg:flex-row lg:gap-6 items-center justify-center lg:text-left">
          {approachData.map((data) => {
            return <ApproachCard key={data.title} data={data} />;
          })}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 py-10 lg:py-30 text-center bg-gradient-to-b from-blue-100 via-blue-100 to-red-100">
        <h1 className="text-xl max-w-3xl lg:text-5xl font-medium">
          Contact Us for Expert Legal & Compliance Support!
        </h1>
        <button className="bg-blue-900 text-white w-fit font-medium px-6 lg:px-8 py-2 lg:py-4 rounded-lg">
          Get Expert Guidance
        </button>
      </div>
    </div>
  );
};

const InsightCard = ({ data }) => {
  return (
    <div className="w-full lg:w-72 bg-gradient-to-b from-white to-violet-50 py-4 px-6 overflow-hidden rounded-lg shadow-lg">
      <p className="font-medium">{data.description}</p>
    </div>
  );
};

const ApproachCard = ({ data }) => {
  return (
    <div className="flex lg:flex-col px-6 justify-between items-center gap-4 w-full lg:w-fit py-6 lg:py-2 overflow-hidden">
      <div className="p-4 rounded-full bg-gradient-to-b from-blue-100 via-blue-100 to-red-100 w-fit">
        <img className="size-16" src={data.img} alt={data.title} />
      </div>
      <h4 className="font-medium">{data.title}</h4>
    </div>
  );
};

export default Legal;
