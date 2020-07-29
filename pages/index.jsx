import React, { useReducer } from "react";
import Layout from "../components/Layout";
import ReleaseList from "../components/ReleaseList";
import SearchTabs from "../components/SearchTabs";
import Toolbar from "../components/Toolbar";
import {
  initialState,
  SearchContext,
  searchReducer,
} from "../context/SearchContext";
import { API_BASE, API_ENDPOINT } from "../utils/routes";

export const getServerSideProps = async (context) => {
  const res = await fetch(API_BASE + API_ENDPOINT.RELEASES);
  const data = await res.json();
  return { props: { data } };
};

const Home = ({ data }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  return (
    <Layout>
      <SearchContext.Provider value={{ dispatch }}>
        <SearchTabs />
      </SearchContext.Provider>

      {/* <StateContext.Provider value={{ ...state }}> */}
      <Toolbar
        resultsCnt={state.data?.results}
        took={state.data?.took + state.data?.took_mongo}
      />

      <ReleaseList
        initialReleases={data.data.values}
        searchResults={state.data?.values}
        loading={state.loading}
      />

      {/* </StateContext.Provider> */}
    </Layout>
  );
};

export default Home;
