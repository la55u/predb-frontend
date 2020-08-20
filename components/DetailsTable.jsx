import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/core";
import TimeAgo from "timeago-react";

const DetailsTable = ({ data, borderColor }) => {
  return (
    <Flex
      justify="space-between"
      borderWidth="1px"
      borderRadius="md"
      borderColor={borderColor}
      mb={6}
      as="fieldset"
    >
      <legend align="center">
        <Heading size="md" justifySelf="end" mx={4} mt={1} color="gray.500">
          Release info
        </Heading>
      </legend>

      <Grid p={4} gap="0 20px" templateColumns={["90px auto", "150px auto"]}>
        {/* <span></span> */}

        <Text fontWeight="bold" justifySelf="end">
          Release
        </Text>
        <Text wordBreak="break-all">{data.name}</Text>

        <Text fontWeight="bold" justifySelf="end">
          Group
        </Text>
        <Text>{data.group}</Text>

        <Text fontWeight="bold" justifySelf="end">
          Added
        </Text>
        <Text>
          {new Date(data.added).toLocaleString()} (
          <TimeAgo datetime={new Date(data.added)} />)
        </Text>

        <Text fontWeight="bold" justifySelf="end">
          Section
        </Text>
        <Text>{data.section}</Text>

        <Text fontWeight="bold" justifySelf="end">
          No. of files
        </Text>
        <Text>{data.files || "-"}</Text>

        <Text fontWeight="bold" justifySelf="end">
          Size
        </Text>
        <Text>{data.size ? `${data.size} MB` : "-"}</Text>

        <Text fontWeight="bold" justifySelf="end">
          Genre
        </Text>
        <Text>{data.genre || "-"}</Text>

        <Text fontWeight="bold" justifySelf="end">
          Retail link
        </Text>
        <Text>{data.url || "-"}</Text>

        <Text fontWeight="bold" justifySelf="end">
          Trace
        </Text>
        <Text fontStyle="italic">
          {data.traces
            ? data.traces.map((tr) => `#${tr.rank} ${tr.site}`).join(", ")
            : "-"}
        </Text>

        <Text fontWeight="bold" justifySelf="end">
          Nukes
        </Text>
        <Text wordBreak="break-all">
          {!data.nukes || data.nukes.length === 0 ? (
            "-"
          ) : (
            <Box as="ol" paddingLeft="20px">
              {data.nukes.map((nuke) => (
                <li key={nuke.reason}>
                  <Text
                    color={
                      ["MODNUKE", "NUKE"].includes(nuke.type.toUpperCase())
                        ? "red.500"
                        : "green.500"
                    }
                    display="inline"
                  >
                    [{nuke.type}]{" "}
                  </Text>
                  <Text display="inline">{nuke.reason}</Text>
                </li>
              ))}
            </Box>
          )}
        </Text>
      </Grid>
    </Flex>
  );
};

export default DetailsTable;
