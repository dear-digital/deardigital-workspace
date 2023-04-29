import { ContentBlogInterface } from './blog';
import { ContentClientLogosInterface } from './client-logos';
import { ContentFeaturedProductsInterface } from './featured-products';
import { ContentFeaturedWorkInterface } from './featured-work';
import { ContentImageInterface } from './image';
import { ContentPodcastInterface } from './podcasts';
import { ContentServicesInterface } from './services';
import { ContentTextInterface } from './text';
import { ContentTextImageInterface } from './text-image';
import { ContentWorkInterface } from './work';

export type ContentBlockInterface = ContentBlogInterface | ContentClientLogosInterface | ContentFeaturedWorkInterface | ContentFeaturedProductsInterface | ContentImageInterface | ContentPodcastInterface | ContentServicesInterface | ContentTextImageInterface | ContentTextInterface | ContentWorkInterface;
