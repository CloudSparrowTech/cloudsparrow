import React, { useState } from "react";
import authService from "../../../backend/auth";
import userService from "../../../backend/user";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const UpdateEmail = () => {
  const [loading, setLoading] = useState({ status: false, message: "" });
  const user = useSelector((state) => state.authSlice.userData);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.email !== email) {
        setLoading({ status: true, message: "Updating..." });
        const response = await authService.updateEmail({
          email,
          password,
        });
        if (response) {
          const response = await userService.updateUser({
            id: user._id,
            email,
          });
          if (response) {
            toast("Email updated successfully");
          }
        }
      } else {
        toast("Already registered");
        setEmail("");
      }
    } catch (error) {
      toast(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full">
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="email">New Email</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
        />
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="password"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
        />
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

export default UpdateEmail;
