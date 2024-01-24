import React from "react";
import PropTypes from "prop-types";

// Import all components
import SingleRepositoryContainer from "./singleRepositoryContainer";

const RepositoryContainer = ({ repoData }) => {
  return (
    <>
      <div className="repositories-lists">
        <ul className="repo-list">
          {repoData.map((repo, i) => (
            <SingleRepositoryContainer
              key={i}
              description={repo.node.description}
              forkCount={repo.node.forkCount}
              repoName={repo.node.name}
              starCount={repo.node.stargazerCount}
              updatedAt={repo.node.updatedAt}
              repoUrl={repo.node.url}
              codeLangName={repo.node.primaryLanguage?.name}
              codeLangColor={repo.node.primaryLanguage?.color}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

RepositoryContainer.propTypes = {
  repoData: PropTypes.array.isRequired,
};

export default RepositoryContainer;
