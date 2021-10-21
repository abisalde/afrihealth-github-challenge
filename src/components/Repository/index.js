import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// import all Components
import RepositoryForm from './repositoryForm';
import RepositoryContainer from './repositoryContainer';

const RepositoryIndex = () => {
    const RepositoryData = useStaticQuery(graphql`
        query RepoQuery {
            allGithubData {
                nodes {
                    data {
                        user {
                            repositories {
                                edges {
                                    node {
                                        description
                                        forkCount
                                        name
                                        primaryLanguage {
                                            color
                                            name
                                        }
                                        stargazerCount
                                        url
                                        updatedAt
                                    }
                                }
                                totalCount
                            }
                        }
                    }
                }
            }
        }
    `);
    const repos =
        RepositoryData.allGithubData.nodes[0].data.user.repositories.edges;

    return (
        <>
            <div className='breadcrumbs-repository-details'>
                <RepositoryForm />
                <RepositoryContainer repoData={repos} />
            </div>
        </>
    );
};

export default RepositoryIndex;
