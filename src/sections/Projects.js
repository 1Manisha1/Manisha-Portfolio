import React from "react";
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Tours and Travel Guide',
      links: {
        github: 'https://github.com/1Manisha1/Tour_Project',
        demo: 'https://1manisha1.github.io/Tours-and-Travel-Guide/'
      },
      responsibilities: [
        'Designed a travel and tour website with HTML, CSS, and JavaScript front-end, and PHP back-end to store contact form information.',
        'Implemented an interactive UI with Home, Categories, Packages, and a contact form.',
        'Technologies: HTML, CSS, JavaScript, PHP',
      ]
    },
    {
      title: 'Text-Based Emotion Detection',
      links: {
        github: 'https://github.com/1Manisha1/Text-Based-Emotion-Detection'
      },
      responsibilities: [
        'Developed an NLP-based model to detect emotions using Logistic Regression and MultinomialNB.',
        'Trained on labeled data for 8 emotions, achieving 62% accuracy.',
        'Technologies: Python, NLP, Scikit-learn',
      ]
    },
    {
      title: 'PhishGuard: Phishing URLs Detection System',
      links: {
        github: 'https://github.com/1Manisha1/Phising-Detection'
      },
      responsibilities: [
        'Built a phishing detection system using machine learning for enhanced web security.',
        'Technologies: Python, Scikit-learn, Flask',
      ]
    }
  ];

  return (
    <section className="projects-outer">
  <div className="projects-section-wrapper" id="projects-section">
    <div className="projects-section">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-card">
        <div className="timeline">
          {projects.map((proj, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  {proj.title}
                  {proj.links?.github && (
                    <a href={proj.links.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub style={{ color: '#333' }} />
                    </a>
                  )}
                  {proj.links?.demo && (
                    <a href={proj.links.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt style={{ color: '#1a73e8' }} />
                    </a>
                  )}
                </h3>
                <ul>
                  {proj.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Projects;
