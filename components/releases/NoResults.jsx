import { Box, Flex, Text } from "@chakra-ui/react";
import { MdZoomOut } from "react-icons/md";

export const NoResults = () => (
  <Flex
    justify="center"
    align="center"
    mt={20}
    color="gray.500"
    direction="column"
  >
    <Box as={MdZoomOut} w="100px" h="100px" mb={5} />
    <Text>No results found</Text>
  </Flex>
);
