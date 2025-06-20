import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import Resume from './sections/Resume';

function App() {
  return (
    <div className="App">
      <Intro />
      <Education />
      <Projects />
      <Achievements />
      {/* <Resume /> */}
      <Contact />
    </div>
  );
}

export default App;
