const { githubQueryData } = require('./src/utils/API');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.abisalde-graphql-profile.netlify.app',
        title: 'Github GrapQL Profile Card',
        description: 'A simple GatsbyJS starter with GraphQL',
        author: `Isaiah Abiodun`,
        twitterUsername: '@abisalde',
        image: './src/assets/images/graphql.png',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/images',
            },
            __key: 'images',
        },
        {
            resolve: `gatsby-source-github-api`,
            options: {
                token: process.env.GITHUB_TOKEN,
                graphQLQuery: githubQueryData,
                variables: { username: process.env.GITHUB_USERNAME },
            },
        },
    ],
};
