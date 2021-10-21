import * as React from 'react';

// data

// markup
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Overview from '../views/Overview';
import Seo from '../components/Seo';

const IndexPage = () => {
    return (
        <Layout>
            <Seo title='Home' />
            <Navigation />
            <Overview />
        </Layout>
    );
};

export default IndexPage;
