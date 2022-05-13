import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import {
  workSection,
  workContainer,
  workCard,
  workImage,
  workDescription,
  techList,
  workLink,
} from './Work.module.scss';
import { GitHub, ExternalLink } from 'react-feather';

const Work = () => {
  const data = useStaticQuery(graphql`
    query Work {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/works/" } }
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        nodes {
          slug
          fileAbsolutePath
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 500
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            tech
            github
            external
          }
          body
        }
      }
    }
  `);

  const workNodes = data.allMdx.nodes;

  return (
    <section id='works' className={workSection}>
      <div className={workContainer}>
        <h2>Works</h2>
        <div>
          {workNodes.map((work) => {
            const image = getImage(work.frontmatter.image);

            return (
              <div key={work.frontmatter.title} className={workCard}>
                <div className={workImage}>
                  <GatsbyImage image={image} alt={work.frontmatter.title} />
                </div>
                <div className={workDescription}>
                  <h3>{work.frontmatter.title}</h3>
                  <MDXRenderer>{work.body}</MDXRenderer>
                  <ul className={techList}>
                    {work.frontmatter.tech.map((tech) => (
                      <li key={work.frontmatter.title + tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className={workLink}>
                    <a
                      href={work.frontmatter.github}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <GitHub size={32} />
                    </a>
                    <a
                      href={work.frontmatter.external}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <ExternalLink size={32} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>{' '}
      </div>
    </section>
  );
};

export default Work;

//{ title, projectName, description,techs, picture, reverse }
