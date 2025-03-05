import axios from "axios";
import imageService from "./ImageManager.js";
import config from "../config/config.js";

const API_URL = `${config.backendURL}/api/team`;

class TeamMember {
  async createTeamMember({
    name,
    email,
    role,
    teamId,
    joinedAt,
    avatar,
    description,
  }) {
    try {
      const response = await axios.post(
        `${API_URL}/`,
        { name, email, role, teamId, joinedAt, avatar, description },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateTeamMember({
    id,
    name,
    email,
    role,
    teamId,
    joinedAt,
    avatar,
    description,
  }) {
    try {
      if (avatar) await this.deleteAvatar(id);
      const response = await axios.put(
        `${API_URL}/`,
        { id, name, email, role, teamId, joinedAt, avatar, description },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteTeamMember(id) {
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

  async getTeamMemberById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getAllTeamMembers() {
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
      const member = await this.getTeamMemberById(id);
      const imageId = member.avatar.split("/").pop(); // Adjust based on Cloudinary URL format
      await imageService.deleteImage(imageId);
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new TeamMember();
