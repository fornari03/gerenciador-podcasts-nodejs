import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

const repositoryPodcast = async (filterName?:string, filterCategories?:string): Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let dataJson = JSON.parse(rawData);

    if (filterName) {
        dataJson = dataJson.filter((podcast: Podcast) => podcast.podcastName.toLowerCase() === (filterName.toLowerCase()));
    }

    if (filterCategories) {
        dataJson = dataJson.filter((podcast: Podcast) => podcast.categories.includes(filterCategories));
    }
    
    return dataJson;
}

export { repositoryPodcast };