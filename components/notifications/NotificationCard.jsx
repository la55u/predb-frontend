import { BellIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { AiFillTag } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeNotification } from "../../redux/slices/notificationSlice";

export const NotificationCard = ({ notification }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeNotification(notification._id));
  };

  return (
    <Box p={4} borderWidth="1px" justify="space-between" boxShadow="md" borderRadius="md">
      <HStack mb={2}>
        <Box as={AiFillTag} boxSize="26px" />
        <Heading size="sm" ml={4}>
          {notification.data.label}
        </Heading>
      </HStack>

      <Text>
        Created at:{" "}
        {new Date(notification.data.createdAt).toLocaleString(undefined, {
          dateStyle: "long",
          timeStyle: "short",
        })}
      </Text>
      <Text>
        Notification type: {notification.data.type.replace(/^\w/, (c) => c.toUpperCase())}
      </Text>
      <Text>Search mode: {notification.data.searchType}</Text>
      <Text>Matched: 10 times</Text>
      <Text>Last match: 2 days ago</Text>

      <Flex justify="end" mt={4}>
        <Button size="sm" variant="outline" rightIcon={<BellIcon />}>
          Test
        </Button>
        <Button ml={2} size="sm" variant="outline" rightIcon={<SearchIcon />}>
          View matches
        </Button>
        <Button
          ml={2}
          size="sm"
          rightIcon={<FiTrash2 />}
          colorScheme="red"
          variant="outline"
          onClick={handleRemove}
        >
          Remove
        </Button>
      </Flex>
    </Box>
  );
};
