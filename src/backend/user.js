import axios from "axios";
import imageService from "./ImageManager.js";
import config from "../config/config.js";

const API_URL = `${config.backendURL}/api/users`;

class User {
  async createUser({
    id,
    name,
    email,
    phone,
    avatar,
    role,
    permission = "user",
  }) {
    try {
      const response = await axios.post(
        `${API_URL}/`,
        { id, name, email, phone, avatar, role, permission },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateUser({ id, name, email, phone, role, avatar, permission }) {
    try {
      if (avatar) await this.deleteAvatar(id);
      const response = await axios.put(
        `${API_URL}/`,
        { id, name, email, phone, role, avatar, permission },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteUser(id) {
    try {
      await this.deleteAvatar(id);
      const response = await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getUserById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getAllUsers() {
    try {
      const response = await axios.get(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteAvatar(id) {
    try {
      const user = await this.getUserById(id);
      const imageId = user.avatar.split("/").pop(); // Adjust based on Cloudinary URL format
      await imageService.deleteImage(imageId);
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new User();
