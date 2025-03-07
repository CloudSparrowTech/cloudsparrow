import axios from "axios";
import config from "../config/config.js";

const API_URL = `${config.backendURL}/api/enquiries`;

class Enquiry {
  async createEnquiry({ name, email, phone, services, description }) {
    try {
      const response = await axios.post(`${API_URL}/`, {
        name,
        email,
        phone,
        services,
        description,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateEnquiry({ id, name, email, phone, services, description }) {
    try {
      const response = await axios.put(
        `${API_URL}/`,
        { id, name, email, phone, services, description },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteEnquiry(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getEnquiryById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getAllEnquiries() {
    try {
      const response = await axios.get(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new Enquiry();
