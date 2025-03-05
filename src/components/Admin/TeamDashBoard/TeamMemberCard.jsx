const TeamMemberCard = ({ member, handleEdit, handleDelete }) => {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md gap-4">
      <img
        src={member.avatar}
        alt={member.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h2 className="text-lg font-bold">{member.teamId}</h2>
        <p className="text-gray-600">Name : {member.name}</p>
        <p className="text-gray-600">Email : {member.email}</p>
        <p className="text-gray-600">Role : {member.role}</p>
        <p className="text-gray-600">Description : {member.description}</p>
        <p className="text-gray-600">Joined : {member.joinedAt}</p>
        <div className="flex gap-2 mt-2">
          <button
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            onClick={() => handleEdit(member)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={() => handleDelete(member._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
