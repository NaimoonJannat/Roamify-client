import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const fetchUsers = async () => {
      try {
          const response = await axios.get('http://localhost:5000/users');
          setUsers(response?.data);
          console.log(response, "data to asca mam");
      } catch (error) {
          console.error("Error fetching users:", error);
      }
  };
   
    useEffect(() => {
      

        fetchUsers();
    }, []);

    // Handle role updates
    const handleUpdateRole = async (user) => {
        const updatedRole = user.role === "admin" ? "user" : "admin";

        try {
            await axios.put(`http://localhost:5000/users/${user.id}`, { role: updatedRole });
            setUsers(users.map(u => 
                u.id === user.id ? { ...u, role: updatedRole } : u
            ));
            setSelectedUser(null); // Close the modal
        } catch (error) {
            console.error("Error updating role:", error);
        }
    };

    return (
        <div className="p-6 bg-gradient-to-b bg-white min-h-screen">
            <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        { users.length > 0 && users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{user.email}</td>
                                <td
                                    className={`px-6 py-4 whitespace-nowrap font-bold ${
                                        user.role === "admin" ? "text-red-500" : "text-green-500"
                                    }`}
                                >
                                    {user.role}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        onClick={() => setSelectedUser(user)}
                                        className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                                    >
                                        <FaEdit /> Update Role
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {selectedUser && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h3 className="text-lg font-semibold mb-4">
                            Update Role for {selectedUser.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-6">
                            Current Role:{" "}
                            <span
                                className={`font-bold ${
                                    selectedUser.role === "admin"
                                        ? "text-red-500"
                                        : "text-green-500"
                                }`}
                            >
                                {selectedUser.role}
                            </span>
                        </p>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setSelectedUser(null)}
                                className="px-4 py-2 text-sm text-gray-700 border rounded-lg hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleUpdateRole(selectedUser)}
                                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                            >
                                Update Role
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserTable;
