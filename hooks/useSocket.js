import { useEffect } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import { addRelease, updateRelease } from "../redux/slices/releasesSlice";
import { API_BASE } from "../utils/routes";

export function useSocket() {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io(API_BASE);

    socket.on("data_added", handleNew);
    socket.on("data_updated", handleUpdate);

    return () => socket.disconnect();
  }, []);

  const handleNew = (payload) => {
    console.log("new:", payload);
    dispatch(addRelease(payload));
  };

  const handleUpdate = (payload) => {
    console.log("update:", payload);
    dispatch(updateRelease(payload));
  };
}
