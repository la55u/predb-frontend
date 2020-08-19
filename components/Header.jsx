/** @jsx jsx */
import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  useColorMode,
} from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import NextLink from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { Container } from "./Container";
import { GithubLink } from "./GithubLink";
import { HeaderContainer } from "./HeaderContainer";
import Logo from "./Logo";
import { MobileMenu } from "./MobileMenu";

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: "gray.100", dark: "gray.800" };

  return (
    <HeaderContainer bg={bg[colorMode]} {...props}>
      <Container h="100%">
        <Flex size="100%" align="center" justify="space-between">
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

            <IconButton
              aria-label={`Switch dark/light theme`}
              variant="ghost"
              color="current"
              ml="2"
              fontSize="20px"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? "moon" : "sun"}
            />

            <NextLink href="/login">
              <a>
                <IconButton
                  aria-label="Login"
                  variant="ghost"
                  color="current"
                  ml="2"
                  fontSize="20px"
                  icon={BsFillPersonFill}
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
