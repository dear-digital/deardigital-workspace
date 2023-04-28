import { PodcastInterface } from './podcast';

export type PodcastCardInterface = Pick<PodcastInterface, "title" | "slug" | "thumbnail">;
