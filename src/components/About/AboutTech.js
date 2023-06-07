import React from 'react';

import { Check } from 'react-feather';
import { alignIcon } from './AboutTech.module.scss';

const techStack = ['TypeScript', 'React', 'Next.js App / Page Router'];

const AboutTech = () => {
  return (
    <ul>
      {techStack.map((tech) => (
        <li key={tech} className={alignIcon}>
          <Check /> {tech}
        </li>
      ))}
    </ul>
  );
};

export default AboutTech;
