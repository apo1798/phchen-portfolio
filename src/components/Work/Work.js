import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import WrokCard from './WrokCard';

const worksArray = [
  {
    title: 'Featured Porject 1',
    projectName: 'Gatsby Blog',
    description:
      'A blog based on Markdown / MDX. Using Gatsby for image lazy loading and creating sites programatically based on dates and tags. Open Grapg Meta for a better preview experience.',
    techs: ['React', 'GatsbyJS', 'GraphQL'],
    picture: 'images/blog.png',
    reverse: false,
  },
];

const Work = () => {
  // const data = useStaticQuery(graphql`${wo}`)

  return (
    <section>
      {worksArray.map((work) => {
        return <WrokCard key={work.projectName} work={work} />;
      })}
    </section>
  );
};

export default Work;

//{ title, projectName, description,techs, picture, reverse }
