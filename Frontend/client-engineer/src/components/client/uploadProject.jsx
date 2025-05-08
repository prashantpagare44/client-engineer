import { useState } from 'react';
import axios from 'axios';

function UploadProject() {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    budget: '',
    location: '',
  });

  const handleChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:3000/api/client/projects', projectData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Project uploaded successfully!');
      console.log(res.data);
    } catch (err) {
      console.error("Failed to upload project", err);
      alert('Failed to upload project');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-blue-200 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-700">Upload Your Project</h2>

        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={projectData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        
        <textarea
          name="description"
          placeholder="Project Description"
          value={projectData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          rows="4"
        />

        <input
          type="number"
          name="budget"
          placeholder="Budget in ₹"
          value={projectData.budget}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Project Location"
          value={projectData.location}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition duration-300"
        >
          Upload Project
        </button>
      </form>
    </div>
  );
}

export default UploadProject;
