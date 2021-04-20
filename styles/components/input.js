import { mode } from "@chakra-ui/theme-tools";

export default {
  baseStyle: (props) => {
    return {
      field: {
        color: mode("light.col", "dark.col")(props),
        _placeholder: {
          color: mode("light.col", "dark.col")(props),
          opacity: 0.6,
        },
      },
    };
  },
  defaultProps: {
    variant: "filled",
  },
};
