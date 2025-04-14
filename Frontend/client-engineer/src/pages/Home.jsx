import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from localStorage or API
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-gray-900 p-4 relative" 
      style={{ backgroundImage: "url('/home1.png')" }} // Optimized Background
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div> 
      
      <div className="relative text-center px-6">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Welcome to Renovation Connect
        </h1>
        <p className="text-lg mb-6 max-w-2xl text-gray-200 drop-shadow-md">
          A centralized platform to connect clients with skilled engineers for home renovation and repair projects.
        </p>

        {/* Login & Register Buttons */}
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-lg">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition shadow-lg">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
