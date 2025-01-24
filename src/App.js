import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About'; 
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';  // Import Projects component
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      {/* Header section with navigation */}
      <Header />

      {/* Content Sections */}
      <div id="about">
        <About />
      </div>

      <div id="certifications">
        <Certifications />
      </div>

      <div id="projects">
        <Projects />  {/* Add Projects section */}
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default App;
