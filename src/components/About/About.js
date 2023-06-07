import React from 'react';
import AboutTech from './AboutTech';
import { StaticImage } from 'gatsby-plugin-image';

import {
  aboutContainer,
  alignIcon,
  textContainer,
  pictureContainer,
  pictureOutline,
} from './About.module.scss';
import { Book } from 'react-feather';

const About = () => {
  return (
    <section className={aboutContainer} id='about'>
      <div className={textContainer}>
        <h2>About Me</h2>
        <p className={alignIcon}>
          <Book size={20} />
          BA, Foreign Languages and Literatures,&nbsp;
          <a
            href='https://www.ntu.edu.tw/english/'
            target='_blank'
            rel='noopener noreferrer'
          >
            NTU
          </a>
        </p>
        <p>
          Hello! My name is Pohan Chen, and I enjoy building things on the web,
          especially with integrating geographical data.
        </p>
        <div>
          <p>
            In 2021 October, my frontend journey started. My work experience
            includes
          </p>
          <ul>
            <li>1) introducing Shopify Theme development from scartch</li>
            <li>2) building stock/product manangement app on React.js</li>
            <li>3) donation campaign page on Next.js</li>
          </ul>
          <p>
            Projects above integrate libraries like TailwindCSS, Material UI,
            React Query, Jotai, etc.
          </p>
        </div>
        <p>Here a list of technologies I've been using these days: </p>
        <AboutTech />
      </div>
      <div className={pictureContainer}>
        <div className={pictureOutline}>
          <StaticImage
            src='../../images/about_pic.jpg'
            placeholder='BLURRED'
            alt="PH's studying"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
