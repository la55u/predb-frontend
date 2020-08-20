import { IconButton, Link } from "@chakra-ui/core";
import { DiGithubBadge } from "react-icons/di";

export const GithubLink = (props) => (
  <Link href="https://github.com/la55u" target="_blank">
    <IconButton
      icon={<DiGithubBadge />}
      aria-label="Source code on GitHub"
      color="current"
      variant="ghost"
      fontSize="24px"
    />
  </Link>
);
