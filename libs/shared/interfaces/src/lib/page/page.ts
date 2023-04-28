import { ContentBlockInterface } from '../content-blocks';
import { GlobalInterface } from '../global/global';

export interface PageInterface {
    globals: GlobalInterface | null,
    contentBlocks: ContentBlockInterface[];
}
