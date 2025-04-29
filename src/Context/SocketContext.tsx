import React, { createContext } from "react";
import SocketIOClient from "socket.io-client";

const WS_ServerURL = "http://localhost:3000"; // Replace with your server URL

const SocketContext = createContext<any>(null);
const socket = SocketIOClient(WS_ServerURL);

interface SocketProviderProps {
  children: React.ReactNode;
}
export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
