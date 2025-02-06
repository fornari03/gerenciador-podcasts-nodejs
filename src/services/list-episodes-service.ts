import { PodcastsDTO } from '../models/podcasts-DTO';
import { repositoryPodcast } from '../repositories/podcasts-repository';
import { StatusCode } from '../utils/status-code';

const serviceListEpisodes = async (): Promise<PodcastsDTO> => {
  const data = await repositoryPodcast();

  const responseFormat: PodcastsDTO = {
    statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data
  };
  
  return responseFormat;
}

export { serviceListEpisodes };