import React from 'react';
import { BiStar } from '@react-icons/all-files/bi/BiStar';

const PinnedItems = ({
    description,
    languageName,
    languageColor,
    repoName,
    repoUrl,
    forkCount,
    stargazerCount,
}) => {
    console.log(languageColor);
    return (
        <>
            <div className='pinned-item-list-content'>
                <div className='item-list-heading'>
                    <svg
                        aria-hidden='true'
                        viewBox='0 0 16 16'
                        version='1.1'
                        data-view-component='true'
                        height='16'
                        width='16'
                        className='breadcrumbs-menu active'
                    >
                        <path
                            fillRule='evenodd'
                            d='M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z'
                        ></path>
                    </svg>
                    <a
                        href={repoUrl}
                        target='_blank'
                        rel='noreferrer'
                        className='pinned-repo-links'
                    >
                        {repoName}
                    </a>
                    <span></span>
                    <span className='pinned-profile-details'>Public</span>
                    <span className='pinned-list-handle'>
                        <svg
                            aria-hidden='true'
                            height='16'
                            viewBox='0 0 16 16'
                            version='1.1'
                            width='16'
                            data-view-component='true'
                            className='octicon octicon-grabber'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z'
                            ></path>
                        </svg>
                    </span>
                </div>
                <p className='pinned-item-desc'>{description}</p>
                <div className='codelang-fork-date'>
                    <span className='codelang'>
                        <span
                            className='code-color'
                            style={{ backgroundColor: languageColor }}
                        ></span>{' '}
                        <span className='programming-language'>
                            {languageName}
                        </span>
                    </span>
                    <span
                        className={
                            stargazerCount === 0
                                ? 'starred-count-display'
                                : 'starred-count'
                        }
                    >
                        <BiStar />{' '}
                        <span className='star-count'>{stargazerCount}</span>{' '}
                    </span>
                    <span
                        className={
                            forkCount === 0 ? 'fork-repo-display' : 'fork-repo'
                        }
                        value={forkCount}
                    >
                        <svg
                            aria-label='fork'
                            role='img'
                            viewBox='0 0 16 16'
                            version='1.1'
                            data-view-component='true'
                            height='16'
                            width='16'
                            className='octicon'
                        >
                            <path
                                fillRule='evenodd'
                                d='M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z'
                            ></path>
                        </svg>{' '}
                        {forkCount}
                    </span>
                </div>
            </div>
        </>
    );
};

export default PinnedItems;
