import { useRef, useState } from "react";
import "./Projects.css";
import { project0 } from "./projects/project0";
import { project1 } from "./projects/project1";
import { project2 } from "./projects/project2";
import { project3 } from "./projects/project3";
import { project4 } from "./projects/project4";
import { project5 } from "./projects/project5";
import { project6 } from "./projects/project6";
import { project7 } from "./projects/project7";
import { project8 } from "./projects/project8";
import { project9 } from "./projects/project9";

function Projects() {
  const itemsRef = useRef(null);
  const [projectList, setProjectList] = useState(setupProjectList);
  const [showMore, setShowMore] = useState({});

  function scrollToProject(project) {
    const map = getMap();
    const node = map.get(project);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  function handleMoreClick(projectId) {
    setShowMore(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  }
  
  return (
    <div className="projects-container">
      <nav className="projects-nav">
        <button onClick={() => scrollToProject(projectList[0])}>Neo</button>
        <button onClick={() => scrollToProject(projectList[5])}>Millie</button>
        <button onClick={() => scrollToProject(projectList[8])}>Bella</button>
      </nav>
      <ul className="projects-list">
          {projectList.map((project) => (
            <li key={project.id} className="project-item" ref={(node) => {
              const map = getMap();
              map.set(project, node);
              return () => {
                map.delete(project);
              };
            }}>
              {!showMore[project.id] ? (
                <img src={project.imageUrl} className="project-image" />
              ) : (
                <p className="project-description">{project.description}</p>
              )}
              <button className="project-button" onClick={() => handleMoreClick(project.id)}>
                {showMore[project.id] ? "Hide" : "Show"}
              </button>
            </li>
          ))}
        </ul>
      </div>
  );
}

function setupProjectList() {
  const descriptions = [
    project0.description,
    project1.description,
    project2.description,
    project3.description,
    project4.description,
    project5.description,
    project6.description,
    project7.description,
    project8.description,
    project9.description,
  ];
  
  const projectCount = 10;
  const projectList = new Array(projectCount)
  for (let i = 0; i < projectCount; i++) {
    let imageUrl = '';
    if (i < 5) {
      imageUrl = "https://placecats.com/neo/320/240";
    } else if (i < 8) {
      imageUrl = "https://placecats.com/millie/320/240";
    } else {
      imageUrl = "https://placecats.com/bella/320/240";
    }
    projectList[i] = {
      id: i,
      imageUrl,
      description: descriptions[i],
    };
  }
  return projectList;
}

export default Projects;