import {
  Alert,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { GiSettingsKnobs } from "react-icons/gi";
import Layout from "../components/layout/Layout";
import { ActionGroup } from "../components/profile/ActionGroup";
import { DeleteAccountModal } from "../components/profile/DeleteAccountModal";

const Profile = () => {
  return (
    <Layout title="Profile">
      <Heading mb={10}>Profile page</Heading>

      <Alert variant="left-accent" status="warning">
        Profile settings do not work yet. Check back later!
      </Alert>

      <ActionGroup title="Preferences" position="relative">
        <Icon
          as={GiSettingsKnobs}
          position="absolute"
          top={[2, 5, 10]}
          right={[2, 5, 10]}
          d={["none", "inline-block"]}
          boxSize={["100px", "160px"]}
          fill="currentcolor"
          fillOpacity={0.2}
        />
        <Stack spacing={5}>
          <FormControl>
            <FormLabel>Release category badge</FormLabel>
            <RadioGroup name="release-badge">
              <Stack pl={5}>
                <Radio value="icon-text">Icons with text (default)</Radio>
                <Radio value="icon">Icons only</Radio>
                <Radio value="text">Text only</Radio>
                <Radio value="dot-text">Dots with text</Radio>
                <Radio value="dot">Dots only</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Site theme</FormLabel>
            <RadioGroup>
              <Stack pl={5}>
                <Radio value="dark">Dark (default)</Radio>
                <Radio value="light">Light</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Selected search method</FormLabel>
            <RadioGroup>
              <Stack pl={5}>
                <Radio value="simple">Simple (default)</Radio>
                <Radio value="advanced">Advanced</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>TMDB API key</FormLabel>
            <Input
              placeholder="Paste here that very long string..."
              maxW={["auto", "auto", "50%"]}
            />
            <FormHelperText>
              With the APi key set, you will see retail info about movies, TV-shows when
              available.
            </FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Notification delay</FormLabel>
            <HStack>
              <NumberInput maxW={["auto", "auto", "150px"]}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <span> seconds</span>
            </HStack>
          </FormControl>

          <Button
            leftIcon={<FaSave />}
            alignSelf="flex-start"
            variant="outline"
            colorScheme="green"
          >
            Save settings
          </Button>
        </Stack>
      </ActionGroup>

      <ActionGroup title="Security">
        <Stack maxW={["auto", "auto", "50%"]}>
          <FormControl>
            <FormLabel>Current Password</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>New password</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm password</FormLabel>
            <Input />
          </FormControl>
          <Text>
            Changing your password means all your login tokens will be invalidated.
          </Text>
          <Button
            leftIcon={<FaSave />}
            alignSelf="flex-start"
            variant="outline"
            colorScheme="green"
          >
            Change password
          </Button>
        </Stack>
      </ActionGroup>

      <ActionGroup title="Administration">
        <Stack spacing={4}>
          <Flex justify="space-between" align="center">
            <Text>
              To comply with GDPR regulations, you can view all the data stored about you
              here.
            </Text>
            <Button variant="outline" leftIcon={<FiDownload />} w="180px">
              Download JSON
            </Button>
          </Flex>
          <Flex
            w="full"
            css={{ gap: 10 }}
            flexWrap="wrap"
            justify="space-between"
            align="center"
          >
            <Text>
              Changed your mind? You can delete your account and all associated data here.
            </Text>
            <DeleteAccountModal />
          </Flex>
        </Stack>
      </ActionGroup>
    </Layout>
  );
};

export default Profile;
