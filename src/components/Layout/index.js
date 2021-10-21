import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// Import Components
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

    // console.log(data);

    return (
        <div className='main-application'>
            <Header siteTitle={data.site.siteMetadata.title || `Github`} />
            <div>
                <main>{children}</main>
            </div>
            <footer
                style={{
                    position: `relative`,
                    width: `100%`,
                    bottom: 0,
                    marginTop: `3rem`,
                    backgroundColor: `var(--color-header-bg)`,
                    color: `var(--color-btn-bg)`,
                    padding: `1.5rem 0`,
                    fontSize: `1.125rem`,
                    fontWeight: 600,
                }}
            >
                <div className='wrapper'>
                    © {new Date().getFullYear()}, Developed by
                    {` `}
                    <a
                        style={{ color: `var(--color-btn-bg)` }}
                        href='https://twitter.com/abisalde'
                    >
                        Abisalde
                    </a>
                </div>
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
