import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Pankaj Pandey</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#education" className="hover:text-blue-500">Education</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#achievements" className="hover:text-blue-500">Achievements</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
