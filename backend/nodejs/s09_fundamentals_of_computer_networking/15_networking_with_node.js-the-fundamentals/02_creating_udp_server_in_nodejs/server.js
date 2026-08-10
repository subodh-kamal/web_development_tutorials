import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");

socket.on("message", (data, remoteAddress) => {
  console.log(data.toString());
  console.log(remoteAddress);
  socket.send("Message received on the server", remoteAddress.port, remoteAddress.address);
});

// bind method is used from the server side
socket.bind({ port: 4000 }, () => {
  console.log(socket.address());
  console.log(`listening on port ${socket.address().port}`);
});
