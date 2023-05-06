import { PodcastInterface } from './podcast';

export type PodcastCardInterface = Pick<PodcastInterface, "audio" | "host" | "description" | "guest" | "title" | "slug" | "thumbnail">;
