import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../store/authSlice";
import authService from "../../../backend/auth";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading({ status: true, message: "Logging in..." });
      const session = await authService.loginUser({ email, password });
      if (session) {
        setLoading({ status: true, message: "getting info..." });
        const userData = await authService.getCurrUser();
        if (userData) {
          setLoading({ status: true, message: "Logging you in..." });
          dispatch(login(userData));
        }
        toast("LoggedIn Successfully");
        navigate("/");
      }
    } catch (error) {
      toast(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full">
      <div className="flex flex-col w-full mb-5 my-6 gap-2">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col w-full mb-5 my-6 gap-2">
        <label htmlFor="password">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none w-full focus:ring-0 peer"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <Link to={"/passwordrecovery"} className="font-medium">
            Forgot your password?
          </Link>
        </div>
      </div>

      <div className="flex w-full my-6">
        <button
          disabled={loading.status}
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {loading.status ? loading.message : "Sign in"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
