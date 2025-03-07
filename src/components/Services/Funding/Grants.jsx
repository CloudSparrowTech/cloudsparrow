import React from "react";

const Grants = () => {
  return (
    <div className="min-h-screen">
      <div className="flex gap-4 flex-col-reverse lg:flex-row py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 lg:min-h-[74vh]">
        <div className="flex-6 text-white text-center lg:text-left flex justify-center items-center">
          <div className="lg:w-[70%] px-6 flex flex-col gap-4">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Government Grants
            </h1>
            <p>
              Government grants are financial awards provided by the government
              to fund specific projects or initiatives.
            </p>
            <p>
              We help you with documentation, online application filing, &
              coordinate with <br /> authorities to ensure a smooth process.
            </p>
          </div>
        </div>
        <div className="lg:flex-4 flex justify-center items-center">
          <img
            className="size-44"
            src="/cloudsparrow-all-img/grants.webp"
            alt="grants"
          />
        </div>
      </div>
      <div className="bg-blue-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4 md:px-16 lg:px-40">
        {[1, 2, 3, 4, 5, 6].map((card) => {
          return <Card key={card} />;
        })}
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex flex-col min-h-80 justify-between bg-gradient-to-b from-white to-violet-50 pt-6 overflow-hidden rounded-lg shadow-lg">
      <div className="flex-3 px-4">
        <div className="text-orange-400 font-bold">
          <h3 className="text-2xl">UP TO</h3>
          <h1 className="text-5xl">₹20 LAKH</h1>
        </div>
        <div className="my-2">
          <h4 className="text-xl font-medium">Seed Fund</h4>
          <p className="text-gray-700">
            Offers funding for DPIIT recognized startups with innovative &
            scalable models.
          </p>
        </div>
      </div>
      <button className="py-2 px-8 bg-blue-700 border border-blue-700 hover:bg-white hover:text-blue-700 text-white rounded-b-lg text-center cursor-pointer">
        Get Consultation
      </button>
    </div>
  );
};

export default Grants;
