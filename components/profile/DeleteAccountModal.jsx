import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteAccount } from "../../redux/slices/authSlice";

export const DeleteAccountModal = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    dispatch(deleteAccount());
    onClose();
  };

  return (
    <>
      <Button
        w="180px"
        colorScheme="red"
        leftIcon={<RiDeleteBin6Line />}
        variant="outline"
        onClick={onOpen}
      >
        Delete account
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              All data associated with your profile, such as email address, saved
              searches, triggers and settings will be deleted. This action can not be
              undone.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              leftIcon={<RiDeleteBin6Line />}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
