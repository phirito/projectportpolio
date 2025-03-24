import React from 'react';
import '../styles/about_design.css'; 

const About = ({ setActiveSection }) => (
  <div className="content">
    <div className="intro">
      <h3 className="intro-text">
        Hi, I'm Kenrick, a frontend developer passionate about creating clean,
        responsive, and user-friendly web experiences. I enjoy turning ideas into
        interactive designs using modern technologies. Let's connect and build
        something great!
      </h3>
    </div>
    
    <div className="about-section">
      <h2>About Me</h2>
      <p className="about-text">
        I create responsive and visually engaging web interfaces with a focus on
        performance and usability. Passionate about frontend development, I continuously
        refine my skills to build seamless user experiences.
      </p>

      <h2 className="about-my">About My</h2>
      <div className='carousel-container'>
        <div className="carousel-box">
          <h3>Experience</h3>
          <p>3+ months in web development</p>
        </div>
        <div className="carousel-box">
          <h3>Education</h3>
          <p>Computer Science Graduate</p>
        </div>
        <div className="carousel-box">
          <h3>Projects</h3>
          <p>2+ Completed Projects</p>
        </div>
      </div>
    </div>
    <div className="skills-section">
      <h2>Skills</h2>
    </div>
  </div>
);

export default About;