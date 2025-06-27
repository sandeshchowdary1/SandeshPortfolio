import React from 'react';
import '../styles/SkillsGrid.css';
import htmlLogo from '../images/Html5.png';
import mysqllogo from '../images/MySQL.png';
import pythonlogo from '../images/Python.jpg';
import powerbi from '../images/powerbi.png';
import ml from '../images/ML.png';
import react from '../images/react.png';
import css from '../images/css.png';
import java from '../images/java.jpg';

const SkillsGrid = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Let’s Explore My Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-image-container">
              <img src={htmlLogo} alt="HTML5" className="skill-image"  />
            </div>
            <h3 className="skill-title">HTML5</h3>
          </div>

          <div className="skill-card">
            <div className="skill-image-container">
              <img src={css} alt="CSS3" className="skill-image"   width="1000px" height="1000px"/>
            </div>
            <h3 className="skill-title">CSS3</h3>
          </div>

          <div className="skill-card">
            <div className="skill-image-container">
              <img src={react} alt="React.js" className="skill-image" />
            </div>
            <h3 className="skill-title">React.js</h3>
          </div>

          <div className="skill-card">
            <div className="skill-image-container">
              <img src={pythonlogo} alt="Python" className="skill-image" />
            </div>
            <h3 className="skill-title">Python</h3>
          </div>

          <div className="skill-card">
            <div className="skill-image-container">
              <img src={java} alt="Java" className="skill-image" />
            </div>
            <h3 className="skill-title">Java</h3>
          </div>

          <div className="skill-card">
            <div className="skill-image-container">
              <img src={ml} alt="Machine Learning" className="skill-image" />
            </div>
            <h3 className="skill-title">Machine Learning</h3>
          </div>

          <div className="skill-card">
            <div className="skill-image-container">
              <img src={mysqllogo} alt="My SQL" className="skill-image" />
            </div>
            <h3 className="skill-title">My SQL</h3>
          </div>

          <div className="skill-card">
            <div className="skill-image-container">
              <img src={powerbi} alt="Power BI" className="skill-image" />
            </div>
            <h3 className="skill-title">Power BI</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;