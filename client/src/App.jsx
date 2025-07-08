import { useState } from "react";
// need the routes and route to separate the paths below
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
// import { AuthProvider } from "./context/AuthContext";

import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import PublicServices from "./components/PublicPage";
import Hero from "./components/Hero";
// import Login from "./components/Login";
import Register from "./components/Register";
import ChangePassword from "./components/ChangePassword";
import  SupabaseLogin  from "./components/SupabaseLogin";
import "@fontsource/material-symbols-outlined";


// Protected Route component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  // const [count, setCount] = useState(0);

  return (
    // <AuthProvider>
      <BrowserRouter>
        <Navbar />
        {/* added padding div to impact all pages */}
        <div className="pt-20 px-4 w-full flex flex-col lg:flex-row lg:justify-center lg:items-center lg:min-h-screen">
          
      
          <Routes>
            {/* This creates the home path to separate the homepage from the others */}
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<PublicServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<SupabaseLogin />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/change-password" 
              element={
                <ProtectedRoute>
                  <ChangePassword />
                </ProtectedRoute>
              } 
            />

            {/* Protected Dashboard Route */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
          
        </div>
        
      </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;
