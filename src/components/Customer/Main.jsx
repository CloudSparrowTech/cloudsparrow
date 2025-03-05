import React, { useEffect, useState } from "react";
import { FaUser, FaSmile, FaFileAlt } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";
import documentService from "../../backend/document";
import Home from "./Home";
import OrderStatus from "./OrderStatus";
import Invoices from "./Invoices";
import Auth from "./Auth";
const Query ="";

const Main = () => {
  const [pageNo, setPageNo] = useState(0);
  const [invoices, setInvoices] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const pages = [
    {
      title: "Home",
      icon: <FaSmile size={30} />,
      component: <Home invoices={invoices} />,
    },
    {
      title: "Order Status",
      icon: <FaSpinner size={30} />,
      component: <OrderStatus invoices={invoices} />,
    },
    {
      title: "Invoices",
      icon: <FaFileAlt size={30} />,
      component: <Invoices invoices={invoices} />,
    },
  ];

  const fetchInvoices = async (phone) => {
    try {
      const res = await documentService.getQueriedDocuments(
        [phone ? Query.search("clientphone", phone) : null].filter(Boolean)
      );
      const invoices = res.filter((doc) => doc.type === "invoice");
      setInvoices(invoices);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchInvoices("9761171602");
  }, [isLogin]);

  return (
    <div>
      {!isLogin ? (
        <Auth setIsLogin={setIsLogin} />
      ) : (
        <div className="bg-blue-800 text-white font-medium min-h-screen">
          <div className="flex gap-10 w-full p-4 shadow-lg min-h-[10vh]">
            <div className="flex items-center gap-2">
              <img
                className="h-12"
                src="/cloudsparrow-all-img/logo.png"
                alt="logo"
              />
              <h1 className="text-sm">CloudSparrow</h1>
            </div>
            <div className="flex items-center justify-between w-full mx-8">
              <p>cloudsparrow technology</p>
              <FaUser size={20} />
            </div>
          </div>
          <div className="flex shadow-lg min-h-[90vh]">
            <div className="bg-blue-800 w-[12%]">
              <ul className="">
                {pages.map((page, indx) => {
                  return (
                    <li
                      key={indx}
                      onClick={() => setPageNo(indx)}
                      style={{
                        backgroundColor: `${indx === pageNo ? "white" : ""}`,
                        color: `${indx === pageNo ? "blue" : ""}`,
                      }}
                      className="cursor-pointer p-4 flex flex-col items-center gap-2"
                    >
                      {page.icon}
                      <p>{page.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="bg-white w-[88%] px-10 py-4 text-gray-700">
              {pages[pageNo].component}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
