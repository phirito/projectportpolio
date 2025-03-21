import React from 'react';

const About = ({ setActiveSection }) => (
  <div className="content">
    <h2>About Me</h2>
    <p>I am a passionate frontend developer specializing in modern web applications.</p>
    <button onClick={() => setActiveSection(null)} className="back-button">
      Back to Home
    </button>
  </div>
);

export default About;
