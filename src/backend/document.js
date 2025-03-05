import axios from "axios";
import fileService from "./FileManager.js";
import config from "../config/config.js";

const API_URL = `${config.backendURL}/api/documents`;

class Document {
  async createDocument({
    type,
    title,
    clientname,
    clientemail,
    clientphone,
    document,
    creator,
    totalamount = 0,
    paidamount = 0,
    paymentlink = "na",
    paymentstatus = "na",
  }) {
    try {
      const response = await axios.post(
        `${API_URL}/`,
        {
          type,
          title,
          clientname,
          clientemail,
          clientphone,
          document,
          creator,
          totalamount,
          paidamount,
          paymentlink,
          paymentstatus,
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

  async updateDocument({
    id,
    type,
    title,
    clientname,
    clientemail,
    clientphone,
    document,
    creator,
    totalamount = 0,
    paidamount = 0,
    paymentlink = "na",
    paymentstatus = "na",
  }) {
    try {
      if (document) await this.deleteFile(id);
      const response = await axios.put(
        `${API_URL}/`,
        {
          id,
          type,
          title,
          clientname,
          clientemail,
          clientphone,
          document,
          creator,
          totalamount,
          paidamount,
          paymentlink,
          paymentstatus,
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

  async deleteDocument(id) {
    try {
      await this.deleteFile(id);
      const response = await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getDocumentById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getAllDocuments() {
    try {
      const response = await axios.get(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getQueriedDocuments(queries = []) {
    try {
      const response = await axios.get(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        params: { queries }, // Adjust if backend supports query filtering
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteFile(id) {
    try {
      const doc = await this.getDocumentById(id);
      const fileId = doc.document.split("/").pop(); // Adjust based on Cloudinary URL format
      await fileService.deleteFile(fileId);
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new Document();
