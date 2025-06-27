// src/components/Home.jsx

import React from 'react';
import '../styles/Home.css';
import Sandeshimg from '../images/Sandeshimg.jpg'; 
import logoImage from '../images/logo.png'; 
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
const Home = () => {
  // This function for downloading the CV should now be correct from our last fix.
  const handleDownloadCV = () => {
    const pdfUrl = "/SandeshResume.pdf"; // Assuming your PDF is in the /public folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Sandesh_Chowdary_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home1-container">
      <nav className="home1-navbar">
        {/* 2. REPLACE THE "NSC" TEXT WITH YOUR IMAGE TAG */}
        <div className="home1-logo">
          <img src={logoImage} alt="NSC Logo" />
        </div>
        
        <div className="home1-nav-links">
          <a className="home1-nav-link" href="#Home">About</a>
          <a className="home1-nav-link" href="#Resume">Resume</a>
    <a  className="home1-nav-link" href="#Projects">Projects</a>
    <a  className="home1-nav-link"  href="#Contact">Contact</a>
        </div>
      </nav>

      <div className="home1-content-wrapper">
        <div className="home1-sidebar">
          <div className="home1-profile-circle">
            <div className="home1-profile-img">
              <img src={Sandeshimg} alt="Narra Sandesh Chowdary" />
            </div>
          </div>
          <div className="home1-name">
            <span>Narra Sandesh</span>
            <span> Chowdary</span>
          </div>
          <p className='home1-name-p'>Full-Stack Developer | Data Analyst</p>
          <div className="home1-social-icons">
  <a href="https://www.linkedin.com/in/sandesh-chowdary-953468277/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://github.com/sandeshchowdary1" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://www.instagram.com/__sandesh__chowdary__/" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
</div>
        </div>

        <div className="home1-main-content">
          <div className="home1-greeting">Hello There!</div>
          <div className="home1-heading">
            <div className="home1-heading-line">
              <span className="home1-bold">I'M Sandesh Chowdary, A</span>
            </div>
            <div className="home1-heading-line">
              <span className="home1-bold">FULL-STACK DEVELOPER &</span>
            </div>
            <div className="home1-heading-line">
              <span className="home1-bold">DATA ANALYST</span>
            </div>
            <div className="home1-heading-line">
              <span className="home1-outline">TRANSFORMING IDEAS INTO</span>
            </div>
            <div className="home1-heading-line">
              <span className="home1-outline">SCALABLE WEB SOLUTIONS</span>
            </div>
            <div className="home1-heading-line">
              <span className="home1-outline">AND DATA-DRIVEN INSIGHTS.</span>
            </div>
          </div>
          <div className="home1-status">
            <div className="home1-status-dot"></div>
            <div className="home1-status-text">Open to Internship Roles</div>
          </div>
          
          <button className="home1-download-btn" onClick={handleDownloadCV}>
            <svg className="home1-download-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Resume
          </button>
        </div>
      </div>
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;