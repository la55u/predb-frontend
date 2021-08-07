import { useEffect } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import { addRelease, updateRelease } from "../redux/slices/releasesSlice";
import { API_BASE } from "../utils/routes";

export function useSocket() {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io(API_BASE);

    // custom events from API
    socket.on("data_added", handleNew);
    socket.on("data_updated", handleUpdate);

    // Socket.IO default events
    socket.on("connect", () => console.log("Socket connected"));
    socket.on("disconnect", () => console.log("Socket disconnected"));
    socket.on("connect_error", (err) => console.log("Connection error:", err.message));

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
