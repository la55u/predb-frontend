import {
  Box,
  Button,
  FormControl,
  FormHelperText,
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
          <Heading>Register</Heading>

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
            <FormHelperText>
              A confirmation email will be sent to this address
            </FormHelperText>
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

          <FormControl>
            <FormLabel>Confirm password</FormLabel>
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

          <Button
            ml="auto"
            mt={5}
            variantColor="teal"
            rightIcon="arrow-forward"
            type="submit"
          >
            Register
          </Button>
        </Stack>
      </Box>

      <Box w={["100%", "100%", "500px"]} mx="auto" mt={10}>
        <Heading size="sm">
          Already have an account?{" "}
          <NextLink href="/login" passHref>
            <Link color="teal.500">Log in here</Link>
          </NextLink>
        </Heading>
      </Box>
    </Layout>
  );
};

export default Login;
