import http from "node:http";

const server = http.createServer((req, res) => {
//   res.write("this is res.write");
  res.end("HTTP protocol was developed by Sir Tim Berners Lee at the CERN Institute in Switzerland between 1989 and 1991, as part of his foundational work inventing the World Wide Web. Born: June 8, 1955");
});

server.listen(3000);
