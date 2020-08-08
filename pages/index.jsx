import React from "react";
import Layout from "../components/Layout";
import ReleaseList from "../components/ReleaseList";
import SearchTabs from "../components/SearchTabs";
import Toolbar from "../components/Toolbar";

const Home = () => {
  return (
    <Layout>
      <SearchTabs />

      <Toolbar />

      <ReleaseList />
    </Layout>
  );
};

export default Home;
