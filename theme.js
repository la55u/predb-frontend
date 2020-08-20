import chakraTheme from "@chakra-ui/theme";

export const theme = {
  ...chakraTheme,
  config: {
    ...chakraTheme.config,
    initialColorMode: "dark",
  },
};
