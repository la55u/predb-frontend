import { Button, Flex } from "@chakra-ui/core";
import { useEffect, useState } from "react";
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
      `${API_BASE}/api/data/file/${data.name}/${data.nfo[0].filename}`
    );
    const resdata = await res.json();
    if (resdata.success) setNfoContent(resdata.data);
  };

  const downloadLink = `${API_BASE + API_ENDPOINT.DOWNLOAD}/${data.name}/${
    data.nfo[0].filename
  }`;

  return (
    <Flex
      py={2}
      as="fieldset"
      align="center"
      direction="column"
      borderWidth="1px"
      borderRadius="md"
      borderColor={borderColor}
    >
      <legend align="center">
        <Button
          onClick={() => window.open(downloadLink, "_blank")}
          variantColor="teal"
          variant="ghost"
          rightIcon="download"
          mx={2}
          title={data.nfo[0].filename}
          aria-label="Download NFO file"
        >
          NFO
        </Button>
      </legend>

      <pre
        style={{
          fontSize: "10pt",
          textAlign: "left",
          fontFamily: "'Courier New', monospace",
          lineHeight: "14px",
          WebkitFontSmooth: "auto",
        }}
      >
        <code>{` ${nfoContent} `}</code>
      </pre>
    </Flex>
  );
};

export default NFO;
