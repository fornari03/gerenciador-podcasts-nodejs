import { IncomingMessage, ServerResponse } from "http";

const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "lista de podcasts" }));
}

export {getListEpisodes};