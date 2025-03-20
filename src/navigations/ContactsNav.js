import React from 'react';

const ContactsNav = ({ handleNavClick }) => {
  return (
    <li>
      <a href="#contacts" onClick={() => handleNavClick('contacts')}>
        CONTACTS
      </a>
    </li>
  );
};

export default ContactsNav;
