import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;