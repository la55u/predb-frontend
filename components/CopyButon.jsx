import { IconButton, useClipboard, useToast } from "@chakra-ui/react";
import { HiCheck } from "react-icons/hi";
import { RiFileCopyLine } from "react-icons/ri";

const CopyButton = ({ value }) => {
  const { onCopy, hasCopied } = useClipboard(value);
  const toast = useToast();

  const handleClick = () => {
    onCopy();
    toast({
      description: "Name copied to clipboard",
      status: "success",
      duration: 3000,
      isClosable: false,
    });
  };

  return (
    <IconButton
      isRound
      aria-label="Copy release name to clipboard"
      title="Copy release name to clipboard"
      variant="ghost"
      color="current"
      size="md"
      icon={hasCopied ? <HiCheck /> : <RiFileCopyLine />}
      onClick={handleClick}
    />
  );
};

export default CopyButton;
