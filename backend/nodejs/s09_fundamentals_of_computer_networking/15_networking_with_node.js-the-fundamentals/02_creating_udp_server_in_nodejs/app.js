import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");

socket.on("message", (data, b) => {
  console.log(data.toString(), b);
});

socket.send("send method is used from the client side", 3000, "168.192.0.105")

// bind method is used from the server side
socket.bind({ port: 4000 }, () => {
  console.log(socket.address());
  console.log(`listening on port ${socket.address().port}`);
});