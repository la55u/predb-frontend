import React from "react";
import Layout from "../components/layout/Layout";
import { Pagination } from "../components/releases/Pagination";
import ReleaseList from "../components/releases/ReleaseList";
import SearchTabs from "../components/search/SearchTabs";
import Toolbar from "../components/search/Toolbar";

const Home = () => {
  return (
    <Layout>
      <SearchTabs />

      <Toolbar />

      <ReleaseList />
      <Pagination />
    </Layout>
  );
};

export default Home;
