import React, { useState } from "react";
import Header from "../../Common/Header";
import Overlay from "../../Contact/Overlay";

const insightData = [
  {
    label: "UP TO",
    title: "₹1 CRORE",
    description: "Without collateral",
  },
  {
    label: "FROM",
    title: "16%-26%",
    description: "(Flat 10%-14%) Interest rates",
  },
  {
    label: "OVER",
    title: "1 MILLION",
    description: "Businesses benefited",
  },
  {
    label: "LEND OVER",
    title: "₹2 TRILLION",
    description: "Annually",
  },
];

const approachData = [
  {
    title: "1:1 Consultation",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-1-Consultation.eb97f9bb.webp&w=1080&q=75",
  },
  {
    title: "Quick Application Process",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquick-application-process.fd8d0f0a.webp&w=1080&q=75",
  },
  {
    title: "Expert Guidance",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpert-guidance.666f3d6a.webp&w=1080&q=75",
  },
  {
    title: "Flexible Terms",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflexible-terms.7e59ddcf.webp&w=1080&q=75",
  },
  {
    title: "Transparent Services",
    img: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransparent-services.c34cff45.webp&w=1080&q=75",
  },
];

const NBFC = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="min-h-screen">
      {showOverlay && (
        <Overlay
          service={"NBFC"}
          description={"NBFC"}
          setShowOverlay={setShowOverlay}
        />
      )}
      <Header
        heading="NBFC Loans"
        description={[
          "Non-Banking Financial Companies (NBFCs) offer a range of loan products with flexible terms & conditions, catering to the needs of MSMEs and startups.",
          "Ready to expand your business? Let's get started today!",
        ]}
        image="/cloudsparrow-all-img/nbfc.webp"
        btn={{ title: "Apply Now", action: () => setShowOverlay(true) }}
      />
      <div className="px-4 lg:px-20 py-10 lg:py-30 text-center bg-blue-100 ">
        <h1 className="text-4xl font-bold mb-4 lg:mb-10">Insights</h1>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center lg:text-left">
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
          Empower Your Business with the Right Financial Support!
        </h1>
        <button
          onClick={() => setShowOverlay(true)}
          className="bg-blue-900 text-white w-fit font-medium px-6 lg:px-8 py-2 lg:py-4 rounded-lg"
        >
          Discover How!
        </button>
      </div>
    </div>
  );
};

const InsightCard = ({ data }) => {
  return (
    <div className="flex flex-col justify-between w-full lg:w-64 bg-gradient-to-b from-white to-violet-50 py-6 lg:py-2 overflow-hidden rounded-lg shadow-lg">
      <div className="px-4">
        <div className="text-orange-400 font-bold">
          <h3 className="text-lg">{data.label}</h3>
          <h1 className="text-3xl">{data.title}</h1>
        </div>
        <div className="my-2">
          <h4 className="font-medium">{data.description}</h4>
        </div>
      </div>
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

export default NBFC;
