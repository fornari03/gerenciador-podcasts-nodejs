import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

const repositoryPodcast = async (): Promise<Podcast[]> => {
    const data = fs.readFileSync(pathData, "utf-8");
    return JSON.parse(data);
}

export { repositoryPodcast };