import React, { useState, useRef, useEffect } from 'react';
import {
  header,
  headerContainer,
  fixedHeader,
  icon,
} from './Header.module.scss';

import Navbar from './Navbar';

const Header = () => {
  const [headerIsVisible, setHeaderIsVisible] = useState(true);
  const headerRef = useRef();

  console.log(headerIsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (
          entry.isIntersecting === false &&
          window.scrollY > window.innerHeight
        ) {
          console.log('show sticky navbar');
          setHeaderIsVisible(false);
        } else if (
          entry.isIntersecting === true ||
          window.scrollY < window.innerHeight
        ) {
          console.log('show normal navbar');
          setHeaderIsVisible(true);
        }
      },
      {
        rootMargin: `-${headerRef.current.getBoundingClientRect().height}px`,
      }
    );
    observer.observe(headerRef.current);

    // return () => {
    //   observer.unobserve(headerRef.current);
    // };
  }, []);

  const headerClass = headerIsVisible
    ? `${header}`
    : `${header} ${fixedHeader}`;

  return (
    <header
      ref={headerRef}
      className={headerClass}
      // className={headerClass}
    >
      <div className={headerContainer}>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
