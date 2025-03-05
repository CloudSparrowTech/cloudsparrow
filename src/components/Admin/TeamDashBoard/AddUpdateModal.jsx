import { useState } from "react";

const AddUpdateModal = ({
  isOpen,
  onClose,
  onSubmit,
  form,
  setForm,
  editingId,
}) => {
  if (!isOpen) return null;
  const [updateAvatar, setUpdateAvatar] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {editingId ? "Update" : "Add"} Team Member
        </h2>
        <form onSubmit={onSubmit} className="grid gap-4">
          <input
            className="border p-2 rounded"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="border p-2 rounded"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            className="border p-2 rounded"
            placeholder="Role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            required
          />
          <input
            className="border p-2 rounded"
            placeholder="Team ID"
            value={form.teamId}
            onChange={(e) => setForm({ ...form, teamId: e.target.value })}
            required
          />
          <textarea
            className="border p-2 rounded"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
          {editingId && (
            <div className="flex justify-between">
              <label htmlFor="avatar">Avatar</label>
              <div className=" px-2 py-1 rounded-sm cursor-pointer bg-blue-600 hover:bg-blue-700">
                <p onClick={() => setUpdateAvatar(!updateAvatar)}>
                  {updateAvatar ? "revert" : "update"}
                </p>
              </div>
            </div>
          )}
          {editingId ? (
            updateAvatar ? (
              <input
                className="border p-2 rounded"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setForm({
                    ...form,
                    avatar: e.target.files[0],
                  })
                }
                required
              />
            ) : (
              <input
                className="border p-2 rounded"
                placeholder="Avatar"
                value={form.avatar}
                onChange={(e) => setForm({ ...form, avatar: e.target.value })}
                required
              />
            )
          ) : (
            <input
              className="border p-2 rounded"
              type="file"
              accept="image/*"
              onChange={(e) =>
                setForm({
                  ...form,
                  avatar: e.target.files[0],
                })
              }
              required
            />
          )}
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              {editingId ? "Update" : "Add"} Member
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUpdateModal;
