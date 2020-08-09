import { Flex, FormLabel, Heading, Switch } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import ModalSubscribe from "./ModalSubscribe";

const Toolbar = () => {
  const { took, resultsCnt } = useSelector((state) => state.search);

  return (
    <>
      <Flex justify="space-between" align="center" mt={5}>
        <Flex>
          <Flex align="center">
            <ModalSubscribe />

            <FormLabel pb={0} ml={4} htmlFor="live">
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
        </Flex>

        {took > 0 && (
          <Heading size="xs" color="teal.400">
            {resultsCnt} results found in {took} ms
          </Heading>
        )}
      </Flex>
    </>
  );
};

export default Toolbar;
