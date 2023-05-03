import { MediaInterface } from '../media';

export interface ProductCardInterface {
    title: string;
    description: string;
    sku: string | null;
    thumbnail: MediaInterface | null;
}
