// Intro.js
import React from 'react';
import './Intro.css';
import { FaDownload } from 'react-icons/fa';
import profilePic from '../assets/Manisha Kumari Pandey.jpeg';
// import resumePDF from '../Public/Manisha_Kumari_Pandey_Resume.pdf'; 
// import resumePDF from '../Public/Manisha_Kumari_Pandey_Resume.pdf'; 

const Intro = () => {
  return (
    <section className="intro-section" id="intro-section">
      <div className="resume-download-topright">
      <a href="/Manisha_Kumari_Pandey_Resume.pdf" download className="resume-btn">
        <FaDownload className="resume-icon" />
        Download Resume
      </a>

      </div>

      <h2 className="section-heading">About Me</h2>

      <div className="intro-content">
        <div className="profile-photo">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="intro-text">
          <p>Hello! I'm Manisha Pandey, a driven software engineering student passionate about solving real-world problems and building impactful solutions in the realms of data and web development.</p>
          <p>I've solved over 400 questions on LeetCode, built multiple hands-on projects, and gained valuable insights into various tech domains including machine learning, full-stack development, and data analytics.</p>
          <p>Outside of tech, I enjoy anchoring, photography, traveling, and expressing my creativity through painting.</p>
        </div>
      </div>

      <h3 className="section-heading">My Skills</h3>

      <div className="skill-cards-grid">
        <div className="skill-card">
          <h4>Languages</h4>
          <div className="skills-container">
            {['Python', 'Java', 'SQL', 'HTML/CSS'].map((skill, idx) => (
              <div className="skill-tag" key={idx}>{skill}</div>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h4>Frameworks & Tools</h4>
          <div className="skills-container">
            {['Power BI', 'Django', 'Postman', 'Git', 'GitHub', 'VS Code', 'Firebase'].map((skill, idx) => (
              <div className="skill-tag" key={idx}>{skill}</div>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h4>Concepts</h4>
          <div className="skills-container">
            {['Data Structures', 'Algorithms', 'Problem Solving'].map((skill, idx) => (
              <div className="skill-tag" key={idx}>{skill}</div>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h4>Extras</h4>
          <div className="skills-container">
            {['Canva', 'ChatGPT', 'GitHub Copilot', 'Microsoft PowerPoint'].map((skill, idx) => (
              <div className="skill-tag" key={idx}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
