import { Box, Button, Image, useColorMode } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import { API_BASE, API_ENDPOINT } from "../../utils/routes";

const NFO = ({ data, borderColor }) => {
  const { colorMode } = useColorMode();

  if (!data.nfo) return null;

  const downloadLink = `${API_BASE + API_ENDPOINT.DOWNLOAD}/${data.name}/${
    data.nfo[0].filename
  }`;

  return (
    <Box
      py={2}
      as="fieldset"
      borderWidth="1px"
      borderRadius="md"
      borderColor={borderColor}
    >
      <legend align="center">
        <Button
          onClick={() => window.open(downloadLink, "_blank")}
          colorScheme="teal"
          variant="ghost"
          rightIcon={<FiDownload />}
          mx={2}
          title={data.nfo[0].filename}
          aria-label="Download NFO file"
        >
          NFO
        </Button>
      </legend>

      <Image
        src={`${API_BASE}/api/data/file/${data.name}/${data.nfo[0].filename}/${colorMode}`}
        fallback={<div>Loading...</div>}
        mx="auto"
        alt=""
      />
    </Box>
  );
};

export default NFO;
