import {
  Alert,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  useColorMode,
} from "@chakra-ui/core";
import { InfoIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import Layout from "../components/Layout";
import { API_BASE, API_ENDPOINT } from "../utils/routes";

const Login = () => {
  const { colorMode } = useColorMode();
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const router = useRouter();

  const borderColor = { dark: "gray.700", light: "gray.300" };

  const handleInput = (e) => {
    const { name, value, type } = e.target;
    setCredentials((c) => ({ ...c, [name]: value }));
  };

  const initialLoginState = { token: "", error: false, loading: false };

  const loginReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_BEGIN":
        return { ...state, loading: true };
      case "LOGIN_SUCCESS":
        return { ...state, loading: false, token: action.payload };
      case "LOGIN_FAIL":
        return { ...state, loading: false, error: action.payload };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(API_BASE + API_ENDPOINT.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    console.log("login data:", data);
  };

  return (
    <Layout>
      {router.query.confirmed === "1" && (
        <Alert
          status="success"
          variant="subtle"
          w={["100%", "100%", "500px"]}
          borderRadius="md"
          mx="auto"
        >
          <InfoIcon />
          Registration complete! You may now log in.
        </Alert>
      )}

      <Box
        as="form"
        mt={20}
        p={5}
        borderColor={borderColor[colorMode]}
        borderWidth="1px"
        borderRadius="md"
        w={["100%", "100%", "500px"]}
        mx="auto"
        onSubmit={handleSubmit}
      >
        <Stack spacing={5}>
          <Heading>Log in</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <Input
                isRequired
                placeholder="Email address..."
                value={credentials.email}
                onChange={handleInput}
                name="email"
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                isRequired
                type={showPassword ? "text" : "password"}
                placeholder="Password..."
                value={credentials.password}
                onChange={handleInput}
                name="password"
              />
              <InputRightElement>
                <IconButton
                  size="sm"
                  variant="ghost"
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  aria-label={showPassword ? "Hide" : "Show"}
                  onClick={() => setShowPassword((s) => !s)}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Flex justify="space-between">
            <Checkbox name="remember">Remember me</Checkbox>
            <NextLink href="/restore" passHref>
              <Link>Forgot password</Link>
            </NextLink>
          </Flex>

          <Button
            ml="auto"
            mt={5}
            colorScheme="teal"
            rightIcon={<FiLogIn />}
            type="submit"
          >
            Log in
          </Button>
        </Stack>
      </Box>

      <Box w={["100%", "100%", "500px"]} mx="auto" mt={10}>
        <Heading size="sm">
          Don't have an account yet?{" "}
          <NextLink href="/register" passHref>
            <Link color="teal.500">Register here</Link>
          </NextLink>
        </Heading>
      </Box>
    </Layout>
  );
};

export default Login;
