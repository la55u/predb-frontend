import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE, API_ENDPOINT } from "../utils/routes";

const Logo = () => {
  const [count, setCount] = useState("...");

  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const res = await fetch(API_BASE + API_ENDPOINT.COUNT);
    const data = await res.json();
    setCount(data.data);
  };

  return (
    <Flex align="baseline">
      <Link href="/">
        <a>
          <Flex
            align="baseline"
            fontStyle="italic"
            style={{
              background: "linear-gradient(to right,#4FD1C5,#00B5D8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <Heading>PREdb</Heading>
            <Heading color="teal.500" size="md" pr={2}>
              .live
            </Heading>
          </Flex>
        </a>
      </Link>
      <Text d={["none", "none", "block"]} color="gray.500" pl={5}>
        Indexing {count?.toLocaleString()} releases
      </Text>
    </Flex>
  );
};

export default Logo;
