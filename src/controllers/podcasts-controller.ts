import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";

const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" }); // head
    res.end(JSON.stringify(await serviceListEpisodes())); // content
}

const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" }); // head
    res.end(JSON.stringify(await serviceFilterEpisodes(undefined, "saúde"))); // content
}


export {getListEpisodes, getFilterEpisodes};