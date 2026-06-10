function ProjectItem({ project, isExpanded, forwardRef }) {
  return (
    <li
      className="project-item"
      ref={forwardRef}
    >
      {!isExpanded ? (
        <img src={project.imageUrl} className="project-image" />
      ) : (
        <p className="project-description">{project.description}</p>
      )}
    </li>
  );
}

export default ProjectItem;
