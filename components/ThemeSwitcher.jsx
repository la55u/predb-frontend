import { IconButton, useColorMode } from "@chakra-ui/core";

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label={`Switch dark/light theme`}
      variant="ghost"
      color="current"
      ml="2"
      fontSize="20px"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? "moon" : "sun"}
    />
  );
};
