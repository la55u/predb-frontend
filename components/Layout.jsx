import { Box, Flex, useColorMode } from "@chakra-ui/core";
import Head from "next/head";
import React from "react";
import { Container } from "./Container";
import { Footer } from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = { dark: "gray.800", light: "gray.100" };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Flex
        bg={bgColor[colorMode]}
        direction="column"
        minH="100vh"
        fontFamily="'Lato', sans-serif;"
      >
        <Header />

        <Box as="main" pt={24} pb={24} flexGrow="1">
          <Container>{children}</Container>
        </Box>

        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
