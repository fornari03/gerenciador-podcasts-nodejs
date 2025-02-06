import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-types";

const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON }); // head
    res.end(JSON.stringify(await serviceListEpisodes())); // content
}

const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON }); // head
    res.end(JSON.stringify(await serviceFilterEpisodes(req.url))); // content
}


export {getListEpisodes, getFilterEpisodes};