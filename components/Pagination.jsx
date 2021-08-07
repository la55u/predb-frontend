import { Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRelease } from "../redux/slices/releasesSlice";
import { searchSimple, setPage } from "../redux/slices/searchSlice";

export const Pagination = () => {
  const dispatch = useDispatch();
  const simpleSearch = useSelector((state) => state.search.simpleSearch);
  const resultsCnt = useSelector((state) => state.search.resultsCnt);
  const page = useSelector((state) => state.search.page);

  const handlePageChange = (p) => {
    if (resultsCnt) {
      // search is active, request next page of results
      dispatch(searchSimple({ input: simpleSearch, page: p }));
    } else {
      // not searched yet, get next page of all releases
      dispatch(getAllRelease(p));
    }
    dispatch(setPage(p));
    window.scrollTo(0, 0);
  };

  const pagesCnt = !resultsCnt ? 10 : Math.min(Math.ceil(resultsCnt / 30), 10);

  return (
    <Flex mt={10} justify="center">
      {[...Array(pagesCnt)].map((_, i) => (
        <Button
          aria-label={`Go to page ${i + 1}`}
          key={i}
          variant={Number(page) === i + 1 || (!page && i === 0) ? "outline" : "ghost"}
          onClick={() => handlePageChange(i + 1)}
          size="sm"
          colorScheme="teal"
        >
          {i + 1}
        </Button>
      ))}
    </Flex>
  );
};
