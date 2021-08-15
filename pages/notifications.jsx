import { Divider, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import { NotificationCard } from "../components/notifications/NotificationCard";
import { getNotifications } from "../redux/slices/notificationSlice";

const Notifications = () => {
  const { notifications, loading, error } = useSelector((s) => s.notifications);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((s) => s.auth.isAuthenticated);

  useEffect(() => {
    if (!notifications && isAuthenticated) dispatch(getNotifications());
  }, [isAuthenticated]);

  return (
    <Layout title="Notifications">
      <Stack direction="row">
        <Heading>Notifications</Heading>
        {notifications && <Divider orientation="vertical" h="40px" />}
        <Heading color="teal.500">{notifications?.length}</Heading>
      </Stack>

      {!isAuthenticated && (
        <Stack>
          <Text>
            Log in to create & receive notifications on new matches for your searches!
          </Text>
          <PromoText />
        </Stack>
      )}

      {isAuthenticated && notifications?.length === 0 && (
        <>
          <Text>
            You did not create any notification yet. Search for something on the release
            page, click Subscribe and get notified later when we find a new match!
          </Text>
          <Text> Available notification types:</Text>
          <UnorderedList pl={8}>
            <ListItem>Email</ListItem>
            <ListItem>Webhook</ListItem>
            <ListItem>Web push notification</ListItem>
            <ListItem>Zapier integration</ListItem>
          </UnorderedList>
        </>
      )}

      {error && JSON.stringify(error)}

      {notifications?.length > 0 && (
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

const PromoText = () => (
  <>
    <Text> Available notifications on new matches:</Text>
    <UnorderedList pl={8}>
      <ListItem>Email</ListItem>
      <ListItem>Webhook</ListItem>
      <ListItem>Web push notification</ListItem>
      <ListItem>Zapier integration</ListItem>
    </UnorderedList>
  </>
);

export default Notifications;
