import { Box, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { API_BASE, API_ENDPOINT } from "../utils/routes";

// const nfo = "";

const NFO = ({ data, borderColor }) => {
  if (!data.nfo) return null;

  const [nfoContent, setNfoContent] = useState(); // the actual nfo file

  useEffect(() => {
    if (data.nfo && !nfoContent) getNfo();
  }, []);

  const getNfo = async () => {
    const res = await fetch(
      `${API_BASE}/api/data/file/${data.name}/${data.nfo[0].filename}`,
    );
    const resdata = await res.json();
    if (resdata.success) setNfoContent(resdata.data);
  };

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

      <pre
        style={{
          justifyContent: "center",
          fontSize: "14px",
          fontFamily: "Courier New, monospace",
          lineHeight: "14px",
        }}
      >
        {`${nfoContent}`}
      </pre>
    </Box>
  );
};

export default NFO;
