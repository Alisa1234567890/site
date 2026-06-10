import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import WelcomePopup from "./components/WelcomePopup";
import Welcome from "./components/Welcome";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [hasVisited, setHasVisited] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const visited = localStorage.getItem("portfolioVisited");
    if (visited) {
      setHasVisited(true);
      setShowPopup(false);
    } else {
      // Rediriger vers /projects par défaut
      navigate("/projects");
    }
  }, [navigate]);

  const handleDiscoverProjects = () => {
    localStorage.setItem("portfolioVisited", "true");
    setHasVisited(true);
    setShowPopup(false);
  };

  if (!hasVisited) {
    return (
      <>
        <WelcomePopup onDiscover={handleDiscoverProjects} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;