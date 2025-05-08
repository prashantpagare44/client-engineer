import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaUser, FaEnvelope, FaLock, FaUserCog, FaUserTie } from 'react-icons/fa';

function Register() {
  const [formData, setFormData] = useState({
    role: 'client',
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
  
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Optional: prevent duplicate email
    const userExists = existingUsers.some(user => user.email === formData.email);
    if (userExists) {
      alert("User with this email already exists.");
      return;
    }
  
    // Create new user with a fake token
    const newUser = {
      ...formData,
      token: Math.random().toString(36).substr(2),  // Random fake token
    };
  
    const updatedUsers = [...existingUsers, newUser];
  
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  
    // Redirect to login
    navigate("/login");
  };
  
  

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative text-gray-900"
      style={{ backgroundImage: "url('/optimized-register-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <form 
        onSubmit={handleRegister} 
        className="relative bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-96 backdrop-blur-md border border-gray-300"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2>

        <div className="relative w-full mb-4">
          <select
            name="role"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none appearance-none"
          >
            <option value="client">Client</option>
            <option value="engineer">Engineer</option>
          </select>
          <div className="absolute right-4 top-3 text-gray-500">
            {formData.role === "client" ? <FaUserTie size={20} /> : <FaUserCog size={20} />}
          </div>
        </div>

        <div className="relative w-full mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <div className="absolute left-3 top-3 text-gray-500">
            <FaUser size={18} />
          </div>
        </div>

        <div className="relative w-full mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <div className="absolute left-3 top-3 text-gray-500">
            <FaEnvelope size={18} />
          </div>
        </div>

        <div className="relative w-full mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <div className="absolute left-3 top-3 text-gray-500">
            <FaLock size={18} />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition transform hover:scale-105 shadow-md"
        >
          Register
        </button>

        <p className="mt-4 text-sm text-center text-gray-700">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
