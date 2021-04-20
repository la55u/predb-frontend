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
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
  }),
};

export default styles;
