import { repositoryPodcast } from '../repositories/podcasts-repository';
import { PodcastsDTO } from '../models/podcasts-DTO';
import { StatusCode } from '../utils/status-code';

export const serviceFilterEpisodes = async (reqUrl : string | undefined): Promise<PodcastsDTO> => {

    const queryString = reqUrl?.split("?")[1] ?? "";
    const queryStrings = queryString.split("&").map((item) => item.split("="));
    const filterCategories = queryStrings.find(([key]) => key === "c")?.[1] ?? "";
    const filterName = queryStrings.find(([key]) => key === "p")?.[1] ?? "";
    const data = await repositoryPodcast(filterName, filterCategories);

    const responseFormat: PodcastsDTO = {
        statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    };

    return responseFormat;
}
