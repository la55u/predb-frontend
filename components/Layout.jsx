import { Box, Flex, useColorModeValue } from "@chakra-ui/core";
import { Container } from "./Container";
import { Footer } from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const bgColor = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <Flex
        bg={bgColor}
        direction="column"
        minH="100vh"
        fontFamily="'Lato', sans-serif;"
      >
        <Header />

        <Box as="main" py={24} flexGrow="1">
          <Container>{children}</Container>
        </Box>

        {/* <ToastProvider /> */}
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
