import React from 'react';

const ProjectNav = ({ handleNavClick }) => {
  return (
    <li>
      <a href="#project" onClick={() => handleNavClick('project')}>
        PROJECT
      </a>
    </li>
  );
};

export default ProjectNav;
