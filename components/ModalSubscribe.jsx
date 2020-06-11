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
  SlideIn,
  useDisclosure,
} from "@chakra-ui/core";
import { useRef } from "react";
import { FaSave } from "react-icons/fa";

const ModalSubscribe = () => {
  const initialRef = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        ml={4}
        variantColor="teal"
        size="sm"
        rightIcon="bell"
        onClick={onOpen}
      >
        Subscribe
      </Button>

      <SlideIn in={isOpen}>
        {(styles) => (
          <Modal
            preserveScrollBarGap
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay opacity={styles.opacity} />
            <ModalContent {...styles}>
              <ModalHeader>Subscribe for new results</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Label</FormLabel>
                  <Input ref={initialRef} placeholder="My label..." />
                  <FormHelperText>
                    Enter a label that helps you identify your search
                  </FormHelperText>
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button variantColor="teal" rightIcon={FaSave} mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </SlideIn>
    </>
  );
};

export default ModalSubscribe;
