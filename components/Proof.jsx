import { Flex, IconButton, Image, Text } from "@chakra-ui/core";

const Proof = ({ proof }) => {
  if (!proof)
    return (
      <Text mt={5} textAlign="center">
        No proof file available for this release
      </Text>
    );

  return (
    <Flex mt={5} align="center" direction="column">
      <Text>
        dolittle.2020.multi.complete.uhd.bluray-orca-proof.jpg
        <IconButton
          aria-label="Download proof file"
          icon="download"
          variant="ghost"
        />
      </Text>
      <Image
        src="/dolittle.2020.multi.complete.uhd.bluray-orca-proof.jpg"
        alt=""
        m={4}
        objectFit="cover"
        maxHeight="400px"
        maxWidth={["100%", "100%", "650px"]}
      />
    </Flex>
  );
};

export default Proof;
