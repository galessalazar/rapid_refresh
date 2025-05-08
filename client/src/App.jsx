import { useState } from "react";
// need the routes and route to separate the paths below
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import PublicServices from "./components/PublicPage";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* added padding div to impact all pages */}
        <div className="pt-20 sm:pt-24 px-4 w-full flex justify-content center">
          <Routes>
            {/* This creates the home path to separate the homepage from the others */}
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<PublicServices />} />
            <Route path="/contact" element={<Contact />} />

            {/* This provides a separate route for the dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
