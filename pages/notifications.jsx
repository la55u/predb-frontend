import { BellIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Spinner,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AiFillTag } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { NotificationCard } from "../components/notifications/NotificationCard";
import { getNotifications } from "../redux/slices/notificationSlice";

const Notifications = () => {
  const { notifications, loading, error } = useSelector((s) => s.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!notifications) dispatch(getNotifications());
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <Layout>
      <Stack direction="row">
        <Heading>Notifications</Heading>
        <Divider orientation="vertical" h="40px" />
        <Heading color="teal.500">{notifications?.length}</Heading>
      </Stack>

      {notifications && (
        <>
          <Text mt={4}>
            You have {notifications.length} saved searches. <br /> Here you can test each
            of them by pressing the button below which will trigger a dummy notification
            on the configured channels.
          </Text>

          <Stack mt={8} spacing={4}>
            {notifications.map((notif, i) => (
              <NotificationCard notification={notif} key={i} />
            ))}
          </Stack>
        </>
      )}
    </Layout>
  );
};

export default Notifications;
