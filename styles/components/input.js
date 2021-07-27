import { mode } from "@chakra-ui/theme-tools";

export default {
  variants: {
    filled: (props) => {
      return {
        field: {
          color: mode("light.col", "dark.col")(props),
          bg: mode("white", "whiteAlpha.50")(props),
          shadow: "sm",
          _placeholder: {
            color: mode("light.col", "dark.col")(props),
            opacity: 0.6,
          },
          _focus: {
            borderColor: mode("black", "teal.300")(props),
            bg: mode("white", "transparent")(props),
          },
          _hover: {
            bg: mode("gray.50", "whiteAlpha.100")(props),
          },
        },
      };
    },
  },
  defaultProps: {
    variant: "filled",
  },
};
