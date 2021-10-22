import * as React from 'react';

// Components and Views
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Overview from '../views/Overview';
import Seo from '../components/Seo';

const IndexPage = () => {
    return (
        <Layout>
            <Seo title='GitHub Profile' />
            <Navigation />
            <Overview />
        </Layout>
    );
};

export default IndexPage;
