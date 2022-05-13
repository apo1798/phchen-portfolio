import * as React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import './Layout.module.scss';

const Layout = ({ children, stickyHeader }) => {
  return (
    <section>
      <Header stickyHeader={stickyHeader} />

      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
