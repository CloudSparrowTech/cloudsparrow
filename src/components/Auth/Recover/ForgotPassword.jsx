import React, { useState } from "react";
import authService from "../../../backend/auth";
import { toast } from "react-toastify";
import config from "../../../config/config";

function ForgotPassword() {
  const url = config.passRecoveryRedirectUrl;
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [email, setEmail] = useState("");

  const handleRecovery = async () => {
    try {
      setLoading({ status: true, message: "Verifying..." });
      const token = await authService.forgetPassword({ email, url });
      setLoading({ status: true, message: "Redirecting..." });
      if (token) {
        toast("Recovery email sent...");
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
            <label htmlFor="email" className="text-2xl lg:text-3xl">
              Enter your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex w-full items-center justify-end">
              <button
                disabled={loading.status}
                onClick={handleRecovery}
                className="border border-gray-400 py-2 px-6 rounded-md bg-gray-800 hover:bg-gray-900"
              >
                Send link to mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
