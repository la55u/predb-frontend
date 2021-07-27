import { Button, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRelease } from "../redux/slices/releasesSlice";
import { searchSimple, setPage } from "../redux/slices/searchSlice";

export const Pagination = () => {
  const dispatch = useDispatch();
  const { resultsCnt, took, page } = useSelector((state) => state.search);

  // useEffect(() => {
  //   if (resultsCnt) {
  //     // search is active, request next page of results
  //     dispatch(searchSimple());
  //   } else {
  //     // not searched yet, get next page of all releases
  //     dispatch(getAllRelease(page));
  //   }
  // }, [page]);

  const pagesCnt = took > 0 ? Math.min(Math.ceil(resultsCnt / 30), 10) : 10;

  return (
    <Flex mt={10} justify="center">
      {[...Array(pagesCnt)].map((_, i) => (
        <Button
          aria-label={`Go to page ${i + 1}`}
          key={i}
          variant={Number(page) === i + 1 || (!page && i === 0) ? "outline" : "ghost"}
          onClick={() => dispatch(setPage(i + 1))}
          size="sm"
          colorScheme="teal"
        >
          {i + 1}
        </Button>
      ))}
    </Flex>
  );
};
