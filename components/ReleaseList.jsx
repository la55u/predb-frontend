import { Box } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { API_BASE } from "../utils/routes";
import { useSocket } from "../utils/useSocket";
import ReleaseRow from "./ReleaseRow";

const ReleaseList = ({ releases }) => {
  const [allRelease, setAllRelease] = useState([...releases]);
  const socket = useSocket(API_BASE);

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

  return (
    <>
      <Box borderRadius="md" mt={5}>
        {allRelease.map((rel, i) => (
          <div key={rel._id} className={rel.new && i === 0 ? "new-item" : ""}>
            <ReleaseRow release={rel} />
          </div>
        ))}
      </Box>
    </>
  );
};

export default ReleaseList;
