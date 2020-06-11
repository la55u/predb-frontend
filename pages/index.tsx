import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../components/Layout";
import ReleaseList from "../components/ReleaseList";
import SearchTabs from "../components/SearchTabs";
import Toolbar from "../components/Toolbar";
import { API_BASE, API_ENDPOINT } from "../utils/routes";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // todo
  const res = await fetch(API_BASE + API_ENDPOINT.RELEASES);
  const data = await res.json();

  return { props: { data } };
};

const Home = ({ data }) => {
  return (
    <Layout>
      <SearchTabs />

      <Toolbar />

      <ReleaseList releases={data.data.values} />
    </Layout>
  );
};

export default Home;
