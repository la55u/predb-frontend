import { Box, Container, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../redux/slices/authSlice";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated && !user) dispatch(getMe());
  }, [isAuthenticated]);

  return (
    <>
      <Flex direction="column" minH="100vh" fontFamily="'Lato', sans-serif;">
        <Navbar />

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
