import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuTransition,
  Stack,
  useColorModeValue,
} from "@chakra-ui/core";
import NextLink from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { addToast } from "../redux/slices/toastSlice";
import { Container } from "./Container";
import { GithubLink } from "./GithubLink";
import { HeaderContainer } from "./HeaderContainer";
import Logo from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Header = (props) => {
  const bg = useColorModeValue("gray.100", "gray.800");
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  console.log("isloggedin", isLoggedIn);

  return (
    <HeaderContainer bg={bg} {...props}>
      <Container h="100%" d="flex" align="center">
        <Flex w="100%" alignItems="center" justify="space-between">
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
                <MenuTransition>
                  {(styles) => (
                    <MenuList sx={styles}>
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
                  )}
                </MenuTransition>
              </Menu>
            )}
          </Flex>

          <MobileMenu />
        </Flex>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
