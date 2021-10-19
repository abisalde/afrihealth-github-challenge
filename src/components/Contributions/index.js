import React from 'react';

import './contribution.css';

const Contributions = () => {
    return (
        <>
            <div className='contribution-container'>
                <div className='contribution-content'>
                    <div className='responsive-contribution-contet'>
                        <div className='contribution-grid-container'>
                            <div className='contribution-grid-item'>
                                <h3 className='pinned-heading'>
                                    <span>contributions in the last year</span>
                                </h3>
                                <div className='contribution-grid-item-container'>
                                    <div className='grid-item-graph'>
                                        <p>raphitems</p>
                                        <div className='grid-item-footer'>
                                            <div className='footer-item-1'>
                                                <p>
                                                    Learn how we count
                                                    contributions
                                                </p>
                                            </div>
                                            <div className='footer-item-2'>
                                                Less{' '}
                                                <svg
                                                    width='10'
                                                    height='10'
                                                    className='graph-item-svg'
                                                >
                                                    <rect
                                                        width='10'
                                                        height='10'
                                                        className='contribution-calendar-day'
                                                        rx='2'
                                                        ry='2'
                                                        data-level='0'
                                                    ></rect>
                                                </svg>{' '}
                                                <svg
                                                    width='10'
                                                    height='10'
                                                    className='graph-item-svg'
                                                >
                                                    <rect
                                                        width='10'
                                                        height='10'
                                                        className='contribution-calendar-day'
                                                        rx='2'
                                                        ry='2'
                                                        data-level='1'
                                                    ></rect>
                                                </svg>{' '}
                                                <svg
                                                    width='10'
                                                    height='10'
                                                    className='graph-item-svg'
                                                >
                                                    <rect
                                                        width='10'
                                                        height='10'
                                                        className='contribution-calendar-day'
                                                        rx='2'
                                                        ry='2'
                                                        data-level='2'
                                                    ></rect>
                                                </svg>{' '}
                                                <svg
                                                    width='10'
                                                    height='10'
                                                    className='graph-item-svg'
                                                >
                                                    <rect
                                                        width='10'
                                                        height='10'
                                                        className='contribution-calendar-day'
                                                        rx='2'
                                                        ry='2'
                                                        data-level='3'
                                                    ></rect>
                                                </svg>{' '}
                                                <svg
                                                    width='10'
                                                    height='10'
                                                    className='graph-item-svg'
                                                >
                                                    <rect
                                                        width='10'
                                                        height='10'
                                                        className='contribution-calendar-day'
                                                        rx='2'
                                                        ry='2'
                                                        data-level='4'
                                                    ></rect>
                                                </svg>{' '}
                                                More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='year-list-container'></div>
                </div>
            </div>
        </>
    );
};

export default Contributions;
