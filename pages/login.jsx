import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
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
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { login } from "../redux/slices/authSlice";
import { addToast } from "../redux/slices/toastSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const borderColor = useColorModeValue({
    dark: "gray.700",
    light: "gray.300",
  });

  useEffect(() => {
    // redirect user to homepage after successful login
    if (isLoggedIn) {
      router.replace("/");
      dispatch(addToast({ title: "You are logged in!" }));
    }
  }, [isLoggedIn]);

  const handleInput = (e) => {
    const { name, value, type } = e.target;
    setCredentials((c) => ({ ...c, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(credentials));
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
          <AlertIcon />
          Registration complete! You may now log in.
        </Alert>
      )}

      <Box
        as="form"
        mt={20}
        p={5}
        borderColor={borderColor}
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
                variant="filled"
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
                variant="filled"
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
            mt={5}
            colorScheme="teal"
            rightIcon={<FiLogIn />}
            type="submit"
            alignSelf="flex-end"
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
