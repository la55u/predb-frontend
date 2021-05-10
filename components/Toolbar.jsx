import { Flex, FormControl, HStack, Switch, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ModalSubscribe from "./ModalSubscribe";

const Toolbar = () => {
  const { took, resultsCnt } = useSelector((state) => state.search);

  return (
    <>
      <Flex justify="space-between" align="center" mt={5} wrap="wrap">
        <HStack
          spacing={4}
          w={["100%", "100%", "auto"]}
          maxW={["unset", "unset", "50%"]}
        >
          <ModalSubscribe />

          <FormControl d="flex" alignItems="center" w="auto">
            <Switch
              size="sm"
              id="live"
              aria-label="Toggle live updates"
              defaultChecked={true}
              colorScheme="teal"
            >
              Live updates
            </Switch>
          </FormControl>
        </HStack>

        {took > 0 && (
          <Text color={resultsCnt ? "teal.400" : "red.500"} mt={[4, 4, 0]}>
            {resultsCnt < 10000 ? resultsCnt : `>${resultsCnt}`} results found
            in {took} ms
          </Text>
        )}
      </Flex>
    </>
  );
};

export default Toolbar;
