import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export const Footer = () => {
  return (
    <Box as="footer" borderTopWidth="1px" width="full">
      <Container
        as={Flex}
        justify="space-between"
        align="center"
        // h={"100%"}
        color="grey"
        flexWrap="wrap"
      >
        <Flex
          py={2}
          direction={["column", "row"]}
          w={["100%", "auto"]}
          alignItems="center"
        >
          <Text>Made in Budapest, Hungary</Text>
          <Text mx={3} display={["none", "inline"]}>
            •
          </Text>
          <Text>Build: {process.env.NEXT_PUBLIC_GIT_SHA}</Text>
        </Flex>

        <Flex py={2} justify={["center", "flex-start"]} w={["100%", "auto"]}>
          <NextLink href="/about" passHref>
            <Link mx={2}>About</Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link mx={2}>Contact</Link>
          </NextLink>
          <NextLink href="/rss" passHref>
            <Link mx={2}>RSS</Link>
          </NextLink>
          <NextLink href="#" passHref>
            <Link mx={2} mr={[2, 0]}>
              API
            </Link>
          </NextLink>
        </Flex>
      </Container>
    </Box>
  );
};
