// SectionCard.js
import React from 'react';
import './SectionCard.css';

const SectionCard = ({ title, children }) => {
  return (
    <div className="section-card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default SectionCard;
