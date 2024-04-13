import { Server } from 'socket.io';

const socketConfig = (server) => {
  const soc = new Server(server);
  return soc;
}

export default socketConfig;