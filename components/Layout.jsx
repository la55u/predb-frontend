import { Box, Flex, useColorMode } from "@chakra-ui/core";
import React from "react";
import { Container } from "./Container";
import { Footer } from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = { dark: "gray.800", light: "gray.100" };

  return (
    <Flex bg={bgColor[colorMode]} direction="column" minH="100vh">
      <Header />

      <Box as="main" pt={24} pb={24} flexGrow="1">
        <Container>{children}</Container>
      </Box>

      <Footer />
    </Flex>
  );
};

export default Layout;
