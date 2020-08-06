import { Button, Flex } from "@chakra-ui/core";

// const nfo = "";

const NFO = ({ data, borderColor }) => {
  if (!data.nfo) return null;

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
        <Button
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
