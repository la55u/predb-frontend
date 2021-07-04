import { BellIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AiFillTag } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { getNotifications } from "../redux/slices/notificationSlice";

const Notifications = () => {
  const { notifications, loading, error } = useSelector((s) => s.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!notifications) dispatch(getNotifications());
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;
  if (!notifications) return null;

  return (
    <Layout>
      <Stack direction="row">
        <Heading>Notifications</Heading>
        <Divider orientation="vertical" h="40px" />
        <Heading color="teal.500">{notifications.length}</Heading>
      </Stack>

      <Text mt={4}>
        You have {notifications.length} saved searches. <br /> Here you can test each of
        them by pressing the button below which will trigger a dummy notification on the
        configured channels.
      </Text>

      <Stack mt={8} spacing={4}>
        {notifications.map((notif, i) => (
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
                {notif._id}
              </Heading>
            </Flex>

            <Text>Created: {new Date().toLocaleString()}</Text>
            <Text>Notification type: Webhook</Text>
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
