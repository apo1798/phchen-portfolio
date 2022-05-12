import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const WrokCard = ({ work }) => {
  const {
    title,
    projectName,
    description,
    techs,
    picture,
    reverse = false,
  } = work;

  console.log(picture);

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <h3>{projectName}</h3>
        <p>{description}</p>
        <ul>
          {techs.map((tech) => (
            <li key={projectName + tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div>
        <StaticImage src={picture} alt={projectName} />
      </div>
    </div>
  );
};

export default WrokCard;
