import * as http from "http";
import {getListEpisodes, getFilterEpisodes} from "./controllers/podcasts-controller";

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const [baseUrl, queryString] = req.url?.split("?") ?? [req.url, ""];

    if (req.method === "GET" && baseUrl === "/api/list") {
        await getListEpisodes(req, res);
    }

    if (req.method === "GET" && baseUrl === "/api/filter") {
        await getFilterEpisodes(req, res);
    }
});

const port = process.env.PORT

server.listen(port, () => {
  console.log("Server is running on port " + port);
});