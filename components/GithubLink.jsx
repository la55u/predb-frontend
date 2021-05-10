import { IconButton } from "@chakra-ui/react";
import { DiGithubBadge } from "react-icons/di";

export const GithubLink = () => (
  <IconButton
    icon={<DiGithubBadge />}
    as="a"
    href="https://github.com/la55u/predb-frontend"
    target="_blank"
    rel="noopener noreferrer"
    title="Source code on Github"
    color="current"
    variant="ghost"
    fontSize="24px"
  />
);
