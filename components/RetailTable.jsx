import { Flex, Grid, Heading, Image, Text } from "@chakra-ui/core";
import TimeAgo from "timeago-react";

const RetailTable = ({ data, borderColor }) => {
  return (
    <Flex
      justify="space-between"
      borderWidth="1px"
      borderRadius="md"
      mt="20px"
      borderColor={borderColor}
    >
      <Grid p={4} gap="0 20px" templateColumns="150px auto">
        <Heading size="sm" justifySelf="end">
          Series name
        </Heading>
        <Text wordBreak="break-all">{"Game of Thrones"}</Text>

        <Heading size="sm" justifySelf="end">
          Network
        </Heading>
        <Text>{"HBO"}</Text>

        <Heading size="sm" justifySelf="end">
          First aired
        </Heading>
        <Text>
          {new Date().toLocaleString()} (
          <TimeAgo datetime={new Date()} />)
        </Text>

        <Heading size="sm" justifySelf="end">
          Air date
        </Heading>
        <Text>
          {new Date(data.added).toLocaleString()} (
          <TimeAgo datetime={new Date(data.added)} />)
        </Text>

        <Heading size="sm" justifySelf="end">
          Runtime
        </Heading>
        <Text>{"45 min"}</Text>

        <Heading size="sm" justifySelf="end">
          Genre
        </Heading>
        <Text>{"Fantasy, Sci-fi"}</Text>

        <Heading size="sm" justifySelf="end">
          Imdb
        </Heading>
        <Text>
          <a href="https://www.imdb.com/title/tt7008682" target="_blank">
            https://www.imdb.com/title/tt7008682
          </a>
        </Text>

        <Heading size="sm" justifySelf="end">
          Rating
        </Heading>
        <Text>{"8.1 / 10 (241 votes)"}</Text>

        <Heading size="sm" justifySelf="end">
          Status
        </Heading>
        <Text>{"Finished"}</Text>

        <Heading size="sm" justifySelf="end">
          Overview
        </Heading>
        <Text>
          Rainbow Johnson recounts her experience growing up in a mixed-race
          family in the ’80s and the constant dilemmas they had to face over
          whether to assimilate or stay true to themselves.
        </Text>
      </Grid>

      <Image
        src="//picsum.photos/150/240"
        alt=""
        m={4}
        objectFit="cover"
        htmlHeight="100%"
        htmlWidth="150px"
        minW="150px"
      />
    </Flex>
  );
};

export default RetailTable;
