import axios from "axios";
import userService from "./user.js";
import documentService from "./document.js";
import { toast } from "react-toastify";
import config from "../config/config.js";

const API_URL = `${config.backendURL}/api/auth`;

class AuthService {
  async createAccount({ email, password, name, phone, role, avatar }) {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        email,
        password,
        name,
        phone,
        role,
        avatar,
      });
      const userAccount = response.data.user;
      localStorage.setItem("token", response.data.token);
      await userService.createUser({
        id: userAccount._id,
        name,
        email,
        phone,
        role,
        avatar,
      });
      return userAccount;
    } catch (error) {
      console.log(error);
      throw error.response?.data || error;
    }
  }

  async loginUser({ email, password }) {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      return response.data.user;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async logoutUser() {
    try {
      await axios.post(
        `${API_URL}/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      localStorage.removeItem("token");
      toast("Logged you out successfully...");
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getCurrUser() {
    try {
      const response = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateEmail({ email, password }) {
    try {
      const response = await axios.put(
        `${API_URL}/email`,
        { email, password },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updatePassword({ password, oldpassword }) {
    try {
      const response = await axios.put(
        `${API_URL}/password`,
        { password, oldpassword },
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
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      await userService.deleteUser(id);
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async sendVerifyEmail() {
    try {
      const response = await axios.post(
        `${API_URL}/verify-email`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async verifyEmail({ token }) {
    try {
      const response = await axios.get(
        `${API_URL}/verify-email?token=${token}`
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async forgetPassword({ email }) {
    try {
      const response = await axios.post(`${API_URL}/forget-password`, {
        email,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async verifyRecovery({ token, password }) {
    try {
      const response = await axios.post(`${API_URL}/reset-password`, {
        token,
        password,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async sendOTP(phone) {
    try {
      const docs = await documentService.getAllDocuments();
      const isRegistered = docs.filter(
        (doc) => doc.clientphone === phone && doc.type === "invoice"
      );
      if (isRegistered.length > 0) {
        const response = await axios.post(`${API_URL}/send-otp`, { phone });
        return response.data;
      } else {
        throw new Error("use registered number");
      }
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async verifyOTP(userId, secret) {
    try {
      const response = await axios.post(`${API_URL}/verify-otp`, {
        userId,
        secret,
      });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new AuthService();
