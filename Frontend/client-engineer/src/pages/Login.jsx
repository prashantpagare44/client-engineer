import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Mock authentication logic (Replace with API call)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );
    
    if (!user) {
      setError('Invalid email or password');
      return;
    }
    
    localStorage.setItem('user', JSON.stringify(user));
    
    if (user.role === 'client') {
      navigate('/clientdashboard');
    } else {
      navigate('/engineerdashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative" 
      style={{ backgroundImage: "url('/login-bg.jpg')" }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <form onSubmit={handleLogin} className="relative bg-white bg-opacity-90 p-8 rounded-xl shadow-lg w-96 backdrop-blur-md border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="flex items-center border rounded-lg px-4 py-2 mb-4">
          <FaUser className="text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full pl-2 focus:outline-none"
            required
          />
        </div>
        
        <div className="flex items-center border rounded-lg px-4 py-2 mb-4">
          <FaLock className="text-gray-500" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full pl-2 focus:outline-none"
            required
          />
        </div>
        
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-md">
          Login
        </button>
        
        <p className="mt-4 text-sm text-center text-gray-700">
          Don’t have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
