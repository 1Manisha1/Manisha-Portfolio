import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
