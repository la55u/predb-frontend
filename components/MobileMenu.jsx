import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/core";
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

      <Menu>
        <MenuButton as={Button} rightIcon={GiHamburgerMenu} size="sm" ml={3}>
          Menu
        </MenuButton>

        <MenuList placement="bottom-end">
          <MenuItem>
            <NextLink href="/" passHref>
              <Flex
                as={Link}
                align="center"
                w="100%"
                textDecor="none !important"
              >
                <Box w="15%">
                  <Icon name="search" />
                </Box>
                <span> Search</span>
              </Flex>
            </NextLink>
          </MenuItem>

          <MenuItem>
            <NextLink href="/notifications">
              <Flex
                as={Link}
                align="center"
                w="100%"
                textDecor="none !important"
              >
                <Box w="15%">
                  <Icon name="bell" />
                </Box>
                <span>Notifications</span>
              </Flex>
            </NextLink>
          </MenuItem>

          <MenuItem>
            <NextLink href="/stats">
              <Flex
                as={Link}
                align="center"
                w="100%"
                textDecor="none !important"
              >
                <Box w="15%">
                  <Box as={IoIosStats} display="inline" mr={2} />
                </Box>
                <span>Stats</span>
              </Flex>
            </NextLink>
          </MenuItem>

          <MenuItem>
            <NextLink href="/about">
              <Flex
                as={Link}
                align="center"
                w="100%"
                textDecor="none !important"
              >
                <Box w="15%">
                  <Icon name="info-outline" />
                </Box>
                <span>About</span>
              </Flex>
            </NextLink>
          </MenuItem>

          <MenuItem>
            <NextLink href="/contact">
              <Flex
                as={Link}
                align="center"
                w="100%"
                textDecor="none !important"
              >
                <Box w="15%">
                  <Icon name="email" />
                </Box>
                <span>Contact</span>
              </Flex>
            </NextLink>
          </MenuItem>

          <MenuItem>
            <NextLink href="/login">
              <Flex
                as={Link}
                align="center"
                w="100%"
                textDecor="none !important"
              >
                <Box w="15%">
                  <Box as={BsFillPersonFill} display="inline" mr={2} />
                </Box>
                <span>Profile</span>
              </Flex>
            </NextLink>
          </MenuItem>

          <MenuDivider />

          <MenuItem>
            <Flex
              as="a"
              align="center"
              w="100%"
              href="https://github.com/la55u/predb-frontend"
              target="_blank"
              textDecor="none !important"
            >
              <Box w="15%">
                <Box as={AiOutlineGithub} display="inline" mr={2} />
              </Box>
              <span>Source code</span>
            </Flex>
          </MenuItem>

          <MenuItem>
            <Flex
              as="a"
              align="center"
              w="100%"
              href="https://github.com/la55u/predb-frontend/swagger.yml"
              target="_blank"
              textDecor="none !important"
            >
              <Box w="15%">
                <Box as={AiFillApi} display="inline" mr={2} />
              </Box>
              <span>API</span>
            </Flex>
          </MenuItem>

          <MenuItem>
            <NextLink href="/rss">
              <Flex
                as={Link}
                align="center"
                w="100%"
                textDecor="none !important"
              >
                <Box w="15%">
                  <Box as={FaRss} display="inline" mr={2} />
                </Box>
                <span>RSS</span>
              </Flex>
            </NextLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
