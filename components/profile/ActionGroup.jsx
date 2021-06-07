import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

export const ActionGroup = ({ title, children, ...rest }) => {
  const bg = useColorModeValue("blackAlpha.100", "whiteAlpha.50");

  return (
    <>
      <Heading as="h2" fontSize="xl" mt={10} mb={3}>
        {title}
      </Heading>
      <Box bg={bg} borderRadius="md" p={5} {...rest}>
        {children}
      </Box>
    </>
  );
};
