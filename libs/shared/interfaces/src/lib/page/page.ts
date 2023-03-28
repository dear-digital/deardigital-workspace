import { ContentBlockInterface } from '../content-blocks';

export interface PageInterface {
    id: number;
    contentBlocks: ContentBlockInterface[];
}