// src/components/Resume.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/Resume.css'; // We will update this file next
import SkillsGrid from './SkillsGrid';
// To use icons, make sure you have an icon library like React Icons installed
// npm install react-icons
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';

const Resume = () => {
  // This is the logic for the scroll animation
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
      }
    );

    const currentCards = cardsRef.current;
    currentCards.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);


  return (
    <div>
    <section id="Resume" className="resume-section">
      <div className="resume-header">
        <h2>My Resume</h2>
        <p>A summary of my academic and professional journey.</p>
      </div>

      <div className="resume-timeline">
        {/* --- Education Section --- */}
        <div className="timeline-item">
          <div className="timeline-title-container">
            {/* ADDED ICON */}
            <h3 className="timeline-title"><FaGraduationCap className="timeline-icon" /> Education</h3>
          </div>
          <div className="timeline-content-container">
            {/* The ref is added to each card for the animation */}
            <div className="timeline-card" ref={(el) => cardsRef.current.push(el)}>
              <span className="timeline-date">2023 - 2027</span>
              <h4>Malla Reddy University, Hyderabad</h4>
              <p>B.Tech – Computer Science (Data Science) | CGPA: 8.95 / 10</p>
            </div>
            <div className="timeline-card" ref={(el) => cardsRef.current.push(el)}>
              <span className="timeline-date">2021 - 2023</span>
              <h4>SRI CHAITANYA JR COLLEGE, Hyderabad</h4>
              <p>12th | TSBIE | CGPA: 9.10 / 10</p>
            </div>
            <div className="timeline-card" ref={(el) => cardsRef.current.push(el)}>
              <span className="timeline-date">2021</span>
              <h4>SRI CHAITANYA HIGH SCHOOL, Hyderabad</h4>
              <p>10th | SSC | CGPA: 10 / 10</p>
            </div>
          </div>
        </div>

        {/* --- Experience Section --- */}
        <div className="timeline-item">
          <div className="timeline-title-container">
            {/* ADDED ICON */}
            <h3 className="timeline-title"><FaBriefcase className="timeline-icon" /> Experience</h3>
          </div>
          <div className="timeline-content-container">
            <div className="timeline-card" ref={(el) => cardsRef.current.push(el)}>
              <span className="timeline-date">April 2025 - Present</span>
              <h4>President - Yukti Veda Club</h4>
              <p>Dept of Data Science - Malla Reddy University</p>
            </div>
          </div>
        </div>

        {/* --- Achievements Section --- */}
        <div className="timeline-item">
          <div className="timeline-title-container">
            {/* ADDED ICON */}
            <h3 className="timeline-title"><FaTrophy className="timeline-icon" /> Achievements</h3>
          </div>
          <div className="timeline-content-container">
            <div className="timeline-card" ref={(el) => cardsRef.current.push(el)}>
              <span className="timeline-date">2023 - 2027</span>
              <h4>Prime Minister’s Scholarship Scheme (PMSS)</h4>
              <p>Awarded for academic excellence and service.</p>
            </div>
          </div>
        </div> 
      </div>
    </section>
    <SkillsGrid />
    </div>
  );
};

export default Resume;