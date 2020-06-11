import { Box, useColorMode } from "@chakra-ui/core";
import React from "react";
import { Container } from "./Container";
import Header from "./Header";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = { dark: "gray.800", light: "gray.100" };

  return (
    <Box bg={bgColor[colorMode]}>
      <Header />
      <Box as="main" pt={24} pb={24}>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;
