import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-outer-card">
        <div className="contact-card-wrapper">
          <h2 className="contact-title">Let's Connect!</h2>
          <p className="contact-subtext">
            I love meeting new people, collaborating on ideas, and sharing knowledge. Whether it’s a tech discussion, a creative project, or just a virtual coffee—reach out!
          </p>
          <div className="contact-cards">
            <a href="https://github.com/1Manisha1" target="_blank" rel="noopener noreferrer" className="contact-card">
              <FaGithub className="contact-icon" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/manisha-pandey-767135223/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <FaLinkedin className="contact-icon" />
              LinkedIn
            </a>
            <a href="mailto:pandeymanisha1303@gmail.com" className="contact-card">
              <FaEnvelope className="contact-icon" />
              Email
            </a>
            <a href="https://leetcode.com/u/1manisha1/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <FaInstagram className="contact-icon" />
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
