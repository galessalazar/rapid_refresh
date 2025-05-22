import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../axiosConfig";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in and is owner
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Verify owner status
    const checkOwnerStatus = async () => {
      try {
        const response = await axios.get('/api/verify-owner', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!response.data.isOwner) {
          navigate('/dashboard');
        }
      } catch (err) {
        navigate('/login');
      }
    };

    checkOwnerStatus();
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/register', {
        username,
        email,
        password
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create New User</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            minLength={3}
            maxLength={25}
          />

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Choose a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            minLength={6}
            maxLength={25}
          />

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#334155] text-white rounded hover:bg-[#64748b] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register; 