import React, { useState } from "react";
import Overlay from "../../Contact/Overlay";
import Header from "../../Common/Header";

const certificatesData = [
  {
    title: "MSME Certification",
    description:
      "Enjoy the benefits of government schemes and subsidies with MSME Certificate.",
    schemes: [
      "Easy Access to Loans & Tax Benefits",
      "Credit Guarantee Schemes",
      "Market Development Assistance",
      "Interest Rate Subsidies",
      "Tender Preferences",
      "Business Growth Opportunities",
    ],
  },
  {
    title: "Start up India Certification",
    description:
      "Gain eligibility for various government grants, and funding opportunities with Startup India Certificate.",
    schemes: [
      "Access to Government Grants",
      "Seed Funding Registration",
      "Easier Public Procurement",
      "Fast-Track IP and Patent Assistance",
      "Get Tax Exemptions",
      "Free Partner Services",
    ],
  },
  {
    title: "Tax Exemption Certification",
    description:
      "Enjoy the benefits of government schemes and subsidies with MSME Certificate.",
    schemes: [
      "Easy Access to Loans & Tax Benefits",
      "Credit Guarantee Schemes",
      "Market Development Assistance",
      "Interest Rate Subsidies",
      "Tender Preferences",
      "Business Growth Opportunities",
    ],
  },
  {
    title: "Other Certification",
    schemes: [
      "NSIC certification",
      "ISO certification",
      "NGO Darpan",
      "FSSAI license",
      "Import-Export Licensing",
      "DSC/DIN",
      "12A/80G",
      "GST Registration",
      "80 IAC Tax Benefits",
    ],
  },
];

const Certification = () => {
  return (
    <div className="min-h-screen">
      <Header
        heading="Certifications"
        description={[
          "Unlock growth opportunities and benefits with essential certifications for MSMEs and startups.",
        ]}
        image="/cloudsparrow-all-img/certificate.webp"
      />
      {certificatesData.map((certificate, idx) => {
        return (
          <Card
            key={certificate.title}
            bgcolor={idx % 2 === 0 ? "white" : "#C4E9FE"}
            data={certificate}
          />
        );
      })}
    </div>
  );
};

const Card = ({ bgcolor, data }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className="flex flex-col items-center text-center justify-between gap-6 lg:gap-10 py-10 lg:py-20"
    >
      {showOverlay && (
        <Overlay
          service={data.title}
          description={data.description}
          setShowOverlay={setShowOverlay}
        />
      )}
      <h1 className="text-4xl font-bold">{data.title}</h1>
      {data.description && <p>{data.description}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
        {data.schemes.map((scheme) => {
          return (
            <div className="p-4 bg-blue-100 rounded-md">
              <p>{scheme}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setShowOverlay(!showOverlay)}
        className="bg-blue-900 text-white w-fit font-medium px-6 lg:px-8 py-2 lg:py-4 rounded-lg"
      >
        Get Expert Advice
      </button>
    </div>
  );
};

export default Certification;
