import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuTransition,
} from "@chakra-ui/core";
import {
  BellIcon,
  EmailIcon,
  InfoOutlineIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import NextLink from "next/link";
import { AiFillApi, AiOutlineGithub } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRss } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosStats } from "react-icons/io";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const MobileMenu = () => {
  return (
    <Box display={["block", "block", "none"]}>
      <ThemeSwitcher />

      <Menu placement="bottom-end" closeOnBlur>
        <MenuButton
          as={Button}
          rightIcon={<GiHamburgerMenu />}
          size="sm"
          ml={3}
        >
          Menu
        </MenuButton>

        <MenuTransition>
          {(styles) => (
            <MenuList sx={styles}>
              <MenuItem icon={<SearchIcon />}>
                <NextLink href="/">
                  <a>Search</a>
                </NextLink>
              </MenuItem>

              <MenuItem icon={<BellIcon />}>
                <NextLink href="/notifications">
                  <a>Notifications</a>
                </NextLink>
              </MenuItem>

              <MenuItem icon={<IoIosStats />}>
                <NextLink href="/stats">
                  <a>Stats</a>
                </NextLink>
              </MenuItem>

              <MenuItem icon={<InfoOutlineIcon />}>
                <NextLink href="/about">
                  <a>About</a>
                </NextLink>
              </MenuItem>

              <MenuItem icon={<EmailIcon />}>
                <NextLink href="/contact">
                  <a>Contact</a>
                </NextLink>
              </MenuItem>

              <MenuItem icon={<BsFillPersonFill />}>
                <NextLink href="/login">
                  <a>Profile</a>
                </NextLink>
              </MenuItem>

              <MenuDivider />

              <MenuItem
                icon={<AiOutlineGithub />}
                as="a"
                href="https://github.com/la55u/predb-frontend"
                target="_blank"
              >
                Source code
              </MenuItem>

              <MenuItem
                icon={<AiFillApi />}
                as="a"
                href="https://github.com/la55u/predb-frontend/swagger.yml"
                target="_blank"
              >
                API
              </MenuItem>

              <MenuItem icon={<FaRss />}>
                <NextLink href="/rss">
                  <a>RSS</a>
                </NextLink>
              </MenuItem>
            </MenuList>
          )}
        </MenuTransition>
      </Menu>
    </Box>
  );
};
