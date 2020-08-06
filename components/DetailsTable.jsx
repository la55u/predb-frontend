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
