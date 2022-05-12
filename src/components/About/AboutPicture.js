import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPicture = () => {
  return (
    <StaticImage
      src='../../images/about_pic.jpg'
      placeholder='BLURRED'
      style={{ filter: 'brightness(0.8)' }}
      alt='me studying'
    />
  );
};

export default AboutPicture;
