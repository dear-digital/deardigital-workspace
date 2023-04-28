import { ContentBlogInterface } from './blog';
import { ContentFeaturedProductsInterface } from './featured-products';
import { ContentFeaturedWorkInterface } from './featured-work';
import { ContentImageInterface } from './image';
import { ContentPodcastInterface } from './podcasts';
import { ContentServicesInterface } from './services';
import { ContentTextInterface } from './text';
import { ContentTextImageInterface } from './text-image';

export type ContentBlockInterface = ContentBlogInterface | ContentFeaturedWorkInterface | ContentFeaturedProductsInterface | ContentImageInterface | ContentPodcastInterface | ContentServicesInterface | ContentTextImageInterface | ContentTextInterface;
