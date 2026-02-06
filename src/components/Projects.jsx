import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Flutter App",
      description:
        "A fully featured e-commerce application built with Flutter and Firebase. Includes user authentication, product catalog, cart management, and payment gateway integration.",
      tech: ["Flutter", "Firebase", "Stripe API", "Provider"],
      links: { github: "#", external: "#" },
      image: "project1", // Placeholder class
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and Vanilla CSS to showcase my projects and skills. Features a clean, dark-themed design with smooth animations.",
      tech: ["React", "CSS", "Vite"],
      links: { github: "#", external: "#" },
      image: "project2",
    },
    {
      title: "Task Management Tool",
      description:
        "A productivity tool for managing daily tasks and projects. Built with React for the frontend and Node.js for the backend. Features drag-and-drop interface and real-time updates.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      links: { github: "#", external: "#" },
      image: "project3",
    },
  ];

  return (
    <section id="work" className="section projects-section">
      <h2 className="section-title">Some Things I've Built</h2>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a href={project.links.external}>{project.title}</a>
                </h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.links.external}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className={`project-image ${project.image}`}>
              <div className="img-placeholder-project"></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
