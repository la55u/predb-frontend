import { IconButton, useColorMode } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [icon, setIcon] = useState("sun");
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const ic = colorMode === "dark" ? "sun" : "moon";
    setIcon(ic);
  }, []);

  return (
    <IconButton
      aria-label="Change theme"
      variant="ghost"
      icon="moon"
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggle;
