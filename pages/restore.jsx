import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  useColorMode,
} from "@chakra-ui/core";
import { useState } from "react";
import Layout from "../components/Layout";

const Restore = () => {
  const { colorMode } = useColorMode();
  const [email, setEmail] = useState("");

  const borderColor = { dark: "gray.700", light: "gray.300" };

  const handleInput = (e) => {
    setEmail(e.target.value);
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
          <Heading>Restore password</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <Input
                type="email"
                isRequired
                placeholder="Email address..."
                value={email}
                onChange={handleInput}
              />
            </InputGroup>
            <FormHelperText>
              Instructions to restore your account will be sent to this address
            </FormHelperText>
          </FormControl>

          <Button
            ml="auto"
            mt={5}
            colorScheme="teal"
            rightIcon="arrow-forward"
            type="submit"
          >
            Send
          </Button>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Restore;
