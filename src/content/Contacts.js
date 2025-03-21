import React from 'react';

const Contacts = ({ setActiveSection }) => (
  <div className="content">
    <h2>Contact Me</h2>
    <p>Email: dkenrick11@gmail.com</p>
    <p>LinkedIn: linkedin.com/in/kenrickdriz</p>
    <p>GitHub: github.com/phirito</p>
    <button onClick={() => setActiveSection(null)} className="back-button">
      Back to Home
    </button>
  </div>
);

export default Contacts;
