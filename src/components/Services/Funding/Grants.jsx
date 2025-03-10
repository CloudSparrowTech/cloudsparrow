import React, { useState } from "react";
import Header from "../../Common/Header";
import Overlay from "../../Contact/Overlay";

const grantsData = [
  {
    name: "Seed Fund",
    funding_amount: "₹20 LAKH",
    description:
      "Offers funding for DPIIT recognized startups with innovative & scalable models.",
  },
  {
    name: "Global Impact Grant",
    funding_amount: "₹1.64 CRORE",
    description:
      "Provides tiered funding for impactful and scalable projects across various sectors.",
  },
  {
    name: "MSME Design",
    funding_amount: "₹40 LAKH",
    description:
      "Offers support for product design in sectors like agriculture and electronics.",
  },
  {
    name: "RKVY RAFTAAR",
    funding_amount: "₹25 LAKH",
    description:
      "Focuses on agri-tech and related sectors, providing funding & incubation support.",
  },
  {
    name: "TIDE 2.0",
    funding_amount: "₹7 LAKH",
    description:
      "Supports tech startups in areas like health tech, and green energy.",
  },
  {
    name: "Nidhi Prayas",
    funding_amount: "₹10 LAKH",
    description: "Supports physical product based startups across all sectors.",
  },
  {
    name: "Product Development Grant",
    funding_amount: "₹5 LAKH",
    description:
      "Provides funding for tech-based hardware/physical products from all sectors.",
  },
  {
    name: "Seed Fund (MH)",
    funding_amount: "₹10 LAKH",
    description:
      "Aimed at Maharashtra-based startups in sectors like healthcare and agritech.",
  },
  {
    name: "Grant for Textile",
    funding_amount: "₹50 LAKH",
    description:
      "Supports technical textiles, focusing on self-reliance and high-performance fabrics.",
  },
  {
    name: "Young Innovators Grant",
    funding_amount: "₹20 LAKH",
    description: "Provides funding for young innovators under 25 across India.",
  },
  {
    name: "Grant for Defense and Aerospace",
    funding_amount: "₹1.5 CRORE",
    description: "Targets innovations in defense and aerospace.",
  },
  {
    name: "Pitch-Pilot-Program (3P)",
    funding_amount: "₹20 LAKH",
    description:
      "Encourages water solutions innovations, requiring DPIIT recognition for eligibility.",
  },
];

const Grants = () => {
  return (
    <div className="min-h-screen">
      <Header
        heading="Government Grants"
        description={[
          "Government grants are financial awards provided by the government to fund specific projects or initiatives.",
          "We help you with documentation, online application filing, & coordinate with authorities to ensure a smooth process.",
        ]}
        image="/cloudsparrow-all-img/grants.webp"
      />
      <div className="bg-blue-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4 md:px-16 lg:px-40">
        {grantsData.map((data) => {
          return <Card key={data.name} data={data} />;
        })}
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="flex flex-col min-h-80 justify-between bg-gradient-to-b from-white to-violet-50 pt-6 overflow-hidden rounded-lg shadow-lg">
      {showOverlay && (
        <Overlay
          service={data.name}
          description={data.description}
          setShowOverlay={setShowOverlay}
        />
      )}
      <div className="flex-3 px-4">
        <div className="text-orange-400 font-bold">
          <h3 className="text-2xl">UP TO</h3>
          <h1 className="text-5xl">{data.funding_amount}</h1>
        </div>
        <div className="my-2">
          <h4 className="text-xl font-medium">{data.name}</h4>
          <p className="text-gray-700">{data.description}</p>
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

export default Grants;
