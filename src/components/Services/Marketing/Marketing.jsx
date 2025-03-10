import React, { useState } from "react";
import Header from "../../Common/Header";
import Overlay from "../../Contact/Overlay";
import { SERVICES } from "../../../utils/dummyData";

const approachData = [
  {
    title: "Planning",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-1-Consultation.eb97f9bb.webp&w=1080&q=75",
  },
  {
    title: "Designing",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquick-application-process.fd8d0f0a.webp&w=1080&q=75",
  },
  {
    title: "Development",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpert-guidance.666f3d6a.webp&w=1080&q=75",
  },
  {
    title: "Testing",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflexible-terms.7e59ddcf.webp&w=1080&q=75",
  },
  {
    title: "Deployment",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransparent-services.c34cff45.webp&w=1080&q=75",
  },
];

const ITServices = () => {
  return (
    <div className="min-h-screen">
      <Header
        heading="Marketing Services"
        description={[
          "Whether you’re starting from scratch or scaling up, we provide the expertise at every stage.",
        ]}
        image="/cloudsparrow-all-img/marketing.webp"
      />
      <div className="bg-blue-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4 md:px-16 lg:px-40">
        {SERVICES.map((service) => {
          return <ServiceCard key={service.title} data={service} />;
        })}
      </div>
      <div className="px-4 lg:px-20 py-10 lg:py-30 text-center">
        <h1 className="text-4xl font-bold mb-4 lg:mb-10">Our Approach</h1>
        <div className="flex flex-col lg:flex-row lg:gap-6 items-center justify-center lg:text-left">
          {approachData.map((data) => {
            return <ApproachCard key={data.title} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ data }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div
      style={{ backgroundColor: data.bgcolor, color: data.color }}
      className="flex flex-col min-h-80 justify-between pt-6 overflow-hidden rounded-lg shadow-lg"
    >
      {showOverlay && (
        <Overlay
          service={data.title}
          description={data.content}
          setShowOverlay={setShowOverlay}
        />
      )}
      <div className="flex-3 px-4 pb-2">
        <div className="font-bold">
          <h3 className="text-lg">Un-Put-Downable</h3>
          <h1 className="text-4xl">{data.title}</h1>
        </div>
        <div className="my-2">
          <p className="text-gray-600">{data.content}</p>
        </div>
        <div className="px-4">
          <ul className="list-disc">
            {data.features.map((feature) => {
              return <li key={feature}>{feature}</li>;
            })}
          </ul>
        </div>
      </div>
      <button
        onClick={() => setShowOverlay(true)}
        className="py-2 px-8 bg-blue-700 border border-blue-700 hover:bg-white hover:text-blue-700 text-white rounded-b-lg text-center cursor-pointer"
      >
        Get Consultation
      </button>
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

export default ITServices;
