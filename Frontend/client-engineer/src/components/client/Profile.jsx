import { useEffect, useState } from 'react';
import axios from 'axios';

function ClientProfile() {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/client/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClient(res.data);
      } catch (err) {
        console.error("Failed to load client profile", err);
      }
    };

    fetchClientData();
  }, []);

  if (!client) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-xl font-semibold text-gray-600 animate-pulse">Loading profile...</div>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
        <div className="text-center mb-8">
          <img
            className="w-24 h-24 rounded-full mx-auto shadow-md"
            src="https://i.pravatar.cc/150?img=3" 
            alt="Client Avatar"
          />
          <h2 className="text-3xl font-extrabold text-gray-800 mt-4">{client.name}</h2>
          <p className="text-gray-500">{client.location}</p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-semibold">Email:</span>
            <span className="text-gray-500">{client.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-semibold">Phone:</span>
            <span className="text-gray-500">{client.phone}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-semibold">Location:</span>
            <span className="text-gray-500">{client.location}</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientProfile;
