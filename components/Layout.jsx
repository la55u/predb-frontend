import { Box, Container, Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Flex direction="column" minH="100vh" fontFamily="'Lato', sans-serif;">
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
