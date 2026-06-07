import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
    </nav>
  );
}

export default Navbar;