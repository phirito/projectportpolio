import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence, motion } from 'framer-motion';
import { topSectionTransition } from './animations/AnimatedSection.js';
import AnimatedSection from './animations/AnimatedSection.js'; 
import './styles/styles.css';                     
import AboutNav from './navigations/AboutNav.js';               
import ProjectNav from './navigations/ProjectNav.js';           
import ContactsNav from './navigations/ContactsNav.js';         
import About from './content/About.js';
import Project from './content/Project.js';
import Contacts from './content/Contacts.js';
import LoadingScreen from './components/LoadingScreen.js';
import logo from './images/logo1.png'; // Add this import at the top

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false); // New state for collapsing

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Delay setting the active section based on the hash
      setTimeout(() => {
        const hash = window.location.hash.substring(1);
        if (hash) {
          setActiveSection(hash);
          setIsCollapsed(true); // Collapse when navigating via hash
        }
      }, 500); // Delay to ensure hero section is shown first
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
      setIsCollapsed(false); // Expand the hero if deactivated
    } else {
      setActiveSection(sectionId);
      setTimeout(() => setIsCollapsed(true), 100); // Add slight delay for smoother animation
    }
  };

  useEffect(() => {
    if (!activeSection) {
      setIsCollapsed(false); // Reset to original size when no section is active
    }
  }, [activeSection]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="portfolio-container">
     <motion.div 
        layout 
        transition={topSectionTransition}
        className={`top-section ${isCollapsed ? 'collapsed' : 'expanded'}`}
      >
        <div className="hero-section">
          <div className="title-container">
            <h1 className="name">Kenrick C. Driz</h1>
            <h2 className="role">Phiritoku</h2>
          </div>
        </div>
      
        <div className="main-navigation">
          <ul>
            <AboutNav handleNavClick={handleNavClick} />
            <ProjectNav handleNavClick={handleNavClick} />
            <ContactsNav handleNavClick={handleNavClick} />
          </ul>
        </div>
        </motion.div>
      <AnimatePresence mode="wait" initial={false}>
        {activeSection === 'about' ? (
          <AnimatedSection key="about" className="content-section">
            <About setActiveSection={setActiveSection} />
          </AnimatedSection>
        ) : activeSection === 'project' ? (
          <AnimatedSection key="project" className="content-section">
            <Project setActiveSection={setActiveSection} />
          </AnimatedSection>
        ) : activeSection === 'contacts' && (
          <AnimatedSection key="contacts" className="content-section">
            <Contacts setActiveSection={setActiveSection} />
          </AnimatedSection>
        )}
      </AnimatePresence>
      <footer className="footer">
        <p className="footer-text">
          Developed By: 
          <img 
            src={logo} 
            alt="Logo" 
            className="footer-logo"
          /> 
          Kenrick Driz | ©2025
        </p>
      </footer>
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