import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/core";
import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchAdvanced from "./SearchAdvanced";
import SearchSimple from "./SearchSimple";

const SearchTabs = () => {
  const { dispatch } = useContext(SearchContext);

  return (
    <Tabs variant="enclosed" variantColor="teal">
      <TabList>
        <Tab>Simple</Tab>
        <Tab>Advanced</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <SearchSimple dispatch={dispatch} />
        </TabPanel>
        <TabPanel>
          <SearchAdvanced />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SearchTabs;
