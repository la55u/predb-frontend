import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import TimeAgo from "timeago-react";

const RetailInfo_Movie_TMDB = ({ data, borderColor }) => {
  const { colorMode } = useColorMode();
  const fallbackSrc = {
    dark: "/movie-placeholder-dark.png",
    light: "/movie-placeholder-light.png",
  };

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
            Title
          </Text>
          <Text wordBreak="break-all">
            {data.original_title}
            {data.title !== data.original_title && ` (${data.title})`}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Language
          </Text>
          <Text>
            {data.original_language ? data.original_language.toUpperCase() : "-"}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Produced by
          </Text>
          <Text>
            {data.production_companies.length > 0
              ? data.production_companies.map((n) => n.name).join(", ")
              : "-"}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Country
          </Text>
          <Text>
            {data.production_countries.length > 0
              ? data.production_countries.map((n) => n.name).join(", ")
              : "-"}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Budget
          </Text>
          <Text>
            {data.budget
              ? "$ " + data.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : "-"}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Revenue
          </Text>
          <Text>
            {data.revenue
              ? "$ " + data.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : "-"}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Runtime
          </Text>
          <Text>{data.runtime ? `${data.runtime} min` : "-"}</Text>

          <Text fontWeight="bold" textAlign="right">
            Genre
          </Text>
          <Text>
            {data.genres.length > 0 ? data.genres.map((g) => g.name).join(", ") : "-"}
          </Text>

          <Text fontWeight="bold" textAlign="right">
            IMDB
          </Text>
          <Text>
            {data.imdb_id ? (
              <Link isExternal href={`https://imdb.com/title/${data.imdb_id}`}>
                {`https://imdb.com/title/${data.imdb_id}`}
              </Link>
            ) : (
              "-"
            )}
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
            Released
          </Text>
          <Text>
            {data.release_date || "-"} (<TimeAgo datetime={data.release_date} />)
          </Text>

          <Text fontWeight="bold" textAlign="right">
            Overview
          </Text>
          <Text>{data.overview || "-"}</Text>

          <Text gridColumn={2} fontSize="sm" color="gray.500" mt={2}>
            Missing data? Fill it{" "}
            <Link isExternal href={`https://themoviedb.org/movie/${data.id}`}>
              here!
            </Link>
          </Text>
        </Grid>

        <Image
          alignSelf={["center", "center", "start"]}
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
          borderRadius="sm"
          shadow="md"
        />
      </Stack>
    </Box>
  );
};

export default RetailInfo_Movie_TMDB;
