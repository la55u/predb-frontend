import { Box, Flex, Spinner } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";
import { API_BASE } from "../utils/routes";
import { NoResults } from "./NoResults";
import ReleaseRow from "./ReleaseRow";

const ReleaseList = ({ releases, loading, searchResults }) => {
  const [allRelease, setAllRelease] = useState([...releases]);
  const socket = useSocket(API_BASE);
  // const { data, loading, error } = useContext(SearchContext);

  const list = searchResults ? searchResults : releases;
  // console.log("list", list);

  useEffect(() => {
    if (socket) {
      socket.on("data_added", handleNew);
      socket.on("data_updated", handleUpdate);
    }
  }, [socket]);

  const handleNew = (payload) => {
    setAllRelease((all) => [{ ...payload, new: true }, ...all]);
  };

  const handleUpdate = (payload) => {
    console.log("update:", payload);
    setAllRelease((all) => {
      const newAll = [...all];
      const idx = all.findIndex((r) => r._id === payload._id);
      if (idx !== -1) {
        newAll[idx] = payload;
      }
      return newAll;
    });
  };

  if (loading)
    return (
      <Flex justify="center" h="50vh" align="center">
        <Spinner color="teal.400" size="xl" />
      </Flex>
    );

  if (searchResults?.length === 0) return <NoResults />;

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
