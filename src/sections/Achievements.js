import React from "react";
import './Achievements.css';
import { FaMedal, FaAward, FaCertificate, FaBolt, FaStar } from 'react-icons/fa';

const Achievements = () => {
  const items = [
    {
      icon: <FaMedal className="ach-icon" />,
      text: "Top 30 Team Finalist at Smart India Hackathon, selected from 10,000+ submissions nationwide."
    },
    {
      icon: <FaCertificate className="ach-icon" />,
      text: "Recipient of Golden Certificate in NPTEL Internet of Things course."
    },
    {
      icon: <FaAward className="ach-icon" />,
      text: "Completed certified courses in Python, Machine Learning, and Power BI."
    },
    {
      icon: <FaStar className="ach-icon" />,
      text: "Solved over 400 problems on LeetCode and actively practiced on platforms like HackerRank and GeeksforGeeks."
    },
    {
      icon: <FaBolt className="ach-icon" />,
      text: "Active participant in Hackathons, Technical Events, and Code Camps."
    },
  ];

  return (
    <section className="achievements-outer">
      <div className="achievements-section" id="achievements">
        <h2 className="achievements-heading">Achievements</h2>
        <div className="achievements-card">
          <ul className="achievements-list">
            {items.map((item, index) => (
              <li key={index} className="achievement-item">
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
