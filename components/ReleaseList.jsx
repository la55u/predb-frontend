import { Box, Flex, Spinner } from "@chakra-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../hooks/useSocket";
import {
  addRelease,
  getAllRelease,
  updateRelease,
} from "../redux/slices/releasesSlice";
import { API_BASE } from "../utils/routes";
import { NoResults } from "./NoResults";
import ReleaseRow from "./ReleaseRow";

const ReleaseList = () => {
  const dispatch = useDispatch();

  const { releaselist, loading } = useSelector((state) => state.releases);
  const { results, took, loading: searchLoading } = useSelector(
    (state) => state.search
  );

  // if took is set, the user is searching -> show results, otherwise show the latest releases
  const list = took > 0 ? results : releaselist;

  const socket = useSocket(API_BASE);

  useEffect(() => {
    async function dispatchGetAll() {
      await dispatch(getAllRelease());
    }
    dispatchGetAll();
  }, [dispatch]);

  useEffect(() => {
    if (socket) {
      socket.on("data_added", handleNew);
      socket.on("data_updated", handleUpdate);
    }
  }, [socket]);

  const handleNew = (payload) => {
    console.log("new:", payload);
    dispatch(addRelease(payload));
  };

  const handleUpdate = (payload) => {
    console.log("update:", payload);
    dispatch(updateRelease(payload));
  };

  if (loading || searchLoading)
    return (
      <Flex justify="center" h="50vh" align="center">
        <Spinner
          color="teal.400"
          size="xl"
          thickness="3px"
          label="Loading..."
        />
      </Flex>
    );

  if (took > 0 && results.length === 0) return <NoResults />;

  return (
    <>
      <Box borderRadius="md" mt={5}>
        {list.map((rel, i) => (
          <div key={rel._id} className={rel.new && i === 0 ? "new-item" : ""}>
            <ReleaseRow release={rel} />
          </div>
        ))}
      </Box>
    </>
  );
};

export default ReleaseList;
