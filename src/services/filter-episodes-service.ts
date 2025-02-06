import { repositoryPodcast } from '../repositories/podcasts-repository';
import { FilterOptions } from '../models/filter-podcast-model';

export const serviceFilterEpisodes = async ({filterName, filterCategories} : FilterOptions) => {
    const data = await repositoryPodcast(filterName, filterCategories);
    return data;
}
