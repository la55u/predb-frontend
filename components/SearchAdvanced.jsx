import {
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";

const SearchAdvanced = () => {
  return (
    <>
      <Alert status="warning" variant="left-accent" borderRadius="md">
        <AlertIcon />
        Advanced search mode does not work yet. Check back later.
      </Alert>

      <SimpleGrid minChildWidth="210px" spacingX="40px" spacingY="20px" pt={5}>
        <FormControl>
          <FormLabel fontSize="sm">Release name</FormLabel>
          <Input placeholder="Release..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="sm">Release group</FormLabel>
          <Input placeholder="Group..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="sm">Category</FormLabel>
          <Input placeholder="Category..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="sm">Trace</FormLabel>
          <Input placeholder="Site short name..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="sm">NFO</FormLabel>
          <Input placeholder="NFO file contents..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="sm">Nukes</FormLabel>
          <Input placeholder="Nuke reason, network..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="sm">Size</FormLabel>
          <Input placeholder="Size range..." size="sm" />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="sm">Added</FormLabel>
          <Input placeholder="Date range..." size="sm" />
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default SearchAdvanced;
