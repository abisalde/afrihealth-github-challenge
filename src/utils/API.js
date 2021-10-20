exports.githubQueryData = `
query($username: String!) { 
    user(login: $username) {
    ... on User{
        login
    }
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
        avatarUrl
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
                primaryLanguage {
                    name
                    color
                }
                }
            }
    }
    ... on ProfileOwner {
    pinnedItemsRemaining
    itemShowcase {
    items(first: 10) {
        totalCount
        edges {
        node {
            ... on Repository {
                name
                description
                stargazerCount
                forkCount
                url
                primaryLanguage {
                    name
                    color
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
