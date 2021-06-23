import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
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

const Navbar = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const colorvalues = useColorModeValue({ bg: "light.bg" }, { bg: "dark.bg" });

  const handleLogout = () => {
    dispatch(logout());
    dispatch(addToast({ title: "You logged out!" }));
  };

  return (
    <Box
      pos="fixed"
      as="nav"
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

          <Flex align="center" color="gray.500" display={["none", "none", "flex"]}>
            <NextLink href="/" passHref>
              <Button mt="2px" as="a" color="current" size="sm" variant="ghost">
                Search
              </Button>
            </NextLink>

            <NextLink href="/notifications" passHref>
              <Button mt="2px" as="a" color="current" size="sm" variant="ghost">
                Notifications
              </Button>
            </NextLink>

            <NextLink href="/stats" passHref>
              <Button mx={2} mt="2px" as="a" color="current" size="sm" variant="ghost">
                Stats
              </Button>
            </NextLink>

            <Stack align="center" isInline spacing="3">
              <GithubLink />
            </Stack>

            <ThemeSwitcher />

            {!user ? (
              <NextLink href="/login" passHref>
                <IconButton
                  as="a"
                  aria-label="Log in"
                  variant="ghost"
                  color="currentcolor"
                  ml="2"
                  size="sm"
                  icon={<Icon as={BsFillPersonFill} boxSize="20px" />}
                />
              </NextLink>
            ) : (
              <Menu placement="bottom-end">
                <MenuButton
                  as={Button}
                  fontWeight="semibold"
                  color="currentcolor"
                  variant="ghost"
                  ml="2"
                  size="sm"
                  rightIcon={<Icon as={BsFillPersonFill} boxSize="20px" />}
                >
                  {user.email.split("@")[0]}
                </MenuButton>
                <MenuList>
                  <NextLink href="/profile" passHref>
                    <MenuItem as="a" icon={<Icon as={BsFillPersonFill} boxSize="20px" />}>
                      Profile
                    </MenuItem>
                  </NextLink>
                  <MenuItem
                    icon={<Icon as={FiLogOut} boxSize="20px" />}
                    onClick={handleLogout}
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

export default Navbar;
