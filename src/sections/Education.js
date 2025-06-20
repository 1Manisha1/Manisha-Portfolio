import React from 'react';
import './Education.css';
import collegeLogo from '../assets/chandigarh_university_logo.png'; // replace with appropriate logo
import bookImage from '../assets/book.png';

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-card">
        <div className="edu-logo">
          <img src={collegeLogo} alt="Chandigarh University Logo" />
        </div>
        <div className="edu-details">
          <h3 className="edu-degree">Bachelor of Engineering in Computer Science and Engineering (CGPA: 8.25)</h3>
          <p className="edu-institute"><strong>Chandigarh University</strong></p>
          <p className="edu-meta">Mohali, Punjab | Aug 2021 – Jul 2025</p>
          <ul className="edu-highlights">
            <li>Coursework: Data Structures, Algorithms, DBMS, ML, Operating Systems</li>
            <li>Active in technical projects and hackathons</li>
          </ul>
        </div>
        <div className="edu-book">
          <img src={bookImage} alt="Book Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Education;
