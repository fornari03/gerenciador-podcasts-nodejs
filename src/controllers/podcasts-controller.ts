import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { FilterOptions } from "../models/filter-podcast-model";

const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" }); // head
    res.end(JSON.stringify(await serviceListEpisodes())); // content
}

const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" }); // head
    res.end(JSON.stringify(await serviceFilterEpisodes({filterCategories: "saúde"}))); // content
}


export {getListEpisodes, getFilterEpisodes};