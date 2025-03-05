import axios from "axios";
import config from "../config/config.js";

const API_URL = `${config.backendURL}/api/testimonials`;

class Testimonials {
  async createTestimonials({ name, company, avatar, logo, description }) {
    try {
      const response = await axios.post(
        `${API_URL}/`,
        { name, company, avatar, logo, description },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateTestimonials({ id, name, company, avatar, logo, description }) {
    try {
      const response = await axios.put(
        `${API_URL}/`,
        { id, name, company, avatar, logo, description },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteTestimonials(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getTestimonialsById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getAllTestimonials() {
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

export default new Testimonials();
