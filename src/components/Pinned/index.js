import React from 'react';
import PinnedItems from '../Shared/pinnedItems';
import { useStaticQuery, graphql } from 'gatsby';

import './Pinned.css';

const Pinned = () => {
    const PinnedData = useStaticQuery(graphql`
        query PinnedQuery {
            allGithubData {
                nodes {
                    data {
                        user {
                            itemShowcase {
                                items {
                                    edges {
                                        node {
                                            description
                                            forkCount
                                            primaryLanguage {
                                                color
                                                name
                                            }
                                            name
                                            stargazerCount
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const allPinnedData =
        PinnedData.allGithubData.nodes[0].data.user.itemShowcase.items.edges;

    return (
        <div className='pinned-repository'>
            <h3 className='pinned-heading'>Pinned</h3>
            <div className='pinned-items-container'>
                <ol className='pinned-items-listing'>
                    {allPinnedData &&
                        allPinnedData.map((item) => (
                            <li key={item.node?.name} className='pinned-item'>
                                <PinnedItems
                                    description={item.node?.description}
                                    languageName={
                                        item.node.primaryLanguage?.name
                                    }
                                    languageColor={
                                        item.node.primaryLanguage?.color
                                    }
                                    repoName={item.node?.name}
                                    repoUrl={item.node?.url}
                                    stargazerCount={item.node?.stargazerCount}
                                    forkCount={item.node?.forkCount}
                                />
                            </li>
                        ))}
                </ol>
            </div>
        </div>
    );
};

export default Pinned;
