import { extendTheme } from "@chakra-ui/react";
import components from "./components";
import foundations from "./foundations";
import styles from "./styles";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
  cssVarPrefix: "chakra",
};

export const theme = extendTheme({
  ...foundations,
  components,
  styles,
  config,
});
