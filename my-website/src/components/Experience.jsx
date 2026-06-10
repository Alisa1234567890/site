import { useState } from "react";
import "./Experience.css";
import { experience0 } from "./experiences/experience0";
import { experience1 } from "./experiences/experience1";
import { experience2 } from "./experiences/experience2";
import { experience3 } from "./experiences/experience3";
import { experience4 } from "./experiences/experience4";

function Experience() {
  const [experienceList] = useState(setupExperienceList);

  return (
    <div className="experiences-container">
      <ul className="experiences-list">
        {experienceList.map((experience) => (
          <li key={experience.id} className="experience-item">
            <img src={experience.imageUrl} className="experience-image" alt={`Experience ${experience.id}`} />
            <p className="experience-description">{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function setupExperienceList() {
  const descriptions = [
    experience0.description,
    experience1.description,
    experience2.description,
    experience3.description,
    experience4.description,
  ];
  
  const experienceCount = 5;
  const experienceList = new Array(experienceCount);
  for (let i = 0; i < experienceCount; i++) {
    let imageUrl = '';
    if (i < 2) {
      imageUrl = "https://placecats.com/neo/800/300";
    } else if (i < 4) {
      imageUrl = "https://placecats.com/millie/800/300";
    } else {
      imageUrl = "https://placecats.com/bella/800/300";
    }
    experienceList[i] = {
      id: i,
      imageUrl,
      description: descriptions[i],
    };
  }
  return experienceList;
}

export default Experience;
