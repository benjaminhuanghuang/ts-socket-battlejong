import WebSocket from "ws";

const wsServer = new WebSocket.Server({ port: 8989 });

wsServer.on("connection", (socket: WebSocket) => {
  socket.on("message", (inMsg) => {
    socket.send(inMsg);
  });
});
