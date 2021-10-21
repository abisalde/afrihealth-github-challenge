import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ImagePlaceHolder from '../../assets/images/avatar_placehoder.png';
import { BiStar } from '@react-icons/all-files/bi/BiStar';
import { ImTwitter } from '@react-icons/all-files/im/ImTwitter';

const ProfileCard = () => {
    const profileCardData = useStaticQuery(graphql`
        query profileQuery {
            allGithubData {
                nodes {
                    data {
                        user {
                            login
                            avatarUrl
                            bio
                            followers {
                                totalCount
                            }
                            following {
                                totalCount
                            }
                            name
                            location
                            organizations {
                                totalCount
                                nodes {
                                    avatarUrl
                                    id
                                    name
                                }
                            }
                            twitterUsername
                            starredRepositories {
                                totalCount
                            }
                        }
                    }
                }
            }
        }
    `);

    const profile = profileCardData.allGithubData.nodes[0].data.user;

    return (
        <div className='profile-card-content'>
            <div className='profile-avatar-username'>
                <div className='avatar-status'>
                    <img
                        className='avatar'
                        src={
                            profile.avatarUrl
                                ? profile.avatarUrl
                                : ImagePlaceHolder
                        }
                        alt={profile?.name}
                    />
                </div>
                <div className='name-username'>
                    <h1>
                        <span className='fullname'>{profile?.name}</span>{' '}
                        <span className='username'>{profile?.login}</span>
                    </h1>
                </div>
            </div>
            <div className='follow-aboutme-location'>
                <div className='button-follow'>
                    <button className='btn btn-follow'>Follow</button>
                </div>
                <div className='aboutme-location'>
                    <div className='aboutme-desc'>
                        <p>{profile.bio && profile.bio}</p>
                    </div>
                    <div className='followers-following'>
                        <a
                            className='link-follows'
                            href='https://github.com/abisalde'
                            rel='noreferrer'
                            target='_blank'
                        >
                            <svg
                                aria-hidden='true'
                                height='16'
                                viewBox='0 0 16 16'
                                version='1.1'
                                width='16'
                                data-view-component='true'
                                className='octicon octicon-people text-icon-tertiary'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z'
                                ></path>
                            </svg>
                            <span className='followers'>
                                {profile.followers.totalCount &&
                                    profile.followers.totalCount}
                            </span>
                            followers ·{' '}
                        </a>
                        <a
                            className='link-follows'
                            href='https://github.com/abisalde'
                            rel='noreferrer'
                            target='_blank'
                        >
                            <span className='following'>
                                {profile.following.totalCount &&
                                    profile.following.totalCount}
                            </span>
                            following ·{' '}
                        </a>
                        <a
                            className='link-follows'
                            href='https://github.com/abisalde'
                            rel='noreferrer'
                            target='_blank'
                        >
                            <BiStar style={{ fontWeight: 500 }} />
                            <span className='starred'>
                                {profile.starredRepositories.totalCount}
                            </span>
                        </a>
                    </div>
                    <div className='location-twitter'>
                        <p>
                            <svg
                                className='octicon octicon-location'
                                viewBox='0 0 16 16'
                                version='1.1'
                                width='16'
                                height='16'
                                aria-hidden='true'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z'
                                ></path>
                            </svg>{' '}
                            {profile?.location}
                        </p>
                        <p>
                            <ImTwitter /> @
                            <span className='twitter-username'>
                                {profile?.twitterUsername}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
