import { Button, Flex } from "@chakra-ui/core";
import { useRouter } from "next/router";

export const Pagination = () => {
  const router = useRouter();
  const { page } = router.query;
  console.log("query:", router.query);

  return (
    <Flex mt={10} justify="center">
      {[...Array(10)].map((n, i) => (
        <Button
          key={i}
          variant={page === i + 1 ? "outline" : "ghost"}
          size="sm"
          variantColor="teal"
        >
          {i + 1}
        </Button>
      ))}
    </Flex>
  );
};
