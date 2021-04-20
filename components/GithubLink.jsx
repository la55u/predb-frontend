import { IconButton, Link } from "@chakra-ui/react";
import { DiGithubBadge } from "react-icons/di";

export const GithubLink = () => (
  <Link href="https://github.com/la55u/predb-frontend" target="_blank">
    <IconButton
      icon={<DiGithubBadge />}
      aria-label="Source code on GitHub"
      title="Source code on Github"
      color="current"
      variant="ghost"
      fontSize="24px"
    />
  </Link>
);
