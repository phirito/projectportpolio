import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // import the design file

const Portfolio = () => {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a> | <a href="#projects">Projects</a> | <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>I am a passionate developer specializing in modern web applications.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project One - A cool project.</li>
          <li>Project Two - Another cool project.</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
      </section>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
