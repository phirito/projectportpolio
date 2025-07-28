import React from 'react';
import '../styles/about_design.css'; 


const About = ({ setActiveSection }) => (
  <div className="content">
    <div className="intro">
      <h3 className="intro-text">
        Hi, I'm a junior frontend developer passionate about creating clean,
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
          <ul>
            <li>3+ months in web development</li>
            <li>Worked on various projects enhancing my skills in HTML, CSS, and JavaScript.</li>
          </ul>
        </div>
        <div className="carousel-box">
          <h3>Present</h3>
          <ul>
            <li>Currently learning React and exploring modern frontend frameworks.</li>
            <li>Building personal projects to apply my knowledge and improve my coding skills.</li>
          </ul>
        </div>
        <div className="carousel-box">
          <h3>Future</h3>
          <ul>
            <li>Aiming to contribute to open-source projects and collaborate with other developers.</li>
            <li>Excited to take on new challenges and grow in the field of web development</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-carousel">
        <div className="skills-carousel-track">
          <div className="skill-item">
            <img src="/images/html_logo.png" alt="HTML" className="skill-logo" />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <img src="/images/css_logo.png" alt="CSS" className="skill-logo" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <img src="/images/js_logo.png" alt="JavaScript" className="skill-logo" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img src="/images/react_logo.png" alt="React" className="skill-logo" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <img src="/images/flutter_logo.png" alt="Flutter" className="skill-logo" />
            <p>Flutter</p>
          </div>
          <div className="skill-item">
            <img src="/images/nodejs_logo.png" alt="Nodejs" className="skill-logo" />
            <p>Node.js</p>
          </div>
          <div className="skill-item">
            <img src="/images/dart_logo.png" alt="Dart" className="skill-logo" />
            <p>Dart</p>
          </div>
          <div className="skill-item">
            <img src="/images/react_logo.png" alt="React" className="skill-logo" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <img src="/images/python_logo.png" alt="Python" className="skill-logo" />
            <p>Python</p>
          </div>
          <div className="skill-item">
            <img src="/images/cpp_logo.png" alt="Cpp" className="skill-logo" />
            <p>C++</p>
          </div>
          <div className="skill-item">
            <img src="/images/bootstrap_logo.png" alt="Bootstrap" className="skill-logo" />
            <p>Bootstrap</p>
          </div>
          <div className="skill-item">
            <img src="/images/photoshop_logo.png" alt="Photoshop" className="skill-logo" />
            <p>Photoshop</p>
          </div>
          <div className="skill-item">
            <img src="/images/csp_logo.png" alt="Csp" className="skill-logo" />
            <p>ClipStudio</p>
          </div>
          <div className="skill-item">
            <img src="/images/figma_logo.png" alt="Figma" className="skill-logo" />
            <p>Figma</p>
          </div>
          {/* Duplicate set for seamless animation */}
          
        </div>
      </div>
    </div>
  </div>
);

export default About;