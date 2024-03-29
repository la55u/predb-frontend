import {
  Box,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
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

      <Stack
        p={4}
        justify={["space-between"]}
        align="center"
        direction={["column-reverse", "column-reverse", "row"]}
      >
        <Grid gap="0 20px" templateColumns={["80px auto", "150px auto"]}>
          <Text fontWeight="bold" textAlign="right">
            Series name
          </Text>
          <Text wordBreak="break-all">
            {data.original_name}
            {data.name !== data.original_name && ` (${data.name})`}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Type
          </Text>
          <Text>{data.type || "-"}</Text>

          <Text fontWeight="bold" textAlign="right">
            Country
          </Text>
          <Text>
            {data.origin_country.length > 0 ? data.origin_country.join(", ") : "-"}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Network
          </Text>
          <Text>
            {data.networks.length > 0 ? data.networks.map((n) => n.name).join(", ") : "-"}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            First aired
          </Text>
          <Text>
            {data.first_air_date ? (
              <>
                {data.first_air_date} (<TimeAgo datetime={data.first_air_date} />)
              </>
            ) : (
              "-"
            )}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Runtime
          </Text>
          <Text>
            {data.episode_run_time.length > 0
              ? data.episode_run_time.map((t) => t + " min").join(", ")
              : "-"}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Genre
          </Text>
          <Text>
            {data.genres.length > 0 ? data.genres.map((g) => g.name).join(", ") : "-"}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Homepage
          </Text>
          <Text wordBreak="break-all">
            <Link isExternal href={data.homepage}>
              {data.homepage || "-"}
            </Link>
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Rating
          </Text>
          <Text>
            {data.vote_count === 0
              ? "-"
              : `${data.vote_average} / 10 (${data.vote_count} votes, TMDB)`}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Status
          </Text>
          <Text>{data.status || "-"}</Text>

          <Text fontWeight="bold" textAlign="right">
            Overview
          </Text>
          <Text>{data.overview || "-"}</Text>

          <Text gridColumn={2} fontSize="sm" color="gray.500" mt={2}>
            Missing data? Fill it{" "}
            <Link isExternal href={`https://themoviedb.org/tv/${data.id}`}>
              here!
            </Link>
          </Text>
        </Grid>

        <Image
          alignSelf={["center", "center", "start"]}
          src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
          fallbackSrc={fallbackSrc[colorMode]}
          alt="poster image"
          objectFit="contain"
          htmlHeight="100%"
          htmlWidth="150px"
          w={["full", "200px"]}
          minW="150px"
          maxW="200px"
          borderWidth="1px"
          border={borderColor}
          borderRadius="sm"
          shadow="md"
        />
      </Stack>
    </Box>
  );
};

export default RetailInfo_TV_TMDB;
