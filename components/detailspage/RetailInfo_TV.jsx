import { Flex, Link, Grid, Heading, Image, Text } from "@chakra-ui/react";
import TimeAgo from "timeago-react";

const RetailTable = ({ data, borderColor }) => {
  console.log;
  if (!data)
    return (
      <Text mt={5} textAlign="center" color="grey">
        Retail info not available
      </Text>
    );

  return (
    <Flex
      justify="space-between"
      align="start"
      borderWidth="1px"
      borderRadius="md"
      mt="20px"
      borderColor={borderColor}
    >
      <Grid p={4} gap="0 20px" templateColumns="150px auto">
        <Heading size="sm" justifySelf="end">
          Series name
        </Heading>
        <Text wordBreak="break-all">{data.seriesName}</Text>

        <Heading size="sm" justifySelf="end">
          Network
        </Heading>
        <Text>{data.network || "-"}</Text>

        <Heading size="sm" justifySelf="end">
          First aired
        </Heading>
        <Text>
          {data.firstAired} (
          <TimeAgo datetime={data.firstAired} />)
        </Text>

        <Heading size="sm" justifySelf="end">
          Air date
        </Heading>
        <Text>{`${data.airsDayOfWeek}, ${data.airsTime}`}</Text>

        <Heading size="sm" justifySelf="end">
          Runtime
        </Heading>
        <Text>{`${data.runtime} min` || "-"}</Text>

        <Heading size="sm" justifySelf="end">
          Genre
        </Heading>
        <Text>{data.genre?.join(", ")}</Text>

        <Heading size="sm" justifySelf="end">
          Imdb
        </Heading>
        <Text>
          <Link isExternal href={`https://www.imdb.com/title/${data.imdbId}`}>
            {`https://www.imdb.com/title/${data.imdbId}`}
          </Link>
        </Text>

        <Heading size="sm" justifySelf="end">
          Rating
        </Heading>
        <Text>
          {data.siteRating === 0
            ? "-"
            : `${data.siteRating} / 10 (${data.siteRatingCount} votes, TVDB)`}
        </Text>

        <Heading size="sm" justifySelf="end">
          Status
        </Heading>
        <Text>{data.status}</Text>

        <Heading size="sm" justifySelf="end">
          Overview
        </Heading>
        <Text>{data.overview || "-"}</Text>
      </Grid>

      <Image
        src={`https://thetvdb.com/banners/${data.poster}`}
        alt="poster"
        m={4}
        objectFit="contain"
        htmlHeight="100%"
        htmlWidth="150px"
        minW="150px"
      />
    </Flex>
  );
};

export default RetailTable;
