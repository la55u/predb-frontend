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
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
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
  const { user, loading, isAuthenticated } = useSelector((state) => state.auth);

  const colors = useColorModeValue({ panel: "gray.200" }, { panel: "whiteAlpha.50" });

  useEffect(() => {
    // redirect user to homepage after successful login
    if (isAuthenticated) {
      router.push("/");
      dispatch(addToast({ title: "Login successful!" }));
    }
  }, [isAuthenticated]);

  const handleInput = (e) => {
    const { name, value, type } = e.target;
    setCredentials((c) => ({ ...c, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  return (
    <Layout title="Log in">
      {router.query.confirmed === "1" && (
        <Alert
          status="success"
          variant="subtle"
          w={["100%", "100%", "500px"]}
          borderRadius="md"
          mx="auto"
        >
          <AlertIcon />
          Registration complete! You can log in now.
        </Alert>
      )}

      <Box
        as="form"
        mt={20}
        p={5}
        shadow="md"
        borderRadius="md"
        w={["100%", "100%", "500px"]}
        mx="auto"
        onSubmit={handleSubmit}
        bg={colors.panel}
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
                  icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
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
            w="full"
            colorScheme="teal"
            rightIcon={<FiLogIn />}
            type="submit"
            alignSelf="flex-end"
            isLoading={loading}
          >
            Log in
          </Button>
        </Stack>
      </Box>

      <Text my={6} textAlign="center" color={colors.borderColor}>
        OR
      </Text>

      <HStack
        bg={colors.panel}
        shadow="md"
        borderRadius="md"
        w={["100%", "100%", "500px"]}
        mx="auto"
        p={5}
        justify="space-between"
      >
        <Heading size="md">Don't have an account yet? </Heading>

        <NextLink href="/register" passHref>
          <Button as="a" color="teal.500">
            Register here
          </Button>
        </NextLink>
      </HStack>
    </Layout>
  );
};

export default Login;
