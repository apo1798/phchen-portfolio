import * as React from 'react';

import Layout from '../components/Layout';
import Error404 from '../components/404/Error404';

import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <Seo title='404: Not found' />
    <Error404 />
  </Layout>
);

export default NotFoundPage;
