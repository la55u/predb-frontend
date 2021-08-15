import {
  Flex,
  FormControl,
  HStack,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ModalSubscribe from "../modals/ModalSubscribe";

const Toolbar = () => {
  const took = useSelector((state) => state.search.took);
  const resultsCnt = useSelector((state) => state.search.resultsCnt);
  const colors = useColorModeValue({ label: "dark.bg" }, { label: "teal.300" });

  return (
    <Flex justify="space-between" align="center" mt={5} wrap="wrap">
      <HStack spacing={4} w={["100%", "100%", "auto"]} maxW={["unset", "unset", "50%"]}>
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

      {resultsCnt > 0 && (
        <Text color={colors.label} mt={[4, 4, 0]}>
          {resultsCnt < 10000 ? resultsCnt : `>${resultsCnt}`} results found in {took} ms
        </Text>
      )}

      {resultsCnt === 0 && (
        <Text color="red.400" mt={[4, 4, 0]}>
          No results found
        </Text>
      )}
    </Flex>
  );
};

export default Toolbar;
