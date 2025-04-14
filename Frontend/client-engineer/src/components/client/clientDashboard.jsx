import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaProjectDiagram, FaSignOutAlt, FaPlus, FaEdit, FaTasks, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const engineers = [
  { id: 1, name: 'Amit Sharma', location: 'Indore', specialization: 'Civil Engineer', image: '/engineers/amit.jpg' },
  { id: 2, name: 'Rahul Verma', location: 'Bhopal', specialization: 'Structural Engineer', image: '/engineers/rahul.jpg' },
  { id: 3, name: 'Priya Singh', location: 'Ujjain', specialization: 'Architect', image: '/engineers/priya.jpg' },
  { id: 4, name: 'Neha Dubey', location: 'Indore', specialization: 'Mechanical Engineer', image: '/engineers/neha.jpg' }
];

function ClientDashboard() {
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-teal-900 text-white flex flex-col p-6 space-y-6 shadow-lg">
        <div className="flex items-center space-x-3">
          <FaUserCircle className="text-3xl" />
          <h2 className="text-lg font-bold">Client Name</h2>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link to="/client/profile" className="flex items-center gap-2 hover:bg-teal-700 p-2 rounded">
            <FaUserCircle /> Profile
          </Link>
          <Link to="/client/edit-profile" className="flex items-center gap-2 hover:bg-teal-700 p-2 rounded">
            <FaEdit /> Edit Profile
          </Link>
          <Link to="/client/projects" className="flex items-center gap-2 hover:bg-teal-700 p-2 rounded">
            <FaProjectDiagram /> My Projects
          </Link>
          <Link to="/client/track-project" className="flex items-center gap-2 hover:bg-teal-700 p-2 rounded">
            <FaTasks /> Track Project
          </Link>
          <button className="flex items-center gap-2 hover:bg-teal-700 p-2 rounded">
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-cover bg-center background-color blue" style={{ backgroundImage: "url('/client1.png')" }}>
        <div className="flex justify-between items-center mb-6">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search engineers by location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          {/* Post Project Button */}
          <Link to="/client/post-project" className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-teal-700">
            <FaPlus /> Post Project
          </Link>
        </div>

        {/* Engineer List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineers.filter(engineer => engineer.location.toLowerCase().includes(search.toLowerCase())).map((engineer) => (
            <div key={engineer.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center">
              <img src={engineer.image} alt={engineer.name} className="w-24 h-24 rounded-full border-2 border-teal-500 mb-3" />
              <h3 className="text-xl font-bold">{engineer.name}</h3>
              <p className="text-gray-600 flex items-center gap-1"><FaMapMarkerAlt /> {engineer.location}</p>
              <p className="text-gray-600 flex items-center gap-1"><FaBriefcase /> {engineer.specialization}</p>
              <button className="mt-3 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">Assign Project</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
