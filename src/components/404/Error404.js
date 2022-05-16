import React from 'react';
import { Link } from 'gatsby';

import { sectionContainer } from './Error404.module.scss';

const Error404 = () => {
  return (
    <section className={sectionContainer}>
      <h1>404 Not Found</h1>
      <p>
        This page doesn't exist... Go back to <Link to='/'>home</Link>?
      </p>
    </section>
  );
};

export default Error404;
