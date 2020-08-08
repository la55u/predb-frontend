import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import TimeAgo from "timeago-react";

const RetailInfo_Movie_TMDB = ({ data, borderColor }) => {
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
            Title
          </Text>
          <Text wordBreak="break-all">
            {data.original_title}
            {data.title !== data.original_title && ` (${data.title})`}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Original language
          </Text>
          <Text>
            {data.original_language
              ? data.original_language.toUpperCase()
              : "-"}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Prod. companies
          </Text>
          <Text>
            {data.production_companies.length > 0
              ? data.production_companies.map((n) => n.name).join(", ")
              : "-"}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Prod. countries
          </Text>
          <Text>
            {data.production_countries.length > 0
              ? data.production_countries.map((n) => n.name).join(", ")
              : "-"}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Budget
          </Text>
          <Text>
            {data.budget
              ? "$ " +
                data.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : "-"}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Revenue
          </Text>
          <Text>
            {data.revenue
              ? "$ " +
                data.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : "-"}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            Runtime
          </Text>
          <Text>{data.runtime ? `${data.runtime} min` : "-"}</Text>

          <Text fontWeight="bold" justifySelf="end">
            Genre
          </Text>
          <Text>
            {data.genres.length > 0
              ? data.genres.map((g) => g.name).join(", ")
              : "-"}
          </Text>

          <Text fontWeight="bold" justifySelf="end">
            IMDB
          </Text>
          <Text>
            {data.imdb_id ? (
              <a
                href={`https://imdb.com/title/${data.imdb_id}`}
                target="_blank"
              >
                {`https://imdb.com/title/${data.imdb_id}`}
              </a>
            ) : (
              "-"
            )}
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
            Released
          </Text>
          <Text>
            {data.release_date || "-"} (<TimeAgo datetime={data.release_date} />
            )
          </Text>

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

export default RetailInfo_Movie_TMDB;
