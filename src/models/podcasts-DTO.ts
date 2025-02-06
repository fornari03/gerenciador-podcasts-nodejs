import { Podcast } from "./podcast-model";

export interface PodcastsDTO {
    statusCode: number;
    body: Podcast[];
}