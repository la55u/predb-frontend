import { FormControl, FormLabel, Input, SimpleGrid } from "@chakra-ui/core";

const SearchAdvanced = () => {
  return (
    <>
      <SimpleGrid minChildWidth="210px" spacingX="40px" spacingY="20px" pt={5}>
        <FormControl>
          <FormLabel>Release name</FormLabel>
          <Input placeholder="Release..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel>Release group</FormLabel>
          <Input placeholder="Group..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Input placeholder="Category..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel>Trace</FormLabel>
          <Input placeholder="Site short name..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel>NFO</FormLabel>
          <Input placeholder="NFO file contents..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel>Nukes</FormLabel>
          <Input placeholder="Nuke reason, network..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel>Size</FormLabel>
          <Input placeholder="Size range..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel>Added</FormLabel>
          <Input placeholder="Date range..." size="sm" />
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default SearchAdvanced;
