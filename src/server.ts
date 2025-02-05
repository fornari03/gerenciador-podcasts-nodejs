import * as http from "http";

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
});

const port = process.env.PORT

server.listen(port, () => {
  console.log("Server is running on port " + port);
});