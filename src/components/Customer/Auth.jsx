import React, { useState } from "react";
import { toast } from "react-toastify";
import authService from "../../backend/auth";

const Auth = ({ setIsLogin }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [sessionId, setSessionId] = useState("");

  const sendOTP = async () => {
    try {
      const session = await authService.sendOTP(phone);
      setSessionId(session.userId);
      toast("OTP sent on mail!");
    } catch (err) {
      toast(err.message);
    }
  };

  const verifyOTP = async () => {
    try {
      const status = await authService.verifyOTP(sessionId, otp);
      if (status) {
        setIsLogin(true);
      }
    } catch (err) {
      toast("invalid otp!!!!");
    }
  };

  return (
    <div className="flex flex-col justify-center gap-10 items-center min-h-screen mx-4">
      <div className="text-start w-sm">
        <p className="text-lg font-medium">CloudSparrow</p>
        <h1 className="text-3xl font-medium text-blue-500 my-4">Welcome</h1>
        <p className="text-lg font-medium">
          Login using your registered number...
        </p>
      </div>
      <div className="w-sm">
        <input
          type="number"
          placeholder="Enter Phone Number"
          className="border p-2 w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button
          onClick={sendOTP}
          className="bg-blue-500 text-white p-2 mt-2 w-full"
        >
          Send OTP
        </button>
        <input
          type="number"
          placeholder="Enter OTP"
          className="border p-2 w-full mt-2"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button
          onClick={verifyOTP}
          className="bg-green-500 text-white p-2 mt-2 w-full"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default Auth;
