import React, { useState } from "react";
import InvoicePreview from "./InvoicePreview";
import { useSelector } from "react-redux";

const InvoiceEditor = () => {
  const user = useSelector((state) => state.authSlice.userData);
  const [newServiceDescription, setNewServiceDescription] = useState("");
  const [newServiceCode, setNewServiceCode] = useState("");
  const [newServiceAmount, setNewServiceAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [invoiceData, setInvoiceData] = useState({
    clientInfo: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
    deliveryInfo: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
    services: [
      {
        description: "Youtube Monetization",
        servicecode: "CS2052",
        amount: 3000,
      },
    ],
  });

  // Handle client info changes
  const updateClientInfo = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      clientInfo: { ...prev.clientInfo, [field]: value },
    }));
  };

  // Handle delivery info changes
  const updateDeliveryInfo = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      deliveryInfo: { ...prev.deliveryInfo, [field]: value },
    }));
  };

  // Handle services changes
  const updateService = (index, field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      services: prev.services.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  // Add new services entry
  const addServiceEntry = () => {
    if (
      newServiceDescription.trim() &&
      newServiceCode.trim() &&
      newServiceAmount
    ) {
      setInvoiceData((prev) => ({
        ...prev,
        services: [
          ...prev.services,
          {
            description: newServiceDescription,
            servicecode: newServiceCode,
            amount: newServiceAmount,
          },
        ],
      }));
      setNewServiceDescription("");
      setNewServiceCode("");
      setNewServiceAmount(0);
    }
  };

  // Calculate total amount
  const totalAmount = invoiceData.services.reduce((sum, item) => {
    return sum + (parseInt(item.amount) || 0);
  }, 0);

  return (
    <div className="container mx-auto">
      {/* Client Information Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Client Information</h2>
        {Object.keys(invoiceData.clientInfo).map((key) => (
          <div key={key} className="mb-2">
            <label className="block text-gray-700 capitalize">{key}</label>
            <input
              type="text"
              className="border p-2 rounded w-full"
              value={invoiceData.clientInfo[key]}
              onChange={(e) => updateClientInfo(key, e.target.value)}
            />
          </div>
        ))}
      </div>
      {/* Delivery Information Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Delivery Information</h2>
        {Object.keys(invoiceData.deliveryInfo).map((key) => (
          <div key={key} className="mb-2">
            <label className="block text-gray-700 capitalize">{key}</label>
            <input
              type="text"
              className="border p-2 rounded w-full"
              value={invoiceData.deliveryInfo[key]}
              onChange={(e) => updateDeliveryInfo(key, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Project Timeline Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Services and Costs</h2>
        {invoiceData.services.map((item, index) => (
          <div key={index} className="flex space-x-2 mb-2">
            <input
              type="text"
              className="border p-2 rounded w-1/3"
              value={item.description}
              onChange={(e) =>
                updateService(index, "description", e.target.value)
              }
              placeholder="Description"
            />
            <input
              type="text"
              className="border p-2 rounded w-1/3"
              value={item.servicecode}
              onChange={(e) =>
                updateService(index, "servicecode", e.target.value)
              }
              placeholder="Service Code"
            />
            <input
              type="number"
              className="border p-2 rounded w-1/3"
              value={item.amount}
              onChange={(e) => updateService(index, "amount", e.target.value)}
              placeholder="Amount"
            />
          </div>
        ))}
        <div className="flex space-x-2 mt-3">
          <input
            type="text"
            className="border p-2 rounded w-1/3"
            placeholder="New Description"
            value={newServiceDescription}
            onChange={(e) => setNewServiceDescription(e.target.value)}
          />
          <input
            type="text"
            className="border p-2 rounded w-1/3"
            placeholder="New Service Code"
            value={newServiceCode}
            onChange={(e) => setNewServiceCode(e.target.value)}
          />
          <input
            type="text"
            className="border p-2 rounded w-1/3"
            placeholder="New Amount"
            value={newServiceAmount}
            onChange={(e) => setNewServiceAmount(e.target.value)}
          />
          <button
            onClick={addServiceEntry}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>
        <div className="mt-2 text-right">
          <strong>Total Amount: {totalAmount} RS</strong>
        </div>
      </div>

      <button
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full mt-4"
        onClick={() => setShowModal(true)}
      >
        Preview Data
      </button>

      {/* Preview Modal */}
      {showModal && (
        <InvoicePreview
          data={invoiceData}
          user={user}
          totalAmount={totalAmount}
          close={setShowModal}
        />
      )}
    </div>
  );
};

export default InvoiceEditor;
