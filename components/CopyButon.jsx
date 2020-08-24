import { IconButton, useClipboard, useToast } from "@chakra-ui/core";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";

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
      icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
      onClick={handleClick}
    />
  );
};

export default CopyButton;
