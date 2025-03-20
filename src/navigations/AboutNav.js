import React from 'react';

const AboutNav = ({ handleNavClick }) => {
  return (
    <li>
      <a href="#about" onClick={() => handleNavClick('about')}>
        ABOUT
      </a>
    </li>
  );
};

export default AboutNav;
