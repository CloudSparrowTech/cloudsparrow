import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../backend/auth";
import imageService from "../../../backend/ImageManager";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [showcPassword, setShowcPassword] = useState("");
  const [cpass, setCpass] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading({ status: true, message: "Registering..." });
      const avatarData = await imageService.uploadImage(avatar);
      setLoading({ status: true, message: "Avatar uploaded..." });
      if (password === cpass) {
        const session = await authService.createAccount({
          email,
          password,
          name,
          phone,
          role,
          avatar: avatarData.imageUrl,
        });
        if (session) {
          toast("Registered Successfully");
          setLoading({ status: true, message: "Redirecting..." });
          navigate("/login");
        }
      } else {
        toast("passwords must be same");
      }
    } catch (error) {
      error;
      toast(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full">
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
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
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="role">Designation</label>
        <input
          type="text"
          name="role"
          id="role"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
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
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="name">Confirm Password</label>
        <div className="relative">
          <input
            type={showcPassword ? "text" : "password"}
            name="confirm password"
            id="confirm password"
            className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none w-full focus:ring-0 peer"
            value={cpass}
            onChange={(e) => setCpass(e.target.value)}
            required
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
        <label htmlFor="avatar">avatar</label>
        <input
          type="file"
          name="avatar"
          id="avatar"
          accept="image/*"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          onChange={(e) => setAvatar(e.target.files[0])}
          required
        />
      </div>

      <div className="my-4">
        <button
          disabled={loading.status}
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {loading.status ? loading.message : "Sign up"}
        </button>
      </div>
    </form>
  );
};

export default Signup;
