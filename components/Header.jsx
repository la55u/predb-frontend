/** @jsx jsx */
import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import NextLink from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { Container } from "./Container";
import { GithubLink } from "./GithubLink";
import { HeaderContainer } from "./HeaderContainer";
import Logo from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Header = (props) => {
  const bg = useColorModeValue("gray.100", "gray.800");

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

            <NextLink href="/login">
              <a>
                <IconButton
                  aria-label="Log in"
                  variant="ghost"
                  color="current"
                  ml="2"
                  fontSize="20px"
                  icon={<BsFillPersonFill />}
                />
              </a>
            </NextLink>
          </Flex>

          <MobileMenu />
        </Flex>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
