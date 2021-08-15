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
  Stack,
  useBoolean,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Layout from "../components/layout/Layout";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { API_BASE, API_ENDPOINT } from "../utils/routes";
import { addErrorToast, addSuccessToast } from "../redux/slices/toastSlice";
import { restore } from "../redux/slices/authSlice";

const Restore = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { token } = router.query;
  const [showPassword, setShowPassword] = useBoolean(false);
  const emailRef = useRef();
  const pwRef = useRef();
  const pwConfirmRef = useRef();

  const colors = useColorModeValue({ panel: "gray.200" }, { panel: "whiteAlpha.50" });

  const handleEmailSubmit = async (e) => {
    console.log(emailRef.current.value);
    e.preventDefault();
    dispatch(restore(emailRef.current.value));
    e.target.reset();
  };

  return (
    <Layout title="Restore account">
      {!token && (
        <Box
          as="form"
          onSubmit={handleEmailSubmit}
          mt={20}
          p={5}
          bg={colors.panel}
          shadow="md"
          borderRadius="md"
          w={["100%", "100%", "500px"]}
          mx="auto"
        >
          <Stack spacing={5}>
            <Heading>Recover account</Heading>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <Input ref={emailRef} type="email" isRequired placeholder="@" />
              </InputGroup>
              <FormHelperText>
                Instructions to restore your account will be sent to this address
              </FormHelperText>
            </FormControl>

            <Button ml="auto" mt={5} colorScheme="teal" type="submit">
              Submit
            </Button>
          </Stack>
        </Box>
      )}

      {token && (
        <Box
          as="form"
          mt={20}
          p={5}
          bg={colors.panel}
          shadow="md"
          borderRadius="md"
          w={["100%", "100%", "500px"]}
          mx="auto"
        >
          <Stack spacing={5}>
            <Heading>Recover account</Heading>
            <FormControl>
              <FormLabel>New password</FormLabel>
              <InputGroup>
                <Input
                  ref={pwRef}
                  isRequired
                  variant="filled"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password..."
                  name="password"
                />
                <InputRightElement>
                  <IconButton
                    size="sm"
                    variant="ghost"
                    icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    aria-label="Clear input"
                    onClick={setShowPassword.toggle}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Confirm new password</FormLabel>
              <InputGroup>
                <Input
                  ref={pwConfirmRef}
                  isRequired
                  variant="filled"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password..."
                  name={"passwordConfirm"}
                />
                <InputRightElement>
                  <IconButton
                    size="sm"
                    variant="ghost"
                    icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    aria-label={showPassword ? "Hide" : "Show"}
                    onClick={setShowPassword.toggle}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button ml="auto" mt={5} colorScheme="teal" type="submit">
              Submit
            </Button>
          </Stack>
        </Box>
      )}
    </Layout>
  );
};

export default Restore;
