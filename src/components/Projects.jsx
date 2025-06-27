import React from 'react';
import '../styles/Projects.css';
import Yuktiveda from '../images/Yuktivedahome.png'; 
import Salesprediction from '../images/salesprediction.png';
import Portfolio from '../images/SandeshPortfoliohome.png';  

const Projects = () => {
  return (
    <section id='Projects' className="works-section">
      <div className="works-container">
        <div className="works-header">
          <h2 className="works-title">Works & Projects</h2>
          <p className="works-description">
            Check out some of my design projects, meticulously crafted with love and dedication,
            each one reflecting the passion and soul I poured into every detail.
          </p>
        </div>

        <div className="projects-grid">

          {/* Project 1: Yukti Veda */}
          <div className="project-card">
            <div className="project-image-container">
              <img src={Yuktiveda} alt="Yukti Veda Club" className="project-image" />
            </div>
            <h3 className="project-title">Yukti Veda Club</h3>
            <p className="project-description">
              An intuitive platform for managing tech events, startup ideas, and student innovation.
            </p>
            <div className="project-buttons">
              <a href="https://yuktivedaclub.vercel.app" target="_blank" rel="noopener noreferrer">
                <button className="project-btn b1">Demo</button>
              </a>
                <a href="https://github.com/sandeshchowdary1/YuktiVedaClub" target="_blank" rel="noopener noreferrer">
               <button className="project-btn b2">Source</button>
               </a>
             
            </div>
          </div>

          {/* Project 2: Sales Prediction App */}
          <div className="project-card">
            <div className="project-image-container">
              <img src={Salesprediction} alt="Sales prediction App" className="project-image" />
            </div>
            <h3 className="project-title">Sales prediction App</h3>
            <p className="project-description">
              A data-driven app for forecasting product sales and optimizing business decisions.
            </p>
            <div className="project-buttons">
              <a href="https://yuktivedaclub.vercel.app" target="_blank" rel="noopener noreferrer">
                <button className="project-btn b1">Demo</button>
              </a>
                <a href="https://yuktivedaclub.vercel.app" target="_blank" rel="noopener noreferrer">
               <button className="project-btn b2">Source</button>
               </a>
            </div>
          </div>

          {/* Project 3: Portfolio */}
          <div className="project-card">
            <div className="project-image-container">
              <img src={Portfolio} alt="My Portfolio" className="project-image" />
            </div>
            <h3 className="project-title">My Portfolio</h3>
            <p className="project-description">
              A personal portfolio showcasing my projects, skills, and journey as a developer and data analyst.
            </p>
            <div className="project-buttons">
              <a href="https://narrasandeshportfolio.vercel.app/" target="_self" rel="noopener noreferrer">
                <button className="project-btn b1">Demo</button>
              </a>
                <a href="https://github.com/sandeshchowdary1/SandeshPortfolio" target="_blank" rel="noopener noreferrer">
               <button className="project-btn b2">Source</button>
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;