import { mode } from "@chakra-ui/theme-tools";

export default {
  variants: {
    filled: (props) => {
      return {
        field: {
          color: mode("light.col", "dark.col")(props),
          _placeholder: {
            color: mode("light.col", "dark.col")(props),
            opacity: 0.6,
          },
          _focus: {
            borderColor: mode("black", "teal.300")(props),
          },
        },
      };
    },
  },
  defaultProps: {
    variant: "filled",
  },
};
