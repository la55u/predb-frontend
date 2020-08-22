import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/core";
import React from "react";
import SearchAdvanced from "./SearchAdvanced";
import SearchSimple from "./SearchSimple";

const SearchTabs = () => {
  return (
    <Tabs variant="enclosed" colorScheme="teal">
      <TabList>
        <Tab>Simple</Tab>
        <Tab>Advanced</Tab>
      </TabList>

      <TabPanels>
        <TabPanel px={0}>
          <SearchSimple />
        </TabPanel>
        <TabPanel px={0}>
          <SearchAdvanced />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SearchTabs;
