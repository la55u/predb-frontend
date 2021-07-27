import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Link, Tag, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { IoIosNuclear } from "react-icons/io";
import TimeAgo from "timeago-react";
import { getSection } from "../utils/classify";
import CategoryBadge from "./CategoryBadge";
import CopyButton from "./CopyButon";

const ReleaseRow = ({ release }) => {
  const colorvalues = useColorModeValue(
    {
      borderColor: "gray.200",
      hoverColor: "gray.200",
      gray: "gray.500",
      tagBg: "gray.300",
    },
    {
      borderColor: "gray.800",
      hoverColor: "gray.800",
      gray: "gray.500",
      tagBg: "whiteAlpha.50",
    },
  );

  const section = getSection(release.name, release.section);

  return (
    <Box
      role="group"
      px={[1, 1, 1, 4]}
      py={2}
      position="relative"
      _before={{
        content: `''`,
        position: "absolute",
        // height: "1px",
        left: [0, 0, "30px"],
        right: [0, 0, "30px"],
        height: "100%",
        bottom: 0,
        borderColor: colorvalues.borderColor,
        borderTopWidth: "1px",
        pointerEvents: "none",
      }}
      _hover={{
        bg: colorvalues.hoverColor,
        borderRadius: "sm",
        //boxShadow: "md",
      }}
    >
      <Grid
        gap="0 6px"
        alignItems="center"
        templateColumns={{
          base: "3fr 1fr 1fr 1.6fr",
          md: "0.5fr 0.5fr 2.5fr 0.2fr 0.2fr 0.35fr",
        }}
        templateAreas={{
          base: `"added size size cat" "namewrap namewrap namewrap namewrap" `,
          md: `"added cat namewrap action files size"`,
        }}
      >
        <Box
          gridArea="added"
          color={{ base: colorvalues.gray, md: "current" }}
          title={new Date(release.added).toLocaleString()}
          fontSize={["sm", "sm", "md"]}
        >
          <TimeAgo datetime={new Date(release.added)} opts={{ minInterval: 60 }} />
        </Box>

        <Box gridArea="cat" justifySelf="end" px={3}>
          <CategoryBadge section={section} />
        </Box>

        <Box gridArea="namewrap">
          <Box wordBreak="break-word" my={[1, 1, 0]}>
            <NextLink href={`/release/${release._id}`} passHref>
              <Link>{release.name}</Link>
            </NextLink>
          </Box>

          <Flex justifyContent="space-between">
            <Box as="small" fontStyle="italic" color={colorvalues.gray}>
              {!release.traces ? (
                <Text>No site raced this</Text>
              ) : (
                release.traces.map((tr) => `#${tr.rank}\u00A0${tr.site}`).join(", ")
              )}
            </Box>

            <Flex>
              {release.nukes && (
                <Box
                  title={release.nukes.map((n) => `[${n.type}] ${n.reason}`).join("\r\n")}
                  as={IoIosNuclear}
                  color="orange.400"
                  cursor="help"
                />
              )}

              {release.proof && (
                <Tag size="sm" bg={colorvalues.tagBg}>
                  Proof
                </Tag>
              )}

              {release.nfo?.length > 0 && (
                <Tag ml={4} size="sm" bg={colorvalues.tagBg}>
                  NFO
                </Tag>
              )}
            </Flex>
          </Flex>
        </Box>

        <Box gridArea="action" d={{ base: "none", md: "block" }} justifySelf="center">
          <CopyButton d="none" _groupHover={{ d: "flex" }} value={release.name} />
        </Box>

        <Box
          gridArea="files"
          display={["none", "none", "block"]}
          justifySelf={"center"}
          color={{ base: colorvalues.gray, md: "current" }}
        >
          {release.files ? release.files + "F" : "-"}
        </Box>
        <Box
          gridArea="size"
          justifySelf="end"
          color={{ base: colorvalues.gray, md: "current" }}
          fontSize={["sm", "sm", "md"]}
        >
          {release.size ? release.size + " MB" : "-"}
        </Box>
      </Grid>
    </Box>
  );
};

export default ReleaseRow;
