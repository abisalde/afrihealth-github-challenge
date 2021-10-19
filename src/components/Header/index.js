import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import all components;
import Notification from './Notification';
import SearchForm from '../Shared/searchForm';

// Fontawesoome icon
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

const Header = ({ siteTitle }) => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const handleClick = () => setOpenNavbar(!openNavbar);
    return (
        <header title={siteTitle}>
            <div className='wrapper'>
                <div className='main-menu'>
                    <div
                        className={
                            openNavbar ? 'hamburger active' : 'hamburger'
                        }
                        onClick={handleClick}
                        onKeyDown={handleClick}
                        role='button'
                        aria-hidden='true'
                    >
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                    <div className='logo-search-nav'>
                        <div className='home-logo'>
                            <FaGithub />
                        </div>
                        <div className='search-form'>
                            <SearchForm />
                        </div>
                        <nav>
                            <ul
                                className={
                                    openNavbar
                                        ? 'header-navigation active'
                                        : 'header-navigation'
                                }
                            >
                                <li>
                                    <a
                                        className='main-nav-links'
                                        href='https://github.com/pulls'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Pull
                                        <span className='display-992'>
                                            request
                                        </span>
                                        s
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='main-nav-links'
                                        href='https://github.com/issues'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Issues
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='main-nav-links display-992'
                                        href='https://github.com/features/codespaces'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Codespaces
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='main-nav-links'
                                        href='https://github.com/marketplace'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Marketplace
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='main-nav-links'
                                        href='https://github.com/explore'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Explore
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <Notification />
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired,
};

export default Header;
