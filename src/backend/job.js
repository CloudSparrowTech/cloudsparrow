import axios from "axios";
import config from "../config/config.js";

const API_URL = `${config.backendURL}/api/jobs`;

class Job {
  async createJob({
    title,
    location,
    terms,
    experience,
    remuneration,
    role,
    responsibilities,
    requirements,
    url,
  }) {
    try {
      const response = await axios.post(
        `${API_URL}/`,
        {
          title,
          location,
          terms,
          experience,
          remuneration,
          role,
          responsibilities,
          requirements,
          url,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateJob({
    id,
    title,
    location,
    terms,
    experience,
    remuneration,
    role,
    responsibilities,
    requirements,
    url,
  }) {
    try {
      const response = await axios.put(
        `${API_URL}/`,
        {
          id,
          title,
          location,
          terms,
          experience,
          remuneration,
          role,
          responsibilities,
          requirements,
          url,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteJob(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getJobById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getAllJobs() {
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

export default new Job();
