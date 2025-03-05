import React, { useEffect, useState } from "react";
import userService from "../../backend/user";
import authService from "../../backend/auth";
import { toast } from "react-toastify";

const UsersDash = () => {
  const [users, setUsers] = useState([]);
  // Define permission options
  const permissionLevels = ["admin", "team", "user"];

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await userService.getAllUsers();
      setUsers(response);
    } catch (error) {
      toast(error?.message);
    }
  };

  const updatePermission = async (id, newPermission) => {
    try {
      await userService.updateUser({ id, permission: newPermission });
      fetchUsers();
    } catch (error) {
      toast(error?.message);
    }
  };

  const deleteUser = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      try {
        await authService.deleteUser(id);
        fetchUsers();
      } catch (error) {
        toast(error?.message);
      }
    }
  };

  return (
    <div className="lg:px-28 px-4 py-20 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-4">Avatar</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Permission</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b">
                <td className="p-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4">
                  <select
                    value={user.permission || "user"} // Default to "user" if undefined
                    onChange={(e) => updatePermission(user._id, e.target.value)}
                    className="px-3 py-1 border rounded bg-white text-gray-700 focus:outline-none"
                  >
                    {permissionLevels.map((level) => (
                      <option key={level} value={level}>
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersDash;
