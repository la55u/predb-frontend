import { Flex, Heading, Text } from "@chakra-ui/core";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Flex align="baseline">
      <Link href="/">
        <a>
          <Flex align="baseline" fontStyle="italic">
            <Heading>PREdb</Heading>
            <Heading size="md">.live</Heading>
          </Flex>
        </a>
      </Link>
      <Text d={["none", "none", "block"]} color="gray.500" pl={5}>
        Indexing 7,864,541 releases
      </Text>
    </Flex>
  );
};

export default Logo;
