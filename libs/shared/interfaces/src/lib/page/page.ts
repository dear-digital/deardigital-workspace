import { ContentBlockInterface } from '../content-blocks';
import { GlobalInterface } from '../global/global';

export interface PageInterface {
    id: number;
    globals: GlobalInterface | null,
    contentBlocks: ContentBlockInterface[];
}
