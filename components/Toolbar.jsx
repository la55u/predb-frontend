import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Switch,
} from "@chakra-ui/react";
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

          <FormControl ml={4} as={Flex} alignItems="center" w="auto">
            <FormLabel htmlFor="live" mb={0}>
              Live updates
            </FormLabel>
            <Switch
              size="sm"
              id="live"
              defaultIsChecked={true}
              colorScheme="teal"
            />
          </FormControl>
        </Flex>

        {took > 0 && (
          <Heading
            size="xs"
            color={resultsCnt ? "teal.400" : "red.500"}
            mt={[4, 4, 0]}
          >
            {resultsCnt < 10000 ? resultsCnt : `>${resultsCnt}`} results found
            in {took} ms
          </Heading>
        )}
      </Flex>
    </>
  );
};

export default Toolbar;
