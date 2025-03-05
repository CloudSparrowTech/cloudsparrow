import axios from "axios";
import config from "../config/config.js";

const API_URL = `${config.backendURL}/api/files`;

class FileManager {
  async uploadFile(file) {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return {
        fileId: response.data.fileId,
        fileUrl: response.data.url,
      };
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getFileUrl(fileId) {
    // Since Cloudinary URLs are returned directly, this method can simply return the URL if stored locally
    return fileId; // Adjust if you store URLs differently
  }

  async deleteFile(fileId) {
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

export default new FileManager();
