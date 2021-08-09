import { Box, Container, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../redux/slices/authSlice";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import { setAuthenticated } from "../redux/slices/authSlice";
import { useSocket } from "../hooks/useSocket";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useSocket();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const t = localStorage.getItem("auth");
    if (t) {
      dispatch(setAuthenticated());
    }
    if (isAuthenticated && !user) dispatch(getMe());
  }, [isAuthenticated]);

  return (
    <>
      <Flex direction="column" minH="100vh">
        <Navbar />

        <Box as="main" py={24} flexGrow="1">
          <Container>{children}</Container>
        </Box>

        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
