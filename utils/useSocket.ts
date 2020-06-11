import { useEffect, useState } from "react";
import io from "socket.io-client";

export function useSocket(url) {
  const [socket, setSocket] = useState<SocketIOClient.Socket>();

  useEffect(() => {
    const socketIo = io(url);

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;

    // should only run once and not on every re-render,
    // so pass an empty array
  }, []);

  return socket;
}
