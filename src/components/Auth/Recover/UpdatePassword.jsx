import React, { useEffect, useState } from "react";
import authService from "../../../backend/auth";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePassword() {
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const secret = urlParams.get("secret");

  const handleUpdate = async () => {
    try {
      if (password === cpassword) {
        setLoading({ status: true, message: "Verifying..." });
        const token = await authService.verifyRecovery({
          userId,
          secret,
          password,
        });
        if (token) {
          (token);
          navigate("/login");
          toast("Updated Successfully");
        }
      } else {
        toast("Both passwords must be same");
        setPassword("");
        setcPassword("");
      }
    } catch (error) {
      toast(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
    }
  };

  return (
    <div className="lg:h-screen flex items-center justify-center px-4 py-24 lg:py-0 lg:px-0">
      <div className="bg-gray-700 rounded-2xl lg:mt-10 lg:p-10 p-6 text-white lg:h-[80vh] w-7xl">
        <h1 className="text-3xl lg:text-5xl">Recover your password</h1>
        <div className="flex lg:mt-10 lg:h-[44vh] h-[30vh]">
          <div className="hidden lg:flex items-center justify-center border-r-2 w-full h-full px-10 py-4">
            <img
              src="/cloudsparrow-all-img/recoverpass.png"
              alt="recover"
              className="w-80"
            />
          </div>
          <div className="w-full lg:px-10 py-4 flex flex-col justify-evenly">
            <label htmlFor="password" className="text-2xl lg:text-3xl">
              New Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="cpassword" className="text-2xl lg:text-3xl">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              value={cpassword}
              onChange={(e) => setcPassword(e.target.value)}
              required
            />
            <div className="flex w-full items-center justify-end">
              <button
                disabled={loading.status}
                onClick={handleUpdate}
                className="border border-gray-400 py-2 px-6 rounded-md bg-gray-800 hover:bg-gray-900"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
