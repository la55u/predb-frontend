import { Button, Flex } from "@chakra-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllRelease } from "../redux/slices/releasesSlice";

export const Pagination = () => {
  const router = useRouter();
  const { page } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    async function dispatchGetAll() {
      await dispatch(getAllRelease(page));
    }
    dispatchGetAll();
  }, [page]);

  return (
    <Flex mt={10} justify="center">
      {[...Array(10)].map((n, i) => (
        <Link href={`?page=${i + 1}`}>
          <Button
            aria-label={`Go to page ${i + 1}`}
            key={i}
            variant={
              Number(page) === i + 1 || (!page && i === 0) ? "outline" : "ghost"
            }
            size="sm"
            colorScheme="teal"
          >
            {i + 1}
          </Button>
        </Link>
      ))}
    </Flex>
  );
};
