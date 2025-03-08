import React, { useState } from "react";
import enquiryService from "../../backend/enquiry";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

const Overlay = ({ service, description, setShowOverlay }) => {
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    setLoading({ status: true, message: "Submitting..." });
    e.preventDefault();
    try {
      const response = await enquiryService.createEnquiry({
        name,
        email,
        phone,
        services: service,
        description,
      });
      if (response) {
        toast("Submitted successfully...");
        setName("");
        setEmail("");
        setPhone("");
        toast("We will contact you shortly...");
      }
    } catch (error) {
      toast(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
      setShowOverlay(false);
    }
  };

  return (
    <div className="fixed inset-0 min-h-screen py-20 px-4">
      <div className="bg-blue-50 text-black max-w-md mx-auto py-5 rounded-lg shadow-2xl">
        <div className="flex justify-evenly text-center items-center">
          <button></button>
          <h1 className="text-xl font-bold">Book a Consultation</h1>
          <AiOutlineClose onClick={() => setShowOverlay(false)} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-5 flex flex-col gap-4 text-left"
        >
          <div className="flex flex-col font-medium text-sm gap-2">
            <label htmlFor="name">Full Name</label>
            <input
              className="border p-2 rounded-sm bg-white"
              placeholder="example"
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col font-medium text-sm gap-2">
            <label htmlFor="email">Email Address</label>
            <input
              className="border p-2 rounded-sm bg-white"
              placeholder="example@example.com"
              type="text"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col font-medium text-sm gap-2">
            <label htmlFor="phone">Contact Number</label>
            <input
              className="border p-2 rounded-sm bg-white"
              placeholder="XXX XX XXXX"
              type="text"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col font-medium text-sm my-2">
            <button
              disabled={loading.status}
              type="submit"
              className="w-full text-center py-2 rounded-md bg-blue-950 hover:bg-blue-900 text-white"
            >
              {loading.status ? loading.message : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Overlay;
