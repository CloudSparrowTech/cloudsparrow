import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TeamMemberService from "../../../backend/team";
import imageService from "../../../backend/ImageManager";
import AddUpdateModal from "./AddUpdateModal";
import TeamMemberCard from "./TeamMemberCard";

const Dashboard = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    teamId: "",
    avatar: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await TeamMemberService.getAllTeamMembers();
      setTeamMembers(response);
    } catch (error) {
      console.error("Error fetching team members:", error);
      toast.error(error?.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { imageUrl } = await imageService.uploadImage(form.avatar);
      imageUrl;

      if (editingId) {
        await TeamMemberService.updateTeamMember({
          id: editingId,
          ...form,
          avatar: imageUrl,
        });
        toast.success("Team member updated successfully");
      } else {
        await TeamMemberService.createTeamMember({
          ...form,
          avatar: imageUrl,
        });
        toast.success("Team member added successfully");
      }
      setForm({
        name: "",
        email: "",
        role: "",
        teamId: "",
        avatar: "",
        description: "",
      });
      setEditingId(null);
      setIsModalOpen(false);
      fetchTeamMembers();
    } catch (error) {
      console.error("Error saving team member:", error);
      toast.error(error?.message);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure?");
    try {
      if (confirm) {
        await TeamMemberService.deleteTeamMember(id);
        toast.success("Team member deleted successfully");
        fetchTeamMembers();
      }
    } catch (error) {
      console.error("Error deleting team member:", error);
      toast.error(error?.message);
    }
  };

  const handleClose = () => {
    setEditingId(null);
    setIsModalOpen(false);
  };

  const handleEdit = (member) => {
    setForm(member);
    setEditingId(member._id);
    setIsModalOpen(true);
  };

  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-6">Team Members Dashboard</h1>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4"
          onClick={() => setIsModalOpen(true)}
        >
          Add Team Member
        </button>
      </div>

      {/* Add/Update Modal */}
      <AddUpdateModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        form={form}
        setForm={setForm}
        editingId={editingId}
      />

      {/* Team Members List */}
      <div className="grid gap-4">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member._id}
            member={member}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
