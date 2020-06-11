import { Box, Flex } from "@chakra-ui/core";
import React from "react";

const CategoryBadge = () => {
  return (
    <>
      <Flex>
        <Box
          bg="green.600"
          px="10px"
          borderBottomLeftRadius="md"
          borderTopLeftRadius="md"
        >
          <small>MOVIE</small>
        </Box>

        <Box
          bg="gray.600"
          px="10px"
          borderTopRightRadius="md"
          borderBottomRightRadius="md"
        >
          <small>X264</small>
        </Box>
      </Flex>
    </>
  );
};

export default CategoryBadge;
