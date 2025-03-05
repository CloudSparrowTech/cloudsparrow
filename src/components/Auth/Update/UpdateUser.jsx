import React, { useState } from "react";
import UpdateInfo from "./UpdateInfo";
import UpdateEmail from "./UpdateEmail";
import UpdatePassword from "./UpdatePassword";

function UpdateUser() {
  const [current, setCurrent] = useState(0);

  const pages = [<UpdateInfo/>, <UpdateEmail/>, <UpdatePassword/>];

  return (
    <div className="lg:h-screen flex items-center justify-center px-4 py-24 lg:py-0 lg:px-0">
      <div className="bg-gray-700 rounded-2xl lg:mt-10 lg:p-10 p-6 text-white lg:h-[80vh] w-7xl">
        <div className="flex">
          <button
            disabled={current === 0}
            onClick={() => setCurrent(0)}
            className="lg:text-lg border p-2 rounded-l-md cursor-pointer disabled:bg-gray-800"
          >
            Update Info
          </button>
          <button
            disabled={current === 1}
            onClick={() => setCurrent(1)}
            className="lg:text-lg border p-2 cursor-pointer disabled:bg-gray-800"
          >
            Update Email
          </button>
          <button
            disabled={current === 2}
            onClick={() => setCurrent(2)}
            className="lg:text-lg border p-2 rounded-r-md cursor-pointer disabled:bg-gray-800"
          >
            Update Password
          </button>
        </div>
        <div className="flex lg:h-[60vh] h-[30vh] lg:border rounded-md">
          <div className="hidden lg:flex items-center justify-center border-r-2 w-full h-full px-10 py-4">
            <img
              src="/cloudsparrow-all-img/recoverpass.png"
              alt="recover"
              className="w-80"
            />
          </div>
          <div className="w-full lg:px-10 py-4 flex flex-col justify-evenly">
            {pages[current]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
