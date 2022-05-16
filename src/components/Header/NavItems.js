import React from 'react';
import { navigate } from '@reach/router';

import { navItem } from './NavItems.module.scss';

const NavItems = ({ setMenuOpen, isMobile = false }) => {
  const navLinks = ['Home', 'About', 'Works', 'Contact'];

  const clickNavHandler = (link) => {
    const linkSection = link.toLowerCase();
    if (!document.getElementById(linkSection)) {
      return navigate('/');
      // to handle 404 page navigation back to index
    }
    document.getElementById(linkSection).scrollIntoView({ behavior: 'smooth' });

    // for closing mobile menu
    if (!isMobile) return;
    setMenuOpen(false);
  };

  return (
    <ul>
      {navLinks.map((link) => (
        <li key={link}>
          <button onClick={clickNavHandler.bind('_', link)} className={navItem}>
            {link}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
