import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/core";
import { AiFillTag } from "react-icons/ai";
import Layout from "../components/Layout";

const Notifications = () => {
  return (
    <Layout>
      <Flex>
        <Heading>Notifications</Heading>
        <Divider orientation="vertical" />
        <Heading color="teal.500">2</Heading>
      </Flex>

      <Text mt={4}>
        You have 4 active subscriptions. You can test each of them by pressing
        the button below which will trigger a dummy notification on the
        configured channels.
      </Text>

      <Stack mt={8} spacing={2}>
        <Box
          p={4}
          borderWidth="1px"
          justify="space-between"
          boxShadow="md"
          borderRadius="md"
          align="center"
        >
          <Flex mb={2}>
            <Box as={AiFillTag} w="22px" />
            <Text ml={4}>My tagname</Text>
          </Flex>

          <Text>Created: {new Date().toLocaleString()}</Text>
          <Text>Notification type: Git hook</Text>
          <Text>Matched: 10 times</Text>
          <Text>Last match: 2 days ago</Text>

          <Flex justify="end" mt={4}>
            <Button size="sm" rightIcon="bell" colorScheme="teal">
              Test
            </Button>
            <Button ml={2} size="sm" rightIcon="search">
              View matches
            </Button>
            <Button
              ml={2}
              size="sm"
              rightIcon="delete"
              colorScheme="red"
              variant="ghost"
            >
              Remove
            </Button>
          </Flex>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Notifications;
