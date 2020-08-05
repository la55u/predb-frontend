import { Button, Flex, Text } from "@chakra-ui/core";

// const nfo = "";

const NFO = ({ nfo, borderColor }) => {
  if (!nfo)
    return (
      <Text mt={5} textAlign="center" color="grey">
        NFO file not available
      </Text>
    );

  return (
    <Flex
      as="fieldset"
      align="center"
      direction="column"
      borderWidth="1px"
      borderRadius="md"
      borderColor={borderColor}
    >
      <legend align="center">
        <Button variantColor="teal" variant="ghost" mx={2}>
          filename-group.nfo
          {/* <IconButton
            aria-label="Download NFO file"
            icon="download"
            variant="ghost"
            variantColor="teal"
            ml={1}
          /> */}
        </Button>
      </legend>

      <pre
        style={{
          fontSize: "10pt",
          textAlign: "left",
          fontFamily: "'Courier New', monospace",
          lineHeight: "13px",
          wordWrap: "",
        }}
      >
        <code>
          {`
           
                            \││/
                       ▄    ─▓░─
                      ▀█▀   /││\
                      ▄█▄
                    ▄█▀ ▀█▄     ▄███▄
                   █▀     ▀█   ▄█▀ ▀█▄
                   █▄*****▄█  ▄█▀   ▀█▄
              ▄██░  █▄▄▄▄▄█  ░██     ▀█ ▀██████▄ 
             ▀▀▀▀    ▄▄▄▄▄▄▄ ░██     ▄█ ░██    ▀█▄
                   ▄███████▀ ░██▄   ▄█▀ ░██     ▀█▄
     ┌ ┐     ▀███ ░██        ░███▄ ▄█▀  ░██      ▀█▄
      i      ░███ ░████████▄ ░██▀███▀   ░██       ██
      F      ░██  ░███▀▀▀▀▀▀ ░██        ░██       ██
      P      ░██  ░███       ░██        ░██       ██
      D      ░██  ░███       ░██        ░██       ██
     └ ┘    ░░██  ░██▀       ░██       ░░██      ▄█▀
           ░░███  ░██        ░██      ░░███     ▄█▀
          ░░███   ░██       ░░██     ░░▄███    ▄█▀
          ░███    ░██      ░░███▄   ░▄██████████▀ 
       ▄▄▄███  ▄ ░░██     ░░█████ ▀▀▀▀▀ ▄ ▀▀▀▀▀   
    ▄▄▄  ▄▄▄ ▄▄█░░███  ▄▄██████▀        █▄▄ ▄▄▄  ▄▄▄
    █ █▄▄█ ▀▀▀ ░░███                      ▀▀▀ █▄▄█ █
    █  ▄▄▄▄▄ ▄▄████ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄  █
    █▄▄█  iLLEGAL FRiENDS OF PSYCHEDELiC DRUGS  █▄▄█
     ▀▀▀                                        ▀▀▀


_____
iNFO:          Jagdszenen.aus.Niederbayern
¯¯¯¯¯

Movie Info _______
Release Date.....: 24.08.2014
Movie Date.......: 29.05.1969
Retail Date......: 10.02.2012
IMDB Link........: http://www.imdb.com/title/tt0064507
IMDB Rating......: 7,5
Genre............: Drama
File Size........: 59 x 100 MB @ 5596 MB
Source...........: BD 25 / 1,659:1

Video ____________
Format...........: x264 / 2 Pass
Frame Rate:......: 24,000 FPS
Length...........: 85:17 Min/sec
Resolution.......: 1792 x 1080
Bitrate..........: 7631 kbps

Audio 1____________
Format...........: DTS / 2 Channels / 48 KHz
Bitrate..........: 1509 kbps
Language.........: German

Subtitles ________
Forced Subs......: none
Full Subs........: German

______
Notes:
¯¯¯¯¯¯
none

_______
Greets:
¯¯¯¯¯¯¯
MiSFiTS AOE PTC
          `}
        </code>
      </pre>
    </Flex>
  );
};

export default NFO;
