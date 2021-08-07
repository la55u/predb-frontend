import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("light.col", "dark.col")(props),
      bg: mode("light.bg", "dark.bg")(props),
      transition: "background-color 0.2s",
      lineHeight: "base",
    },
    "::selection": {
      background: mode("black", "teal.300")(props),
      color: mode("teal.300", "black")(props),
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
    /* clears the ‘X’ from Chrome */
    "input[type='search']::-webkit-search-decoration, input[type='search']::-webkit-search-cancel-button, input[type='search']::-webkit-search-results-button, input[type='search']::-webkit-search-results-decoration":
      { appearance: "none" },
  }),
};

export default styles;
