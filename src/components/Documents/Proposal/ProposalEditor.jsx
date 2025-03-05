import React, { useState } from "react";
import ProposalPreview from "./ProposalPreview";
import { useSelector } from "react-redux";
import generateDummyData from "../../../gemini/generate";
import { toast } from "react-toastify";

const ProposalEditor = () => {
  const user = useSelector((state) => state.authSlice.userData);
  const [showModal, setShowModal] = useState(false);
  const [newTimelinePhase, setNewTimelinePhase] = useState("");
  const [newTimelineDuration, setNewTimelineDuration] = useState("");
  const [newTimelineDeliverables, setNewTimelineDeliverables] = useState("");
  const [newCostComponent, setNewCostComponent] = useState("");
  const [newCostPrice, setNewCostPrice] = useState("");
  const [proposalType, setProposalType] = useState("");
  const [loading, setLoading] = useState({ status: false, message: "" });
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const today = formatDate(new Date());

  const [proposalData, setProposalData] = useState({
    clientInfo: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
    projectScope: [
      {
        title: "Core Features",
        content: [
          "Course Selling & Management",
          "Secure payment gateway integration",
          "Categorized course listing with search and filter options",
          "Video lessons, PDFs, and downloadable materials",
          "MCQ-based tests integrated within courses",
        ],
      },
    ],
    techStack: [
      {
        title: "Frontend",
        content: "React.js / Next.js (for web), React Native (for mobile)",
      },
    ],
    validTill: today,
    timeline: [
      {
        phase: "Planning & Design",
        duration: "3 days",
        deliverables: "Wireframes, UI/UX Design",
      },
    ],
    costs: [{ component: "UI/UX Design", cost: "4000" }],
  });

  // Handle client info changes
  const updateClientInfo = (field, value) => {
    setProposalData((prev) => ({
      ...prev,
      clientInfo: { ...prev.clientInfo, [field]: value },
    }));
  };

  // Handle timeline changes
  const updateTimeline = (index, field, value) => {
    setProposalData((prev) => ({
      ...prev,
      timeline: prev.timeline.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  // Handle cost changes
  const updateCost = (index, field, value) => {
    setProposalData((prev) => ({
      ...prev,
      costs: prev.costs.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  // Add new timeline entry
  const addTimelineEntry = () => {
    if (
      newTimelinePhase.trim() &&
      newTimelineDuration.trim() &&
      newTimelineDeliverables.trim()
    ) {
      setProposalData((prev) => ({
        ...prev,
        timeline: [
          ...prev.timeline,
          {
            phase: newTimelinePhase,
            duration: newTimelineDuration,
            deliverables: newTimelineDeliverables,
          },
        ],
      }));
      setNewTimelinePhase("");
      setNewTimelineDuration("");
      setNewTimelineDeliverables("");
    }
  };

  // Add new cost entry
  const addCostEntry = () => {
    if (newCostComponent.trim() && newCostPrice.trim()) {
      setProposalData((prev) => ({
        ...prev,
        costs: [
          ...prev.costs,
          { component: newCostComponent, cost: newCostPrice },
        ],
      }));
      setNewCostComponent("");
      setNewCostPrice("");
    }
  };

  // Calculate total cost
  const totalCost = proposalData.costs.reduce((sum, item) => {
    return sum + (parseInt(item.cost) || 0);
  }, 0);

  const handleGenerate = async () => {
    try {
      setLoading({ status: true, message: "Generating..." });
      const generatedData = await generateDummyData(proposalType);
      (generatedData);

      setLoading({ status: true, message: "Setting generated data..." });

      // Use a functional update to safely merge the previous state with new data
      setProposalData((prevProposalData) => ({
        ...prevProposalData, // Keep existing top-level properties
        ...generatedData, // Overwrite with new top-level properties from generatedData
        // Optionally deep merge nested objects if needed
        introduction: generatedData.introduction,
        conclusion: generatedData.conclusion,
        clientInfo: {
          ...prevProposalData.clientInfo, // Preserve existing clientInfo
          ...generatedData.clientInfo, // Update with new clientInfo
        },
        projectScope:
          generatedData.projectScope || prevProposalData.projectScope, // Use new if exists, else keep old
        techStack: generatedData.techStack || prevProposalData.techStack,
        timeline: generatedData.timeline || prevProposalData.timeline,
        costs: generatedData.costs || prevProposalData.costs,
      }));
    } catch (error) {
      toast.error(error.message || "An error occurred while generating data");
    } finally {
      setLoading({ status: true, message: "_/Generated_/" });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Proposal Type</h2>
        <div className="mb-2">
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Book Selling Application"
            value={proposalType}
            onChange={(e) => setProposalType(e.target.value)}
          />
        </div>
        <button
          disabled={loading.status}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full mt-4 disabled:bg-purple-600"
          onClick={handleGenerate}
        >
          {loading.status ? loading.message : "Generate"}
        </button>
      </div>
      {/* Client Information Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Client Information</h2>
        {Object.keys(proposalData.clientInfo).map((key) => (
          <div key={key} className="mb-2">
            <label className="block text-gray-700 capitalize">{key}</label>
            <input
              type="text"
              className="border p-2 rounded w-full"
              value={proposalData.clientInfo[key]}
              onChange={(e) => updateClientInfo(key, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Project Timeline Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Project Timeline</h2>
        {proposalData.timeline.map((item, index) => (
          <div key={index} className="flex space-x-2 mb-2">
            <input
              type="text"
              className="border p-2 rounded w-1/3"
              value={item.phase}
              onChange={(e) => updateTimeline(index, "phase", e.target.value)}
              placeholder="Phase"
            />
            <input
              type="text"
              className="border p-2 rounded w-1/3"
              value={item.duration}
              onChange={(e) =>
                updateTimeline(index, "duration", e.target.value)
              }
              placeholder="Duration"
            />
            <input
              type="text"
              className="border p-2 rounded w-1/3"
              value={item.deliverables}
              onChange={(e) =>
                updateTimeline(index, "deliverables", e.target.value)
              }
              placeholder="Deliverables"
            />
          </div>
        ))}
        <div className="flex space-x-2 mt-3">
          <input
            type="text"
            className="border p-2 rounded w-1/3"
            placeholder="New Phase"
            value={newTimelinePhase}
            onChange={(e) => setNewTimelinePhase(e.target.value)}
          />
          <input
            type="text"
            className="border p-2 rounded w-1/3"
            placeholder="Duration"
            value={newTimelineDuration}
            onChange={(e) => setNewTimelineDuration(e.target.value)}
          />
          <input
            type="text"
            className="border p-2 rounded w-1/3"
            placeholder="Deliverables"
            value={newTimelineDeliverables}
            onChange={(e) => setNewTimelineDeliverables(e.target.value)}
          />
          <button
            onClick={addTimelineEntry}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>
      </div>

      {/* Cost Estimation Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Cost Estimation (INR)</h2>
        {proposalData.costs.map((item, index) => (
          <div key={index} className="flex space-x-2 mb-2">
            <input
              type="text"
              className="border p-2 rounded w-3/5"
              value={item.component}
              onChange={(e) => updateCost(index, "component", e.target.value)}
              placeholder="Component"
            />
            <input
              type="number"
              className="border p-2 rounded w-2/5"
              value={item.cost}
              onChange={(e) => updateCost(index, "cost", e.target.value)}
              placeholder="Cost"
            />
          </div>
        ))}
        <div className="flex space-x-2 mt-3">
          <input
            type="text"
            className="border p-2 rounded w-3/5"
            placeholder="Component Name"
            value={newCostComponent}
            onChange={(e) => setNewCostComponent(e.target.value)}
          />
          <input
            type="number"
            className="border p-2 rounded w-2/5"
            placeholder="Price"
            value={newCostPrice}
            onChange={(e) => setNewCostPrice(e.target.value)}
          />
          <button
            onClick={addCostEntry}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>
        <div className="mt-2 text-right">
          <strong>Total Cost: {totalCost} RS</strong>
        </div>
      </div>

      <input
        type="date"
        className="border p-2 rounded w-full"
        value={proposalData.validTill.split("-").reverse().join("-")} // Convert dd-mm-yyyy to yyyy-mm-dd for date input
        onChange={(e) =>
          setProposalData({
            ...proposalData,
            validTill: formatDate(e.target.value),
          })
        }
      />

      <button
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full mt-4"
        onClick={() => setShowModal(true)}
      >
        Preview Data
      </button>

      {/* Preview Modal */}
      {showModal && (
        <ProposalPreview
          title={proposalType.toUpperCase()}
          data={proposalData}
          user={user}
          close={setShowModal}
        />
      )}
    </div>
  );
};

export default ProposalEditor;
