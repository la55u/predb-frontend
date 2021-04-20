import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import TimeAgo from "timeago-react";

const RetailInfo_TV_TMDB = ({ data, borderColor }) => {
  const { colorMode } = useColorMode();
  const fallbackSrc = {
    dark: "/movie-placeholder-dark.png",
    light: "/movie-placeholder-light.png",
  };

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
          Retail info
        </Heading>
      </legend>

      <Flex justify="space-between" align="start">
        <Grid p={4} gap="0 20px" templateColumns="150px auto">
          <Text fontWeight="bold" justifySelf="end">
            Series name
          </Text>
          <Text wordBreak="break-all">
            {data.original_name}
            {data.name !== data.original_name && ` (${data.name})`}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Type
          </Text>
          <Text>{data.type || "-"}</Text>

          <Text fontWeight="bold" justifySelf="end">
            Country
          </Text>
          <Text>
            {data.origin_country.length > 0
              ? data.origin_country.join(", ")
              : "-"}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Network
          </Text>
          <Text>
            {data.networks.length > 0
              ? data.networks.map((n) => n.name).join(", ")
              : "-"}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            First aired
          </Text>
          <Text>
            {data.first_air_date} (
            <TimeAgo datetime={data.first_air_date} />)
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Runtime
          </Text>
          <Text>
            {data.episode_run_time.length > 0
              ? data.episode_run_time.map((t) => t + " min").join(", ")
              : "-"}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Genre
          </Text>
          <Text>
            {data.genres.length > 0
              ? data.genres.map((g) => g.name).join(", ")
              : "-"}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Homepage
          </Text>
          <Text>
            <a href={data.homepage} target="_blank">
              {data.homepage || "-"}
            </a>
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Rating
          </Text>
          <Text>
            {data.vote_count === 0
              ? "-"
              : `${data.vote_average} / 10 (${data.vote_count} votes, TMDB)`}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Status
          </Text>
          <Text>{data.status || "-"}</Text>

          <Text fontWeight="bold" justifySelf="end">
            Overview
          </Text>
          <Text>{data.overview || "-"}</Text>
        </Grid>

        <Image
          src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
          fallbackSrc={fallbackSrc[colorMode]}
          alt="poster"
          m={4}
          objectFit="contain"
          htmlHeight="100%"
          htmlWidth="150px"
          minW="150px"
          borderWidth="1px"
          border={borderColor}
        />
      </Flex>
    </Box>
  );
};

export default RetailInfo_TV_TMDB;
