import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header';

//import Styles
import '../../assets/css/global.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    console.log(data);

    return (
        <div className='main-application'>
            <Header siteTitle={data.site.siteMetadata.title || `Github`} />
            <div>
                <main>{children}</main>
            </div>
            <footer
                style={{
                    marginTop: `2rem`,
                }}
            >
                © {new Date().getFullYear()}, Developed by
                {` `}
                <a href='https://twitter.com/abisalde'>Abisalde</a>
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
