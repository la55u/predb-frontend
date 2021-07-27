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
import { useState } from "react";
import Layout from "../components/Layout";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Restore = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { token } = router.query;
  const [showPassword, setShowPassword] = useBoolean(false);

  const colors = useColorModeValue({ panel: "gray.200" }, { panel: "whiteAlpha.50" });

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Layout>
      {!token && (
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
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <Input
                  type="email"
                  isRequired
                  placeholder="@"
                  value={email}
                  onChange={handleInput}
                />
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
