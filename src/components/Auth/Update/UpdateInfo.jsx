import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../../../backend/user";
import imageService from "../../../backend/ImageManager";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const UpdateInfo = () => {
  const user = useSelector((state) => state.authSlice?.userData);
  const { id } = useParams();
  const [updateAvatar, setUpdateAvatar] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    role: "",
    avatar: "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      setFormData({
        name: user?.name,
        phone: user?.phone,
        role: user?.role,
        avatar: user?.avatar,
      });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading({ status: true, message: "Updating..." });
      if (updateAvatar) {
        const avatarData = await imageService.uploadImage(avatar);
        formData.avatar = avatarData.imageUrl;
      }
      setLoading({ status: true, message: "Avatar uploaded..." });
      await userService.updateUser({ id, ...formData });
      toast("Updated Successfully");
    } catch (error) {
      toast(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lg:mx-auto w-full">
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="name"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
        />
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="role">Designation</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          id="role"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
        />
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          id="phone"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
        />
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <div className="flex justify-between">
          <label htmlFor="avatar">Avatar URL</label>
          <div className=" px-2 py-1 rounded-sm cursor-pointer bg-blue-600 hover:bg-blue-700">
            <p onClick={() => setUpdateAvatar(!updateAvatar)}>{updateAvatar?"revert":"update"}</p>
          </div>
        </div>
        {updateAvatar ? (
          <input
            type="file"
            name="avatar"
            id="avatar"
            accept="image/*"
            className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
            onChange={(e) => setAvatar(e.target.files[0])}
            required
          />
        ) : (
          <input
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            id="avatar"
            className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          />
        )}
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <button
          type="submit"
          disabled={loading.status}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          {loading.status ? loading.message : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default UpdateInfo;
