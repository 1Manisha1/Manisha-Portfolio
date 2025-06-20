// Resume.js
import React from 'react';
import './Resume.css';
import resumePDF from '../assets/Manisha_Kumari_Pandey_Resume.pdf';

const Resume = () => {
  return (
    <section className="resume-download-section" id="resume">
      <div className="resume-download-card">
        <h2 className="resume-download-title">Download My Resume</h2>
        <p className="resume-download-text">
          You can download my latest resume by clicking the button below.
        </p>
        <a href={resumePDF} download className="resume-download-button">
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default Resume;
