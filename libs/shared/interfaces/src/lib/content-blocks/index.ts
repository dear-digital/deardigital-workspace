import { ContentFeaturedProductsInterface } from './featured-products';
import { ContentFeaturedWorkInterface } from './featured-work';
import { ContentImageInterface } from './image';
import { ContentTextInterface } from './text';
import { ContentTextImageInterface } from './text-image';

export type ContentBlockInterface = ContentFeaturedWorkInterface | ContentFeaturedProductsInterface | ContentImageInterface | ContentTextImageInterface | ContentTextInterface;