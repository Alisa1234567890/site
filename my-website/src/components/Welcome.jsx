import { useState, useEffect } from "react";
import "./Welcome.css";

function Welcome({ onEnter }) {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const text = "welcome to my portfolio";
    const newLetters = text.split("").map((char, index) => ({
      id: index,
      char: char,
      left: (index * 100) / text.length,
      delay: index * 0.05,
    }));
    setLetters(newLetters);
  }, []);

  return (
    <div className="welcome-container">
      <div className="letters-container">
        {letters.map((letter) => (
          <span
            key={letter.id}
            className="falling-letter"
            style={{
              left: `${letter.left}%`,
              animationDelay: `${letter.delay}s`,
            }}
          >
            {letter.char}
          </span>
        ))}
      </div>

      <div className="welcome-content">
        <button className="enter-button" onClick={onEnter}>
          Navigate to my projects
        </button>
      </div>
    </div>
  );
}

export default Welcome;
