import { BellIcon, EmailIcon, InfoOutlineIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  Link,
  Icon,
  MenuList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { AiFillApi, AiOutlineGithub } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosStats } from "react-icons/io";
import { useSelector } from "react-redux";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const MobileMenu = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Box display={["block", "block", "none"]}>
      <ThemeSwitcher />

      <Menu placement="bottom-end" isLazy closeOnBlur>
        <MenuButton as={Button} rightIcon={<GiHamburgerMenu />} size="sm" ml={3}>
          Menu
        </MenuButton>

        <MenuList>
          <NextLink href="/" passHref>
            <MenuItem as={Link} icon={<Icon as={SearchIcon} boxSize="20px" />}>
              Search
            </MenuItem>
          </NextLink>

          <NextLink href="/notifications" passHref>
            <MenuItem as={Link} icon={<Icon as={BellIcon} boxSize="20px" />}>
              Notifications
            </MenuItem>
          </NextLink>

          <NextLink href="/stats" passHref>
            <MenuItem as={Link} icon={<Icon as={IoIosStats} boxSize="20px" />}>
              Stats
            </MenuItem>
          </NextLink>

          <NextLink href="/about" passHref>
            <MenuItem as={Link} icon={<Icon as={InfoOutlineIcon} boxSize="20px" />}>
              About
            </MenuItem>
          </NextLink>

          {user ? (
            <>
              <MenuDivider />
              <NextLink href="/profile" passHref>
                <MenuItem as={Link} icon={<Icon as={BsFillPersonFill} boxSize="20px" />}>
                  Profile
                </MenuItem>
              </NextLink>
              <NextLink href="/profile" passHref>
                <MenuItem as={Link} icon={<Icon as={FiLogOut} boxSize="20px" />}>
                  Log out
                </MenuItem>
              </NextLink>
            </>
          ) : (
            <NextLink href="/login" passHref>
              <MenuItem as={Link} icon={<Icon as={FiLogIn} boxSize="20px" />}>
                Log in
              </MenuItem>
            </NextLink>
          )}

          <MenuDivider />

          <MenuItem
            icon={<Icon as={AiOutlineGithub} boxSize="20px" />}
            as="a"
            href="https://github.com/la55u/predb-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </MenuItem>

          <MenuItem
            icon={<Icon as={AiFillApi} boxSize="20px" />}
            as="a"
            href="https://github.com/la55u/predb-frontend/swagger.yml"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
