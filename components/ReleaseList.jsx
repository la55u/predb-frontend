import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../hooks/useSocket";
import { addRelease, getAllRelease, updateRelease } from "../redux/slices/releasesSlice";
import { API_BASE } from "../utils/routes";
import { NoResults } from "./NoResults";
import ReleaseRow from "./ReleaseRow";

const ReleaseList = () => {
  const dispatch = useDispatch();
  const { releaselist, loading } = useSelector((state) => state.releases);
  const results = useSelector((s) => s.search.results);
  const took = useSelector((s) => s.search.took);
  const searchLoading = useSelector((s) => s.search.loading);
  //const page = useSelector((s) => s.search.page);

  useSocket();

  // if took is set, the user is searching -> show results, otherwise show the latest releases
  const list = took > 0 ? results : releaselist;

  useEffect(() => {
    // only when not searching
    if (!took) dispatch(getAllRelease());
  }, []);

  if (loading || searchLoading)
    return (
      <Flex justify="center" h="50vh" align="center">
        <Spinner color="teal.400" size="xl" thickness="3px" label="Loading..." />
      </Flex>
    );

  if (took > 0 && results.length === 0) return <NoResults />;

  return (
    <Box borderRadius="md" mt={5}>
      {list.map((rel, i) => (
        <div key={rel._id} className={rel.new && i === 0 ? "new-item" : ""}>
          <ReleaseRow release={rel} />
        </div>
      ))}
    </Box>
  );
};

export default ReleaseList;
