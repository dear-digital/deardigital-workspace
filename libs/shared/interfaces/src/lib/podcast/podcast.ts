import { MediaInterface } from '../media';
import { PageInterface } from '../page/page';

export interface PodcastInterface extends PageInterface {
    title: string;
    slug: string;
    thumbnail: MediaInterface | null;
}
