import { Button } from "@chakra-ui/core";
import { FaBook, FaFootballBall } from "react-icons/fa";
import { FiFilm, FiMonitor, FiPackage } from "react-icons/fi";
import { IoIosMusicalNotes, IoMdSchool } from "react-icons/io";
import { MdGamepad, MdHelp, MdWhatshot } from "react-icons/md";
import { SECTIONS } from "../utils/classify";

const getBadgeData = (section) => {
  switch (section) {
    case SECTIONS.XXX_VIDEO:
    case SECTIONS.XXX_PICS:
      return { bg: "red.400", name: "XXX", icon: <MdWhatshot /> };

    case SECTIONS.TV_HD:
    case SECTIONS.TV_SD:
    case SECTIONS.TV_DISC:
      return { bg: "blue.400", name: "TV", icon: <FiMonitor /> };

    case SECTIONS.MUSIC_AUDIO:
    case SECTIONS.MUSIC_DICS:
    case SECTIONS.MUSIC_VIDEO:
      return { bg: "cyan.400", name: "Music", icon: <IoIosMusicalNotes /> };

    case SECTIONS.GAME_PC:
    case SECTIONS.GAME_PS:
    case SECTIONS.GAME_XBOX:
    case SECTIONS.GAME_NINTENDO:
      return {
        bg: "orange.400",
        name: "Game",
        icon: <MdGamepad />,
        color: "black",
      };
    case SECTIONS.MOVIE_HD:
    case SECTIONS.MOVIE_SD:
    case SECTIONS.MOVIE_DICS:
      return { bg: "green.400", name: "Movie", icon: <FiFilm /> };
    case SECTIONS.EBOOK:
      return { bg: "#b38b6d", name: "Book", icon: <FaBook /> };
    case SECTIONS.APP_MAC:
    case SECTIONS.APP_WIN:
    case SECTIONS.APP_LINUX:
    case SECTIONS.APP_MOBILE:
      return { bg: "purple.400", name: "App", icon: <FiPackage /> };
    case SECTIONS.TUTORIAL:
      return { bg: "yellow.400", name: "Educational", icon: <IoMdSchool /> };
    case SECTIONS.SPORT:
      return { bg: "teal.300", name: "Sport", icon: <FaFootballBall /> };
    default:
      return {
        bg: "gray.400",
        name: "Other",
        icon: <MdHelp />,
        color: "black",
      };
  }
};

const CategoryBadge = ({ section }) => {
  const badge = getBadgeData(section);

  return (
    <>
      <Button
        size="sm"
        leftIcon={badge.icon}
        variant="link"
        // colorScheme={badge.bg.split(".")[0]}
        color={badge.bg}
      >
        {badge.name}
      </Button>
    </>
  );
};

export default CategoryBadge;
