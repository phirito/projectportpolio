import React from 'react';

const Project = ({ setActiveSection }) => (
  <div className="content">
    <h2>My Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <h3>Project One</h3>
        <p></p>
      </div>
      <div className="project-card">
        <h3>Project Two</h3>
        <p></p>
      </div>
    </div>
    <button onClick={() => setActiveSection(null)} className="back-button">
      Back to Home
    </button>
  </div>
);

export default Project;
