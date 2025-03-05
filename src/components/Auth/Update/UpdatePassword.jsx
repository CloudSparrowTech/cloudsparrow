import React, { useState } from "react";
import authService from "../../../backend/auth";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UpdatePassword = () => {
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [oldpassword, setOldPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === cpassword) {
        if (password !== oldpassword) {
          setLoading({ status: true, message: "Updating..." });
          const response = await authService.updatePassword({
            password,
            oldpassword,
          });
          if (response) {
            toast("Updated successfully");
            setPassword("");
            setcPassword("");
            setOldPassword("");
          }
        } else {
          toast("Use a different password");
          setPassword("");
        }
      } else {
        toast("Password and confirm password must be same");
        setPassword("");
        setcPassword("");
      }
    } catch (error) {
      toast(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
      setPassword("");
      setcPassword("");
      setOldPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full">
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="password">New Password</label>
        <div className="relative">
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer w-full pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="cpassword">Confirm New Password</label>
        <div className="relative">
          <input
            required
            type={showcPassword ? "text" : "password"}
            name="cpassword"
            value={cpassword}
            onChange={(e) => setcPassword(e.target.value)}
            id="password"
            className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none w-full focus:ring-0 peer"
          />
          <button
            type="button"
            onClick={() => setShowcPassword(!showcPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showcPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="oldpassword">Current Password</label>
        <div className="relative">
          <input
            required
            type={showOldPassword ? "text" : "password"}
            name="oldpassword"
            value={oldpassword}
            onChange={(e) => setOldPassword(e.target.value)}
            id="oldpassword"
            className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none w-full focus:ring-0 peer"
          />
          <button
            type="button"
            onClick={() => setShowOldPassword(!showOldPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showOldPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <button
          type="submit"
          disabled={loading.status}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          {loading.status ? loading.message : "Update"}
        </button>
      </div>
    </form>
  );
};

export default UpdatePassword;
