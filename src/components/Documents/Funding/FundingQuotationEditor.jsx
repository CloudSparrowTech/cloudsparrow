import React, { useState } from "react";
import FundingQuotationPreview from "./FundingQuotationPreview";
import { useSelector } from "react-redux";

const FundingQuotationEditor = () => {
  const user = useSelector((state) => state.authSlice.userData);
  const [newDocument, setNewDocument] = useState("");
  const [newService, setNewService] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [showModal, setShowModal] = useState(false);
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const today = formatDate(new Date());

  const [data, setData] = useState({
    clientInfo: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
    validTill: today,
    documents: [
      "Company Profile (including mission, vision, and history)",
      "Incorporation Certificate",
      "Company Pan Card",
      "Aadhar Card, Pan Card (Directors)",
      "Official Email, Contact Number (For Authentication)",
      "Organization Digital Signature, MSME Certificate",
    ],
    selectedDocuments: [],
    quotations: [
      { service: "State Funding (Madhya Pradesh 35 Lakh)", price: "30000" },
    ],
  });

  // Handle input changes dynamically
  const updateClientInfo = (field, value) => {
    setData({ ...data, clientInfo: { ...data.clientInfo, [field]: value } });
  };

  // Toggle document selection
  const toggleDocument = (doc) => {
    setData({
      ...data,
      selectedDocuments: data.selectedDocuments.includes(doc)
        ? data.selectedDocuments.filter((d) => d !== doc)
        : [...data.selectedDocuments, doc],
    });
  };

  // Add a new document
  const addDocument = () => {
    if (newDocument.trim()) {
      setData({ ...data, documents: [...data, newDocument] });
      setNewDocument("");
    }
  };

  // Add a new service
  const addService = () => {
    if (newService.trim() && newPrice.trim()) {
      setData({
        ...data,
        quotations: [
          ...data.quotations,
          { service: newService, price: newPrice },
        ],
      });
      setNewService("");
      setNewPrice("");
    }
  };

  return (
    <div className="container mx-auto">
      {/* Client Information Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Client Information</h2>
        {Object.keys(data.clientInfo).map((key) => (
          <div key={key} className="mb-2">
            <label className="block capitalize">{key}</label>
            <input
              type="text"
              className="border p-2 rounded w-full"
              value={data.clientInfo[key]}
              onChange={(e) => updateClientInfo(key, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Required Documentation Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Required Documentation</h2>
        {data.map((doc, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              id={`doc-${index}`}
              checked={data.selectedDocuments.includes(doc)}
              onChange={() => toggleDocument(doc)}
              className="h-5 w-5"
            />
            <label htmlFor={`doc-${index}`}>{doc}</label>
          </div>
        ))}
        <div className="flex space-x-2 mt-3">
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Add new document..."
            value={newDocument}
            onChange={(e) => setNewDocument(e.target.value)}
          />
          <button
            onClick={addDocument}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>

      {/* Quotation Services Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Quotation (Services & Prices)
        </h2>
        {data.quotations.map((q, index) => (
          <div key={index} className="flex space-x-2 mb-2">
            <input
              type="text"
              className="border p-2 rounded w-3/5"
              value={q.service}
              onChange={(e) =>
                setData({
                  ...data,
                  quotations: data.quotations.map((item, i) =>
                    i === index ? { ...item, service: e.target.value } : item
                  ),
                })
              }
            />
            <input
              type="number"
              className="border p-2 rounded w-1/5"
              value={q.price}
              onChange={(e) =>
                setData({
                  ...data,
                  quotations: data.quotations.map((item, i) =>
                    i === index ? { ...item, price: e.target.value } : item
                  ),
                })
              }
            />
          </div>
        ))}
        <div className="flex space-x-2 mt-3">
          <input
            type="text"
            className="border p-2 rounded w-3/5"
            placeholder="Service Name"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
          />
          <input
            type="number"
            className="border p-2 rounded w-1/5"
            placeholder="Price"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <button
            onClick={addService}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>
      </div>

      {/* Valid Till Date Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Valid Till</h2>
        <input
          type="date"
          className="border p-2 rounded w-full"
          value={data.validTill.split("-").reverse().join("-")} // Convert dd-mm-yyyy to yyyy-mm-dd for date input
          onChange={(e) =>
            setData({ ...data, validTill: formatDate(e.target.value) })
          }
        />
      </div>

      {/* Preview Button */}
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full mt-4"
        onClick={() => setShowModal(true)}
      >
        Preview Data
      </button>

      {/* Preview Modal */}
      {showModal && (
        <FundingQuotationPreview data={data} user={user} close={setShowModal} />
      )}
    </div>
  );
};

export default FundingQuotationEditor;
