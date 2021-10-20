import React from 'react';
import { BiStar } from '@react-icons/all-files/bi/BiStar';

const SingleRepositoryContainer = ({
    description,
    forkCount,
    repoName,
    starCount,
    updatedAt,
    repoUrl,
}) => {
    return (
        <>
            <li className='github-repo-contents'>
                <div className='repo-contents-desc'>
                    <div className='repo-details'>
                        <a href={repoUrl} className='repo-heading'>
                            {repoName}
                        </a>
                        <p className='repo-desc'>{description}</p>
                    </div>
                    <div className='codelang-fork-date'>
                        <span className='codelang'>
                            <span className='code-color'></span>{' '}
                            <span className='programming-language'>HTML</span>
                        </span>
                        <span
                            className={
                                starCount === 0
                                    ? 'starred-count-display'
                                    : 'starred-count'
                            }
                        >
                            <BiStar />{' '}
                            <span className='star-count'>{starCount}</span>{' '}
                        </span>
                        <span className='fork-repo' value={forkCount}>
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
                        <span className='date-update'>
                            Updated on <time dateTime={updatedAt}>Aug 20</time>
                        </span>
                    </div>
                </div>
                <div className='starred-linegraph'>
                    <div>
                        <button className='btn btn-starred'>
                            <BiStar /> <span>Star</span>
                        </button>
                    </div>
                    <div className='linegraph'>
                        <span></span>
                    </div>
                </div>
            </li>
        </>
    );
};

export default SingleRepositoryContainer;
