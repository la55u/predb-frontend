import { Flex, FormLabel, Heading, Switch } from "@chakra-ui/core";
import React from "react";
import ModalSubscribe from "./ModalSubscribe";

const Toolbar = () => {
  return (
    <>
      <Flex justify="space-between" align="center" mt={5}>
        <Heading size="xs" color="teal.400">
          6 results found in 45 ms
        </Heading>

        <Flex>
          <Flex align="center">
            <FormLabel pb={0} htmlFor="live">
              Live updates
            </FormLabel>
            <Switch
              size="sm"
              pt="2px"
              id="live"
              defaultIsChecked={true}
              color="teal"
            />
          </Flex>

          <ModalSubscribe />
        </Flex>
      </Flex>
    </>
  );
};

export default Toolbar;
