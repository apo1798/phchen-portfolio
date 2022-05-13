import React from 'react';
import { Mail, GitHub } from 'react-feather';
import {
  footerSection,
  footerContainer,
  alignIcon,
} from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={footerSection}>
      <div className={footerContainer}>
        <div>
          <p> © {new Date().getFullYear()} &middot; Pohan Chen</p>
          <p className={alignIcon}>
            <Mail sice={20} /> nploxz@gmail.com
          </p>
          <p className={alignIcon}>
            <GitHub sice={20} /> apo1798
          </p>
        </div>
        <div>
          <p>
            Icon powered by&nbsp;
            <a
              href='https://feathericons.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Feather Icon
            </a>
          </p>
          <p>Design Reference &darr;</p>
          <p>
            <a
              href='https://brittanychiang.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Brittany Chiang
            </a>
            <a
              href='https://christianafable.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Christian Afable
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
