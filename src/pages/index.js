import React, { useState } from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero/Hero';
import Seo from '../components/seo';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Contact from '../components/Contact/Contact';

const IndexPage = () => {
  const [stickyHeader, setStickyHeader] = useState(false);

  return (
    <>
      <Hero setStickyHeader={setStickyHeader} />
      <script
        defer
        data-domain='phchen-portfolio.netlify.app'
        src='https://plausible.io/js/script.js'
      ></script>
      <script
        defer
        data-domain='phchen-portfolio.netlify.app'
        src='http://localhost/js/script.js'
      ></script>
      <Layout stickyHeader={stickyHeader}>
        <Seo title='Portfolio' />
        <About />
        <Work />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;
