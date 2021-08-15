import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import { register } from "../redux/slices/authSlice";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const initialState = {
  email: "",
  password: "",
  passwordConfirm: "",
};

const Register = () => {
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const colors = useColorModeValue({ panel: "gray.200" }, { panel: "whiteAlpha.50" });

  useEffect(() => {
    if (isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredentials((c) => ({ ...c, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(register(credentials));

    setCredentials({ ...initialState });
    document.querySelector("form").reset();
  };

  return (
    <Layout title="Register">
      <Box
        as="form"
        mt={20}
        p={5}
        bg={colors.panel}
        shadow="md"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
                type={showPassword ? "text" : "password"}
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
                  icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  aria-label={showPassword ? "Hide" : "Show"}
                  onClick={() => setShowPassword((s) => !s)}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button
            ml="auto"
            mt={5}
            w="full"
            colorScheme="teal"
            type="submit"
            alignSelf="flex-end"
            isLoading={loading}
          >
            Register
          </Button>
        </Stack>
      </Box>

      <Text my={6} textAlign="center">
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
        <Heading size="md">Already have an account? </Heading>
        <NextLink href="/login" passHref>
          <Button as="a" color="teal.500">
            Log in here
          </Button>
        </NextLink>
      </HStack>
    </Layout>
  );
};

export default Register;
