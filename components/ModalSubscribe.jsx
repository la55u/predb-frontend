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
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { makeHeaders } from "../hooks/useFetch";
import { createNotification } from "../redux/slices/notificationSlice";
import { API_BASE } from "../utils/routes";
import { addSuccessToast, addErrorToast } from "../redux/slices/toastSlice";

const ModalSubscribe = () => {
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const simpleSearch = useSelector((s) => s.search.simpleSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata.entries());
    dispatch(
      createNotification({ data, search: { type: "simple", input: simpleSearch } }),
    ).then(() => {
      onClose();
    });
  };

  return (
    <>
      <Button colorScheme="teal" size="sm" rightIcon={<BellIcon />} onClick={onOpen}>
        Subscribe
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay>
          <ModalContent as="form" onSubmit={handleSubmit}>
            <ModalHeader>Notify me about new results</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Label</FormLabel>
                <Input
                  name="label"
                  ref={initialRef}
                  placeholder="My favorite movie..."
                  variant="filled"
                />
                <FormHelperText>
                  Enter a label that helps you identify your search
                </FormHelperText>
              </FormControl>

              <FormControl mt={3} isRequired>
                <FormLabel>Notification type</FormLabel>
                <Select variant="filled" placeholder="Select..." name="type">
                  <option value="webhook">Webhook</option>
                  <option value="webpush">Web Push Notification</option>
                  <option value="email">Email</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="teal" rightIcon={<FaSave />} mr={3}>
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
