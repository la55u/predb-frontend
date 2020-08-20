import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/core";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ThemeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <IconButton
      aria-label={`Switch dark/light theme`}
      variant="ghost"
      color="current"
      ml="2"
      fontSize="20px"
      onClick={toggleColorMode}
      icon={icon}
    />
  );
};
