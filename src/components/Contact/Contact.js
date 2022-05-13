import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { sectionContact, contactContainer, email } from './Contact.module.scss';
import { Mail } from 'react-feather';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query Contact {
      mdx(fileAbsolutePath: { regex: "/contact/" }) {
        body
        frontmatter {
          email
          title
        }
      }
    }
  `);
  const node = data.mdx;

  return (
    <section id='contact' className={sectionContact}>
      <div className={contactContainer}>
        <h2>Contact</h2>
        <h3>{node.frontmatter.title}</h3>
        <MDXRenderer>{node.body}</MDXRenderer>
        <div className={email}>
          <a href='mailto:nploxz@gmail.com'>
            <Mail size={32} />
            {node.frontmatter.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
