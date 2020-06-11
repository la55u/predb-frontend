import { Text } from "@chakra-ui/core";

const NFO = ({ nfo }) => {
  if (!nfo)
    return (
      <Text mt={5} textAlign="center">
        No NFO file available for this release
      </Text>
    );

  return (
    <Box mt={5}>
      <pre
        style={{
          fontSize: "10pt",
          textAlign: "left",
          fontFamily: "'Courier New', monospace",
          lineHeight: "13px",
          wordWrap: "",
        }}
        dangerouslySetInnerHTML={{ __html: "NFO" }}
      ></pre>
    </Box>
  );
};

export default NFO;
