import "./Footer.css";
import GitHubLogo from "../assets/GitHub-Logo.png";
import LinkedinLogo from "../assets/Linkedin-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">&copy; 2024 Alisa Rudenko. All rights reserved.</p>
        <div className="footer-links">
          <a 
            href="https://github.com/Alisa1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <img src={GitHubLogo} alt="GitHub" />
          </a>
          <a 
            href="https://www.linkedin.com/in/alisa-rudenko-a8189a245/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <img src={LinkedinLogo} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
    