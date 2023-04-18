import { ContentFeaturedProducts } from './featured-products';
import { ContentFeaturedWorkInterface } from './featured-work';
import { ContentImageInterface } from './image';
import { ContentTextInterface } from './text';
import { ContentTextImageInterface } from './text-image';

export type ContentBlockInterface = ContentFeaturedWorkInterface | ContentFeaturedProducts | ContentImageInterface | ContentTextImageInterface | ContentTextInterface;
