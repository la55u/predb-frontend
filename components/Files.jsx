import { Box, Heading, useColorMode } from "@chakra-ui/core";

const RetailInfo_Movie_TMDB = ({ data, borderColor }) => {
  const { colorMode } = useColorMode();

  console.log(data);
  if (!data) return null;

  return (
    <Box
      as="fieldset"
      borderWidth="1px"
      borderRadius="md"
      borderColor={borderColor}
      mb={2}
    >
      <legend align="center">
        <Heading size="md" mt={1} mx={4} color="gray.500">
          Files
        </Heading>
      </legend>
    </Box>
  );
};

export default RetailInfo_Movie_TMDB;
