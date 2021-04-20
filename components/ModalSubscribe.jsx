import { BellIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaSave } from "react-icons/fa";

const ModalSubscribe = () => {
  const initialRef = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme="teal"
        size="sm"
        rightIcon={<BellIcon />}
        onClick={onOpen}
      >
        Subscribe
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Subscribe for new results</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Label</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="My favorite movie..."
                  variant="filled"
                />
                <FormHelperText>
                  Enter a label that helps you identify your search
                </FormHelperText>
              </FormControl>

              <FormControl mt={3}>
                <FormLabel>Notification type</FormLabel>
                <Select variant="filled" placeholder="Select...">
                  <option value="webhook">Webhook</option>
                  <option value="push">Web Push Notification</option>
                  <option value="email">Email</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="teal" rightIcon={<FaSave />} mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default ModalSubscribe;
