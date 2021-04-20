import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { addToast } from "../redux/slices/toastSlice";
import { GithubLink } from "./GithubLink";
import Logo from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Header = (props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const colorvalues = useColorModeValue({ bg: "light.bg" }, { bg: "dark.bg" });

  const dispatch = useDispatch();

  console.log("isloggedin", isLoggedIn);

  return (
    <Box
      pos="fixed"
      as="header"
      top="0"
      zIndex="4"
      left="0"
      right="0"
      width="full"
      height="4rem"
      display="flex"
      alignItems="center"
      shadow="md"
      bg={colorvalues.bg}
    >
      <Container variant="fullwidth">
        <Flex w="full" alignItems="center" justify="space-between">
          <Box display="flex" alignItems="center">
            <Logo />
          </Box>

          <Flex
            align="center"
            color="gray.500"
            display={["none", "none", "flex"]}
          >
            <NextLink href="/notifications" passHref>
              <Button mt="2px" as="a" color="current" size="sm" variant="ghost">
                Notifications
              </Button>
            </NextLink>

            <NextLink href="/stats" passHref>
              <Button
                mx={2}
                mt="2px"
                as="a"
                color="current"
                size="sm"
                variant="ghost"
              >
                Stats
              </Button>
            </NextLink>

            <Stack align="center" isInline spacing="3">
              <GithubLink />
            </Stack>

            <ThemeSwitcher />

            {!isLoggedIn ? (
              <NextLink href="/login">
                <a>
                  <IconButton
                    aria-label="Log in"
                    variant="ghost"
                    color="currentcolor"
                    ml="2"
                    fontSize="20px"
                    icon={<BsFillPersonFill />}
                  />
                </a>
              </NextLink>
            ) : (
              <Menu placement="bottom-end">
                <MenuButton
                  as={IconButton}
                  color="teal.400"
                  fontSize="20px"
                  variant="ghost"
                  ml="2"
                  icon={<BsFillPersonFill />}
                />
                <MenuList>
                  <NextLink href="/profile" passHref>
                    <MenuItem as="a" icon={<BsFillPersonFill />}>
                      Profile
                    </MenuItem>
                  </NextLink>

                  <MenuItem
                    icon={<FiLogOut />}
                    onClick={() => {
                      dispatch(logout());
                      dispatch(addToast({ title: "You logged out!" }));
                    }}
                  >
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </Flex>

          <MobileMenu />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
