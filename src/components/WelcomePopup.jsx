import { useState, useEffect } from "react";
import "./WelcomePopup.css";

function WelcomePopup({ onDiscover }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDiscover = () => {
    setIsClosing(true);
    setTimeout(() => {
      onDiscover();
    }, 300);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`welcome-popup-overlay ${isClosing ? "closing" : ""}`}>
      <div className={`welcome-popup-modal ${isClosing ? "closing" : ""}`}>

        <div className="popup-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>

      
        <div className="popup-content">
          <div className="popup-header">
            <h1 className="popup-title">Bienvenue! 👋</h1>
          </div>

          <div className="popup-body">
            <p className="popup-subtitle">
              Découvrez mon travail et mes créations
            </p>
          </div>

          <div className="popup-footer">
            <button
              className="btn-primary"
              onClick={handleDiscover}
              aria-label="Découvrir mes projets"
            >
              <span className="btn-text">Découvrir mes projets</span>
              <span className="btn-icon">→</span>
            </button>

            <button
              className="btn-secondary"
              onClick={handleClose}
              aria-label="Fermer"
            >
              Fermer
            </button>
          </div>

   
          <div className="scroll-indicator">
            <span>ou explorez</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePopup;
