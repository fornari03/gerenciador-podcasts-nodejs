import * as http from "http";
import {getListEpisodes, getFilterEpisodes} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const [baseUrl, queryString] = req.url?.split("?") ?? [req.url, ""];
    
    if (req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res);
    }
    
    if (req.method === HttpMethods.GET && baseUrl === Routes.FILTER) {
        await getFilterEpisodes(req, res);
    }
};