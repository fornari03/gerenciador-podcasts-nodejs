import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";

const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" }); // head
    res.end(JSON.stringify(await serviceListEpisodes())); // content
}

const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const queryString = req.url?.split("?")[1] ?? "";
    const queryStrings = queryString.split("&").map((item) => item.split("="));
    const filterCategories = queryStrings.find(([key]) => key === "c")?.[1] ?? "";
    const filterName = queryStrings.find(([key]) => key === "p")?.[1] ?? "";
    console.log(filterCategories, filterName);
    res.writeHead(200, { "Content-Type": "application/json" }); // head
    res.end(JSON.stringify(await serviceFilterEpisodes({filterCategories: filterCategories, filterName: filterName}))); // content
}


export {getListEpisodes, getFilterEpisodes};