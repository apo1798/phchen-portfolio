import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Hero from '../components/Hero/Hero';
import Seo from '../components/seo';
import About from '../components/About/About';

const IndexPage = () => {
  // const

  return (
    <>
      <Hero />
      <Layout>
        <Seo title='Home' />
        <About />
        <About />
        <About />
        <p>hello</p>
      </Layout>
    </>
  );
};

export default IndexPage;
