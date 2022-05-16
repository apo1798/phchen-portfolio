import React, { useState } from 'react';
import NavItems from './NavItems';

import {
  mobileNavbar,
  hamburger,
  hamburgerLine,
  hamburgerMenuOpen,
  menuContainer,
} from './MobileNavbar.module.scss';

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen((state) => !state);
  };

  return (
    <div className={mobileNavbar}>
      <div
        className={`${hamburger} ${menuOpen ? `${hamburgerMenuOpen}` : ''}`}
        onClick={menuOpenHandler}
      >
        <div className={hamburgerLine}></div>
      </div>
      {menuOpen && (
        <div className={menuContainer}>
          <NavItems setMenuOpen={setMenuOpen} isMobile={true} />
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
