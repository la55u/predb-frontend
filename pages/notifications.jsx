import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/core";
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
import { AiFillTag } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import Layout from "../components/Layout";

const Notifications = () => {
  return (
    <Layout>
      <Stack direction="row">
        <Heading>Notifications</Heading>
        <Divider orientation="vertical" h="40px" />
        <Heading color="teal.500">4</Heading>
      </Stack>

      <Text mt={4}>
        You have 4 active subscriptions. <br /> You can test each of them by
        pressing the button below which will trigger a dummy notification on the
        configured channels.
      </Text>

      <Stack mt={8} spacing={4}>
        {[1, 2, 3, 4].map((notif, i) => (
          <Box
            key={i}
            p={4}
            borderWidth="1px"
            justify="space-between"
            boxShadow="md"
            borderRadius="md"
          >
            <Flex mb={2}>
              <Box as={AiFillTag} w="22px" />
              <Heading size="sm" ml={4}>
                My tagname
              </Heading>
            </Flex>

            <Text>Created: {new Date().toLocaleString()}</Text>
            <Text>Notification type: Git hook</Text>
            <Text>Matched: 10 times</Text>
            <Text>Last match: 2 days ago</Text>

            <Flex justify="end" mt={4}>
              <Button size="sm" rightIcon={<BellIcon />} colorScheme="teal">
                Test
              </Button>
              <Button ml={2} size="sm" rightIcon={<SearchIcon />}>
                View matches
              </Button>
              <Button
                ml={2}
                size="sm"
                rightIcon={<FiTrash2 />}
                colorScheme="red"
                variant="ghost"
              >
                Remove
              </Button>
            </Flex>
          </Box>
        ))}
      </Stack>
    </Layout>
  );
};

export default Notifications;
