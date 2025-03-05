import React, { useState } from "react";
import FundingQuotationEditor from "./Funding/FundingQuotationEditor";
import ProposalEditor from "./Proposal/ProposalEditor";
import InvoiceEditor from "./Invoice/InvoiceEditor";
import { useSelector } from "react-redux";

const DocumentEditor = () => {
  const [current, setCurrent] = useState(0);
  const user = useSelector((state) => state.authSlice.userData);

  const pages = [
    <FundingQuotationEditor />,
    <ProposalEditor />,
    ["admin"].includes(user.permission) && <InvoiceEditor />,
  ];
  return (
    <div className="lg:flex items-center justify-center px-2 pt-24 pb-2 lg:py-0 lg:px-0">
      <div className="rounded-2xl lg:mt-10 lg:p-10 w-full">
        <div className="flex rounded-md lg:rounded-2xl border-2 overflow-hidden mb-2">
          <button
            disabled={current === 0}
            onClick={() => setCurrent(0)}
            className="lg:text-lg p-2 cursor-pointer disabled:bg-blue-400 disabled:text-white w-full"
          >
            Funding Quotation Editor
          </button>
          <button
            disabled={current === 1}
            onClick={() => setCurrent(1)}
            className={
              "lg:text-lg p-2 cursor-pointer disabled:bg-blue-400 disabled:text-white w-full " +
              (pages.length % 2 === 0 ? "border-l-2" : "border-x-2 ")
            }
          >
            Proposal Editor
          </button>
          {"admin".includes(user.permission) && (
            <button
              disabled={current === 2}
              onClick={() => setCurrent(2)}
              className="lg:text-lg p-2 cursor-pointer disabled:bg-blue-400 disabled:text-white w-full"
            >
              Invoice Editor
            </button>
          )}
        </div>
        <div className="p-4 bg-blue-100 rounded-md lg:rounded-2xl">
          {pages[current]}
        </div>
      </div>
    </div>
  );
};

export default DocumentEditor;
