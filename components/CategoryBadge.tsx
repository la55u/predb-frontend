import { Box, Flex, Text } from "@chakra-ui/core";
import React from "react";
import { FaBook } from "react-icons/fa";
import { FiMonitor, FiPackage } from "react-icons/fi";
import { GrGamepad, GrStatusUnknown } from "react-icons/gr";
import { IoMdSchool } from "react-icons/io";
import { MdWhatshot } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";

const data = [
  { bgColor: "orange.500", name: "Game", icon: GrGamepad, color: "black" },
  { bgColor: "purple.500", name: "Software", icon: FiPackage },
  { bgColor: "green.600", name: "Movie", icon: RiMovie2Line },
  { bgColor: "blue.500", name: "TV-Show", icon: FiMonitor },
  { bgColor: "yellow.800", name: "Book", icon: FaBook },
  { bgColor: "cyan.600", name: "Music", icon: FaBook },
  { bgColor: "red.500", name: "XXX", icon: MdWhatshot },
  { bgColor: "gray.500", name: "Other", icon: GrStatusUnknown, color: "black" },
  { bgColor: "purple.500", name: "Tutorial", icon: IoMdSchool },
];

const CategoryBadge = () => {
  const rand = Math.floor(Math.random() * data.length);

  return (
    <>
      <Flex
        bg={data[rand].bgColor}
        px="10px"
        py="2px"
        borderRadius="md"
        align="center"
      >
        <Box as={data[rand].icon} mr={2} />

        <Text color={data[rand].color} fontSize="sm">
          {data[rand].name}
        </Text>
      </Flex>
    </>
  );
};

export default CategoryBadge;
