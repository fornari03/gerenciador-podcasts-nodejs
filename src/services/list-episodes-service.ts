import { repositoryPodcast } from '../repositories/podcasts-repository';

const serviceListEpisodes = async () => {
  return await repositoryPodcast();
}

export { serviceListEpisodes };