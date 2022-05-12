import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Hero from '../components/Hero/Hero';
import Seo from '../components/seo';
import About from '../components/About/About';
import Work from '../components/Work/Work';

const IndexPage = () => {
  const [stickyHeader, setStickyHeader] = useState(false);

  return (
    <>
      <Hero setStickyHeader={setStickyHeader} />
      <Layout stickyHeader={stickyHeader}>
        <Seo title='Home' />
        <About />
        <Work />
      </Layout>
    </>
  );
};

export default IndexPage;
