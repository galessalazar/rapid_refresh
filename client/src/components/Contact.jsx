import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import { supabase } from "./CreateClient";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isOwner, setIsOwner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

   

    // Verify owner status
    const checkOwnerStatus = async () => {

       const { data } = await supabase.auth.getSession();
    // Check if user is logged in
    const token = data.session?.access_token;
    if (!token) {
      return; // Don't redirect, just show the form
    }
      try {
                    console.log('isOwner:', isOwner)

        const response = await axios.get('/api/verify-owner', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setIsOwner(response.data.isOwner);

      } catch (err) {
        console.error('Error checking owner status:', err);
      }
    };

    checkOwnerStatus();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      console.log('Token:', token)
      if (!token) {
        setStatus({ 
          type: "error", 
          message: "Please log in to submit the contact form" 
        });
        return;
      }

      await axios.post("/api/contact", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error.response?.status === 401) {
        setStatus({ 
          type: "error", 
          message: "Please log in to submit the contact form" 
        });
      } else if (error.response?.status === 403) {
        setStatus({ 
          type: "error", 
          message: "Only owners can submit contact forms" 
        });
      } else {
        setStatus({ 
          type: "error", 
          message: error.response?.data?.message || "Failed to send message. Please try again." 
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        
        {status.message && (
          <div className={`mb-4 p-3 rounded ${
            status.type === "success" ? "bg-green-100 text-green-700" :
            status.type === "error" ? "bg-red-100 text-red-700" :
            "bg-blue-100 text-blue-700"
          }`}>
            {status.message}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            required
          />

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="w-full py-2 px-4 bg-[#334155] text-white rounded hover:bg-[#64748b] focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {status.type === "loading" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;