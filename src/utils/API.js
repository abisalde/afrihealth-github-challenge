exports.githubQueryData = `
query($username: String!) { 
    user(login: $username) {
    name
    avatarUrl
    bio
    name
    followers {
        totalCount
        }
    following {
    totalCount
        }
    starredRepositories {
    totalCount
        }
    location
    twitterUsername
            organizations (first: 100) {
        totalCount
        nodes {
        id
        name
        }
    }
    repositories(privacy: PUBLIC, first: 20, orderBy: {direction: DESC, field: CREATED_AT}) {
        totalCount
            edges {
            node {
                name
                updatedAt
                stargazerCount
                forkCount
                description
                url
                languages(first: 1) {
                edges {
                    node {
                    color
                    name
                    }
                }
                }
                }
            }
    }
    ... on ProfileOwner {
    pinnedItemsRemaining
    itemShowcase {
    items(first: 5) {
        totalCount
        edges {
        node {
            ... on Repository {
                name
                description
                url
                languages(first: 1) {
                edges {
                    node {
                    color
                    name
                    }
                }
                }
        }
        }
    }
    }
    hasPinnedItems
}
}
pullRequests (first: 50) {
    totalCount
    nodes {
    merged
    mergedAt
    }
}
contributionsCollection  {
    contributionYears
    contributionCalendar {
    totalContributions 
    weeks {
    contributionDays {
        contributionCount
        weekday
        date
        }
        }
    }
    }
    }
}

`;
