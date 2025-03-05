import React, { useEffect, useState } from "react";
import documentService from "../../../backend/document";
import { toast } from "react-toastify";
import { FaSearch, FaSort, FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Query = ""; 

const DocumentDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("$createdAt");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    fetchDocuments();
  }, [search, sortField, sortOrder, page]);

  const fetchDocuments = async () => {
    const queries = [
      search?.trim() ? Query.search("clientname", search.trim()) : null,
      sortField
        ? sortOrder === "asc"
          ? Query.orderAsc(sortField)
          : Query.orderDesc(sortField)
        : null,
      Query.limit(limit ?? 10),
      Query.offset(((page ?? 1) - 1) * (limit ?? 10)),
    ].filter(Boolean); // Remove null values

    // Ensure there's at least one query to prevent errors
    if (queries.length === 0) {
      queries.push(Query.limit(10)); // Default query
    }

    try {
      const response = await documentService.getQueriedDocuments(queries);
      setDocuments(response);
    } catch (error) {
      console.error("Error fetching documents:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (docId) => {
    if (!window.confirm("Are you sure you want to delete this document?"))
      return;

    setLoading(true);
    try {
      await documentService.deleteDocument(docId);
      setDocuments(documents.filter((doc) => doc._id !== docId));
      toast("deleted successfully");
    } catch (error) {
      console.error("Error deleting document:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (documentUrl, title) => {
    try {
      const response = await fetch(documentUrl);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${title}.pdf`; // Set default name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading document:", error);
    }
  };

  return (
    <div className="px-4 py-20 mx-auto">
      <h2 className="text-2xl font-bold lg:mx-24 mb-4">Manage Documents</h2>
      {/* Search and Sorting Controls */}
      <div className="flex flex-wrap gap-4 mb-4 lg:mx-24">
        <div className="relative flex-3">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative flex-1">
          <FaSort className="absolute left-3 top-3 text-gray-400" />
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="$createdAt">Created At</option>
            <option value="$updatedAt">Updated At</option>
          </select>
        </div>

        <div className="relative flex-1">
          <FaSort className="absolute left-3 top-3 text-gray-400" />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      {/* Document List */}
      {loading && <p className="text-center">Loading...</p>}
      <div className="lg:mx-24 py-4">
        {documents.length > 0 ? (
          <ul className="space-y-3">
            {documents.map((doc) => (
              <li
                key={doc._id}
                className="flex flex-col md:flex-row justify-between  items-center bg-gray-50 p-3 rounded-lg shadow-sm border"
              >
                <div>
                  <p className="font-medium text-gray-800">{doc.title}</p>
                  <p className="text-sm text-gray-500">{doc.clientname}</p>
                </div>
                <p className="font-medium text-gray-800">{doc.clientemail}</p>
                <p className="font-medium text-gray-800">{doc.creator}</p>
                <div className="mt-2 md:mt-0 flex gap-2">
                  <a
                    href={doc.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                  >
                    View
                  </a>
                  <button
                    onClick={() => handleDownload(doc.document, doc.title)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => handleDelete(doc._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    disabled={loading}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">
            No documents uploaded yet.
          </p>
        )}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center lg:mx-24 mt-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
        >
          <FaArrowLeft />
          Previous
        </button>
        <span className="font-semibold">Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page === documents.length % limit}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
        >
          Next
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DocumentDashboard;
