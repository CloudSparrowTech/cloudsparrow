import React, { useState } from "react";
import Header from "../../Common/Header";
import Overlay from "../../Contact/Overlay";
import { Link } from "react-router-dom";

const loansData = [
  {
    name: "Startup India Seed Fund Scheme (SISFS)",
    funding_amount: "₹50 LAKH",
    description:
      "Supports loans at a low interest rate of 6.5% and a 12 month moratorium period.",
  },
  {
    name: "Financial Assistance for SC, ST & OBC",
    funding_amount: "₹10 L - ₹15 CR",
    description: "Supports SC, ST, and OBC entrepreneurs across all sectors.",
  },
  {
    name: "Prime Minister Mudra Yojna (PMMY)",
    funding_amount: "₹10 LAKH",
    description:
      "Provides funding options with interest rates ranging from 7% to 12%.",
  },
  {
    name: "Prime Minister Employment Generation Program",
    funding_amount: "₹50 LAKH",
    description: "PMEGP offers low-interest loans between 8% and 12%.",
  },
  {
    name: "CGTMSE",
    funding_amount: "₹5 CRORE",
    description:
      "Credit Guarantee Fund Trust for Micro and Small Enterprises supports small businesses by offering interest rates between 7% and 12%.",
  },
  {
    name: "National Agri Infra Financing Facility (NAIFF)",
    funding_amount: "₹2 CRORE",
    description:
      "Supports infrastructure development in agri-business at a 6% effective interest rate.",
  },
  {
    name: "Animal Husbandry Infrastructure Development Fund (AHIDF)",
    funding_amount: "₹50 CRORE",
    description:
      "Offers loans for developing modern infrastructure in the animal husbandry sector at 6% effective interest.",
  },
  {
    name: "Assistance for Loan & Subsidy",
    funding_amount: "₹30L - ₹35 L",
    description: "Support for Manufacturing MSMEs in Gujarat.",
  },
  {
    name: "Prime Minister Micro Food Processing Enterprises (PMFME)",
    funding_amount: "Subsidy 35%",
    description:
      "Boosts micro food processing sector with Credit-linked capital subsidy of 35%.",
  },
];

const Loans = () => {
  return (
    <div className="min-h-screen">
      <Header
        heading="Government Business Loans"
        description={[
          "Looking for financial support to start, expand, or grow your business? Government Business Loans offer easy, affordable, and low-interest financing to help startups, MSMEs, and small businesses scale.",
          "Whether you need funds for working capital, expansion, or equipment purchase, Government Loan Schemes provide flexible repayment options and lower interest rates compared to traditional bank loans.",
          "Get affordable loans with lower interest rates & easy approval. Apply today for Government Business Loans!",
        ]}
        image="/cloudsparrow-all-img/loans.webp"
      />
      <div className="bg-blue-100 rounded-lg px-4 lg:px-40 py-10 text-center">
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:text-left gap-4">
          {loansData.map((data) => {
            return <Card key={data.name} data={data} />;
          })}
        </div>
        <div className="bg-blue-950 py-10 text-white rounded-lg px-4">
          <h1 className="text-xl lg:text-2xl font-medium">
            Get a Government Business Loan & Scale Your Business Today!
          </h1>
          <div className="flex flex-col py-4 lg:px-20 max-w-2xl mx-auto justify-between items-center">
            <p className="mb-4">
              Why struggle with high-interest loans when Government Loan Schemes
              offer subsidized business funding?
            </p>
            <Link
              to="/contact"
              className="bg-white w-fit text-blue-950 font-medium hover:bg-blue-100 p-4 rounded-lg"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
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

export default Loans;
