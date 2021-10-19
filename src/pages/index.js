import * as React from 'react';

// data

// markup
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
// import DesktopView from '../assets/views/desktopView';
import Overview from '../views/Overview';
import Seo from '../components/Seo';

const IndexPage = () => {
    return (
        <Layout>
            <Seo title='Home' />
            <Navigation />
            {/* <DesktopView /> */}
            <Overview />
        </Layout>
    );
};

export default IndexPage;
