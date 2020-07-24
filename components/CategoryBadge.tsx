import { Box, Flex, Text } from "@chakra-ui/core";
import React from "react";
import { FaBook } from "react-icons/fa";
import { FiMonitor, FiPackage } from "react-icons/fi";
import { GrGamepad, GrStatusUnknown } from "react-icons/gr";
import { IoMdSchool } from "react-icons/io";
import { MdWhatshot } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { SECTIONS } from "../utils/classify";

const data = [
  { bg: "purple.500", name: "Software", icon: FiPackage },
  { bg: "green.600", name: "Movie", icon: RiMovie2Line },
];

const getBadgeData = (category) => {
  switch (category) {
    case SECTIONS.XXX_VIDEO:
    case SECTIONS.XXX_PICS:
      return { bg: "red.500", name: "XXX", icon: MdWhatshot };

    case SECTIONS.TV_HD:
    case SECTIONS.TV_SD:
    case SECTIONS.TV_DISC:
      return { bg: "blue.500", name: "TV-Show", icon: FiMonitor };

    case SECTIONS.MUSIC_AUDIO:
    case SECTIONS.MUSIC_DICS:
    case SECTIONS.MUSIC_VIDEO:
      return { bg: "cyan.600", name: "Music", icon: FaBook };

    case SECTIONS.GAME_PC:
    case SECTIONS.GAME_PS:
    case SECTIONS.GAME_XBOX:
    case SECTIONS.GAME_NINTENDO:
      return {
        bg: "orange.500",
        name: "Game",
        icon: GrGamepad,
        color: "black",
      };

    case SECTIONS.EBOOK:
      return { bg: "yellow.800", name: "Book", icon: FaBook };

    case SECTIONS.TUTORIAL:
      return { bg: "purple.500", name: "Tutorial", icon: IoMdSchool };

    default:
      return {
        bg: "gray.500",
        name: "Other",
        icon: GrStatusUnknown,
        color: "black",
      };
  }
};

const CategoryBadge = ({ section }) => {
  const rand = Math.floor(Math.random() * data.length);

  const badge = getBadgeData(section);

  return (
    <>
      <Flex bg={badge.bg} px="10px" py="2px" borderRadius="md" align="center">
        <Box as={badge.icon} mr={2} />

        <Text color={badge.color} fontSize="sm">
          {badge.name}
        </Text>
      </Flex>
    </>
  );
};

export default CategoryBadge;
