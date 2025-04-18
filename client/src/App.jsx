import { useState } from "react";
// need the routes and route to separate the paths below
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* This creates the home path to separate the homepage from the others */}
          <Route path="/" element={<div>Homepage</div>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />

          {/* This provides a separate route for the dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
