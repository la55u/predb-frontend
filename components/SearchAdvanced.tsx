import { FormControl, FormLabel, Input, SimpleGrid } from "@chakra-ui/core";
import React from "react";

const SearchAdvanced = () => {
  return (
    <>
      <SimpleGrid minChildWidth="210px" spacingX="40px" spacingY="20px" pt={5}>
        <FormControl>
          <FormLabel>Release name</FormLabel>
          <Input placeholder="Release..." />
        </FormControl>
        <FormControl>
          <FormLabel>Release group</FormLabel>
          <Input placeholder="Group..." />
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Input placeholder="Category..." />
        </FormControl>
        <FormControl>
          <FormLabel>Trace</FormLabel>
          <Input placeholder="Site short name..." />
        </FormControl>
        <FormControl>
          <FormLabel>NFO</FormLabel>
          <Input placeholder="NFO file contents..." />
        </FormControl>
        <FormControl>
          <FormLabel>Nukes</FormLabel>
          <Input placeholder="Nukes reason, network..." />
        </FormControl>
        <FormControl>
          <FormLabel>Size</FormLabel>
          <Input placeholder="Size range..." />
        </FormControl>
        <FormControl>
          <FormLabel>Added</FormLabel>
          <Input placeholder="Date range..." />
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default SearchAdvanced;
