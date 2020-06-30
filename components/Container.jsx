import { Box } from "@chakra-ui/core";
import React from "react";

export const Container = (props) => {
  const Element = props.as || Box;

  return <Element width="full" maxWidth="1200px" mx="auto" px={5} {...props} />;
};
