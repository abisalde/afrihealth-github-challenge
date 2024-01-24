import React from "react";

import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import RepositoriesView from "../views/RepositoriesView";

const Repositories = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Navigation />
      <RepositoriesView />
    </Layout>
  );
};

export default Repositories;
