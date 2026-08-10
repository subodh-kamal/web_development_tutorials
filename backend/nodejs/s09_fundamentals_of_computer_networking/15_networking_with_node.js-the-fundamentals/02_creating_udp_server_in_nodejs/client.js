import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");

socket.on("message", (data, remoteAddress) => {
  console.log(`client.js line no.6 ${data.toString()}`);
  console.log(remoteAddress);
  socket.close();
});

socket.send(
  "This is a custom message sending from the client side",
  4000,
  "192.168.0.107",
  () => {
    console.log("Message sent from client side");
  },
);
