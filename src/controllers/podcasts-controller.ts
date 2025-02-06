import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-types";

const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes();
    res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON }); // head
    res.write(JSON.stringify(content.body)); // content
    res.end(); // fim
}

const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceFilterEpisodes(req.url);
    res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON }); // head
    res.write(JSON.stringify(content.body)); // content
    res.end(); // fim
}


export {getListEpisodes, getFilterEpisodes};