import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt, FaBriefcase, FaTasks, FaComments, FaFileAlt, FaStar, FaCamera, FaEdit } from "react-icons/fa";

const EngineerDashboard = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Home Renovation", status: "Ongoing", client: "Rahul Sharma" },
    { id: 2, name: "Kitchen Remodeling", status: "Completed", client: "Ananya Verma" },
  ]);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col p-6 space-y-6 shadow-lg">
        <div className="flex items-center space-x-3">
          <FaUserCircle className="text-3xl" />
          <h2 className="text-lg font-bold">Engineer Name</h2>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link to="/engineer/profile" className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaUserCircle /> Profile
          </Link>
          <Link to="/engineer/edit-profile" className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaEdit /> Edit Profile
          </Link>
          <Link to="/engineer/assign-project" className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaBriefcase /> Assign Project
          </Link>
          <Link to="/engineer/ongoing-projects" className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaTasks /> Ongoing Projects
          </Link>
          <Link to="/engineer/documents" className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaFileAlt /> Documents
          </Link>
          <Link to="/engineer/ratings" className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaStar /> Ratings
          </Link>
          <button className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Engineer Dashboard</h1>
        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-gray-600">Status: {project.status}</p>
              <p className="text-gray-600">Client: {project.client}</p>
              <div className="mt-3 flex gap-3">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  <FaComments /> Chat
                </button>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                  <FaCamera /> Share Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngineerDashboard;
