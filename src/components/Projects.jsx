import React from 'react';
import '../styles/Projects.css';
import Yuktiveda from '../images/Yuktivedahome.png'; 
import Salesprediction from '../images/salesprediction.png';
import Portfolio from '../images/SandeshPortfoliohome.png';  

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Yukti Veda Club",
      category: "Full Stack Project",
      description: "An intuitive platform for managing tech events, startup ideas, and student innovation.",
      image: Yuktiveda,
    },
    {
      id: 2,
      title: "Sales prediction App",
      category: "Machine Learning",
      description: "A data-driven app for forecasting product sales and optimizing business decisions.",
      image: Salesprediction,
    },
    {
      id: 3,
      title: "My Portfolio",
      category: "Portfolio",
      description: "A personal portfolio showcasing my projects, skills, and journey as a developer and data analyst.",
      image: Portfolio,
    }
  ];

  return (
    <section className="works-section">
      <div className="works-container">
        <div className="works-header">
          <h2 className="works-title">Works & Projects</h2>
          <p className="works-description">
            Check out some of my design projects, meticulously crafted with love and dedication,
            each one reflecting the passion and soul I poured into every detail.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-buttons">
                <button className="project-btn b1">Demo</button>
                <button className="project-btn b2">Source</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
