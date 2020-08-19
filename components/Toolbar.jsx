import { Flex, FormLabel, Heading, Switch } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import ModalSubscribe from "./ModalSubscribe";

const Toolbar = () => {
  const { took, resultsCnt } = useSelector((state) => state.search);

  return (
    <>
      <Flex justify="space-between" align="center" wrap="wrap" mt={5}>
        <Flex
          align="center"
          justify="space-between"
          w={["100%", "100%", "auto"]}
        >
          <ModalSubscribe />

          <div>
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
          </div>
        </Flex>

        {took > 0 && (
          <Heading size="xs" color="teal.400" mt={[4, 4, 0]}>
            {resultsCnt} results found in {took} ms
          </Heading>
        )}
      </Flex>
    </>
  );
};

export default Toolbar;
