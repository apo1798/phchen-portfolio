import React from 'react';

import { navItem } from './NavItems.module.scss';

const NavItems = ({ setMenuOpen, isMobile = false }) => {
  const navLinks = ['Home', 'About', 'Works', 'Contact'];

  const clickNavHandler = (link) => {
    const linkSection = link.toLowerCase();
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
      {/* <li> */
      /* <Link to='#home' onClick={closeMenuHandler}>
          Home
        </Link>
      </li>
      <li>
        <Link to='#about' onClick={closeMenuHandler}>
          About
        </Link>
      </li>
      <li>
        <Link to='#works' onClick={closeMenuHandler}>
          Works
        </Link>
      </li>
      <li>
        <Link to='#contact' onClick={closeMenuHandler}>
          Contact
        </Link>
      </li> */}
    </ul>
  );
};

export default NavItems;
