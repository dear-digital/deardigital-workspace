import { MediaInterface } from '../media';
import { PageInterface } from '../page/page';

export interface ServiceInterface extends PageInterface {
    title: string;
    slug: string;
    thumbnail: MediaInterface | null;
}
