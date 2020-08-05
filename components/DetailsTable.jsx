import { Flex, Grid, Heading, Text } from "@chakra-ui/core";
import TimeAgo from "timeago-react";

const DetailsTable = ({ data, borderColor }) => {
  return (
    <Flex
      justify="space-between"
      borderWidth="1px"
      borderRadius="md"
      borderColor={borderColor}
      mb={6}
    >
      <Grid p={4} gap="0 20px" templateColumns="150px auto">
        <Heading size="md" justifySelf="end" mb={2} color="gray.500">
          Release info
        </Heading>
        <span></span>

        <Heading size="sm" justifySelf="end">
          Release
        </Heading>
        <Text wordBreak="break-all">{data.name}</Text>

        <Heading size="sm" justifySelf="end">
          Group
        </Heading>
        <Text>{data.group}</Text>

        <Heading size="sm" justifySelf="end">
          Added
        </Heading>
        <Text>
          {new Date(data.added).toLocaleString()} (
          <TimeAgo datetime={new Date(data.added)} />)
        </Text>

        <Heading size="sm" justifySelf="end">
          Section
        </Heading>
        <Text>{data.section}</Text>

        <Heading size="sm" justifySelf="end">
          No. of files
        </Heading>
        <Text>{data.files || "-"}</Text>

        <Heading size="sm" justifySelf="end">
          Size
        </Heading>
        <Text>{data.size ? `${data.size} MB` : "-"}</Text>

        <Heading size="sm" justifySelf="end">
          Genre
        </Heading>
        <Text>{data.genre || "-"}</Text>

        <Heading size="sm" justifySelf="end">
          Retail link
        </Heading>
        <Text>{data.url || "-"}</Text>

        <Heading size="sm" justifySelf="end">
          Trace
        </Heading>
        <Text fontStyle="italic">
          {data.traces
            ? data.traces.map((tr) => `#${tr.rank} ${tr.site}`).join(", ")
            : "-"}
        </Text>

        <Heading size="sm" justifySelf="end">
          Nukes
        </Heading>
        <Text>
          {!data.nukes || data.nukes.length === 0 ? (
            "-"
          ) : (
            <>
              {data.nukes.map((nuke) => (
                <Text key={nuke.reason}>{`[${nuke.type}] ${nuke.reason}`}</Text>
              ))}
            </>
          )}
        </Text>
      </Grid>
    </Flex>
  );
};

export default DetailsTable;
