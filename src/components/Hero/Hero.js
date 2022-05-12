import React, { useEffect, useRef } from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

import {
  heroContainer,
  heroText,
  typewriter,
  handWaving,
} from './Hero.module.scss';

const Hero = ({ setStickyHeader }) => {
  const { backgroundImage } = useStaticQuery(graphql`
    query HeroImage {
      backgroundImage: file(relativePath: { eq: "coding_desk.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 2000, placeholder: BLURRED, formats: AUTO)
        }
      }
    }
  `);
  const heroImage = getImage(backgroundImage);

  const heroRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting === true) {
        setStickyHeader(false);
      } else if (entry.isIntersecting === false) {
        setStickyHeader(true);
      }
    });
    observer.observe(heroRef.current);
  }, []);

  return (
    <section ref={heroRef}>
      <BgImage image={heroImage} className={heroContainer}>
        <div className={heroText}>
          <h1>
            Hello World! This is PH Chen.<span className={handWaving}>👋</span>
          </h1>
          <h1 className={typewriter}>I build things on web.</h1>
        </div>
      </BgImage>
    </section>
  );
};

export default Hero;
