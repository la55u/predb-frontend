import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  useColorMode,
  useToast,
} from "@chakra-ui/core";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import { API_BASE, API_ENDPOINT } from "../utils/routes";

const initialState = {
  email: "",
  password: "",
  passwordConfirm: "",
};

const Register = () => {
  const { colorMode } = useColorMode();
  const [credentials, setCredentials] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const toast = useToast();
  const borderColor = { dark: "gray.700", light: "gray.300" };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredentials((c) => ({ ...c, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(API_BASE + API_ENDPOINT.REGISTER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    console.log("register data:", data);

    setCredentials({ ...initialState });
    document.querySelector("form").reset();

    toast({
      title: "Email sent",
      description: "Follow the instructions to complete the registration",
      status: "success",
      duration: 7000,
    });
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
        onSubmit={handleSubmit}
      >
        <Stack spacing={5}>
          <Heading>Register</Heading>

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
            <FormHelperText>
              A confirmation email will be sent to this address
            </FormHelperText>
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
                  aria-label="Clear input"
                  onClick={() => setShowPassword((s) => !s)}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Confirm password</FormLabel>
            <InputGroup>
              <Input
                isRequired
                type={showPasswordConfirm ? "text" : "password"}
                placeholder="Password..."
                value={credentials.passwordConfirm}
                onChange={handleInput}
                name={"passwordConfirm"}
                isInvalid={
                  credentials.passwordConfirm &&
                  credentials.password !== credentials.passwordConfirm
                }
              />

              <InputRightElement>
                <IconButton
                  size="sm"
                  variant="ghost"
                  icon={showPasswordConfirm ? <ViewOffIcon /> : <ViewIcon />}
                  aria-label={showPasswordConfirm ? "Hide" : "Show"}
                  onClick={() => setShowPasswordConfirm((s) => !s)}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button ml="auto" mt={5} colorScheme="teal" type="submit">
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

export default Register;
