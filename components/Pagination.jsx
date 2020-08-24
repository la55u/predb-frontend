import { Button, Flex } from "@chakra-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRelease } from "../redux/slices/releasesSlice";
import { searchSimple } from "../redux/slices/searchSlice";

export const Pagination = () => {
  const router = useRouter();
  const { page } = router.query;
  const dispatch = useDispatch();
  const { resultsCnt, took } = useSelector((state) => state.search);

  useEffect(() => {
    // search is active, request next page of results
    if (resultsCnt) dispatch(searchSimple());
    // TODO move query to redux
    else dispatch(getAllRelease(page)); // next page of all releases
  }, [page]);

  const pagesCnt = took > 0 ? Math.min(Math.ceil(resultsCnt / 30), 10) : 10;

  return (
    <Flex mt={10} justify="center">
      {[...Array(pagesCnt)].map((n, i) => (
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
