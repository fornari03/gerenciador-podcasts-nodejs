import * as http from "http";
import {getListEpisodes, getFilterEpisodes} from "./controllers/podcasts-controller";

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET" && req.url === "/api/list") {
        await getListEpisodes(req, res);
    }

    if (req.method === "GET" && req.url === "/api/filter") {
        await getFilterEpisodes(req, res);
    }
});

const port = process.env.PORT

server.listen(port, () => {
  console.log("Server is running on port " + port);
});