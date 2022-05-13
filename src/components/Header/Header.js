import React from 'react';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

import {
  header,
  githubIcon,
  headerContainer,
  fixedHeader,
  spaceUnder,
} from './Header.module.scss';
import { GitHub } from 'react-feather';

const Header = ({ stickyHeader }) => {
  const headerClass = stickyHeader ? `${header} ${fixedHeader}` : `${header}`;

  return (
    <>
      <header className={headerClass}>
        <div className={headerContainer}>
          <a
            href='https://github.com/apo1798/'
            target='_blank'
            rel='noopener noreferrer'
            className={githubIcon}
          >
            <GitHub size={36} />
          </a>
          <div>
            <Navbar />
            <MobileNavbar />
          </div>
        </div>
      </header>
      {stickyHeader && <div className={spaceUnder}></div>}
      {/* 可以想一下怎麼寫會更好＝＝ */}
    </>
  );
};

export default Header;
