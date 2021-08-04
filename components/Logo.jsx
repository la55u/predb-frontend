import { Flex, Heading, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCount } from "../redux/slices/releasesSlice";

const Logo = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.releases.count);

  useEffect(() => {
    if (!count) dispatch(getCount());
  }, []);

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

      <Tag d={["none", "inline"]} colorScheme="teal">
        Beta
      </Tag>

      <Text d={["none", "none", "block"]} color="gray.500" pl={5}>
        {!count ? "..." : `Indexing ${count?.toLocaleString()} releases`}
      </Text>
    </Flex>
  );
};

export default Logo;
