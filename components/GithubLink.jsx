import { IconButton, Link } from "@chakra-ui/core";
import React from "react";
import { DiGithubBadge } from "react-icons/di";

export const GithubLink = (props) => (
  // <PseudoBox
  //   as="a"
  //   href="https://github.com/chakra-ui/chakra-ui"
  //   rel="noopener noreferrer"
  //   target="_blank"
  //   aria-label="Go to Chakra UI's Github Repo"
  //   outline="0"
  //   transition="all 0.2s"
  //   borderRadius="md"
  //   _focus={{
  //     boxShadow: "outline",
  //   }}
  //   {...props}
  // >
  //   <Box as={DiGithubBadge} size="8" color="current" />
  // </PseudoBox>

  <Link href="https://github.com/la55u" target="_blank">
    <IconButton
      icon={DiGithubBadge}
      aria-label="Source code on GitHub"
      color="current"
      variant="ghost"
      fontSize="24px"
    />
  </Link>
);
