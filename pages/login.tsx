import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  useColorMode,
} from "@chakra-ui/core";
import NextLink from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";

const Login = () => {
  const { colorMode } = useColorMode();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const borderColor = { dark: "gray.700", light: "gray.300" };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setCredentials((c) => ({ ...c, [name]: value }));
  };

  return (
    <Layout>
      <Box
        as="form"
        mt={20}
        p={5}
        borderColor={borderColor[colorMode]}
        borderWidth="1px"
        borderRadius="md"
        w={["100%", "100%", "500px"]}
        mx="auto"
      >
        <Stack spacing={5}>
          <Heading>Log in</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon name="at-sign" color="gray.400" />
              </InputLeftElement>
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
              <InputLeftElement>
                <Icon name="lock" color="gray.400" />
              </InputLeftElement>
              <Input
                isRequired
                type="password"
                placeholder="Password..."
                value={credentials.password}
                onChange={handleInput}
                name="password"
              />
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
            variantColor="teal"
            rightIcon="arrow-forward"
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
