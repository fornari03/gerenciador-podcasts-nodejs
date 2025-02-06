import { repositoryPodcast } from '../repositories/podcasts-repository';

export const serviceFilterEpisodes = async (filterName?: string, filterCategories?: string) => {
    const data = await repositoryPodcast(filterName, filterCategories);
    return data;
}
