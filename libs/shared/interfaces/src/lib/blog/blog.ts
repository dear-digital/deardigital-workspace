import { MediaInterface } from '../media';
import { PageInterface } from '../page/page';

export interface BlogInterface extends PageInterface {
    title: string;
    slug: string;
    thumbnail: MediaInterface | null;
}
