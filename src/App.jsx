import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import WelcomePopup from "./components/WelcomePopup";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(true); 
  const navigate = useNavigate();

  const handleDiscoverProjects = () => {
  setShowPopup(false);
  navigate("/projects");
  };

  return (
    <>
      {showPopup && <WelcomePopup onDiscover={handleDiscoverProjects} />}
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/projects" />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/main" element={<Main />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;