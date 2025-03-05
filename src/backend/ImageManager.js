import axios from "axios";
import config from "../config/config.js";

const API_URL = `${config.backendURL}/api/files`;

class ImageManager {
  async uploadImage(file) {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(`${API_URL}/upload`, formData);
      return {
        fileId: response.data.fileId,
        imageUrl: response.data.url,
      };
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getImageUrl(fileId) {
    // Since Cloudinary URLs are returned directly, this method can simply return the URL if stored locally
    // or fetch it from the backend if needed. For simplicity, assuming URL is returned during upload.
    return fileId; // Adjust if you store URLs differently
  }

  async deleteImage(fileId) {
    try {
      const response = await axios.delete(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: { fileId },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new ImageManager();
