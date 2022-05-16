import * as React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { fullPageContainer } from './Layout.module.scss';

const Layout = ({ children, stickyHeader }) => {
  return (
    <section className={fullPageContainer}>
      <Header stickyHeader={stickyHeader} />

      <main>{children}</main>

      <Footer />
    </section>
  );
};

export default Layout;
