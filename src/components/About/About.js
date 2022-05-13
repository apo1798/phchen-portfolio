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
            National Taiwan University
          </a>
        </p>
        <p>
          Hello! My name is Pohan Chen, and I enjoy building things on the web,
          especially with integrating geographical data.
        </p>
        <p>
          I studied Python at college, and it helped my high school teachers
          sort and compile English vocabulary words. After graduation, I've
          worked as newspaper editor and secretary. Due to the curiosity in web
          world, my frontend journey started in 2021 October, starting learning
          HTML, CSS, and JavaScript.
        </p>
        <p>Here are some technologies I've been using these days: </p>
        <AboutTech />
      </div>
      <div className={pictureContainer}>
        <div className={pictureOutline}>
          <StaticImage
            src='../../images/about_pic.jpg'
            placeholder='BLURRED'
            alt='me studying'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
