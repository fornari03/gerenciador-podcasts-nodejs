import { repositoryPodcast } from '../repositories/podcasts-repository';
import { FilterOptions } from '../models/filter-podcast-model';

export const serviceFilterEpisodes = async (reqUrl : string | undefined) => {
    const queryString = reqUrl?.split("?")[1] ?? "";
    const queryStrings = queryString.split("&").map((item) => item.split("="));
    const filterCategories = queryStrings.find(([key]) => key === "c")?.[1] ?? "";
    const filterName = queryStrings.find(([key]) => key === "p")?.[1] ?? "";
    const data = await repositoryPodcast(filterName, filterCategories);
    return data;
}
