import React from 'react';
import '../styles/SkillsGrid.css';
import htmlLogo from '../images/Html5.png';
import mysqllogo from '../images/MySQL.png';
import pythonlogo from '../images/Python.jpg';
const SkillsGrid = () => {
  const skills = [
    {
      id: 1,
      title: "HTML5",
      description: "Markup language for web pages.",
      image: htmlLogo,
      category: "Frontend"
    },
    {
      id: 2,
      title: "CSS3",
      description: "Mobile application UI/UX branding.",
      image: "https://via.placeholder.com/150",
      category: "design"
    },
    {
      id: 3,
      title: "React.js",
      description: "Admin dashboard with analytics.",
      image: "https://via.placeholder.com/150",
      category: "dashboard"
    },
    {
      id: 4,
      title: "Python",
      description: "Interface design for a mobile game.",
      image: pythonlogo,
      category: "game"
    },
    {
      id: 5,
      title: "Java",
      description: "Social and email marketing assets.",
      image: "https://via.placeholder.com/150",
      category: "marketing"
    },
    {
      id: 6,
      title: "Machine Learning",
      description: "Logo and guideline design.",
      image: "https://via.placeholder.com/150",
      category: "design"
    },
    {
      id: 7,
      title: "My SQL",
      description: "Logo and guideline design.",
      image: mysqllogo,
      category: "design"
    },
    {
      id: 8,
      title: "Power BI",
      description: "Logo and guideline design.",
      image: "https://via.placeholder.com/150",
      category: "design"
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Let’s Explore My Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.id} className="skill-card">
              <div className="skill-image-container">
                <img src={skill.image} alt={skill.title} className="skill-image" />
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;