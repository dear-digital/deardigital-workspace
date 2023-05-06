import { ContentBlogInterface } from './blog';
import { ContentClientLogosInterface } from './client-logos';
import { ContentFeaturedPodcastInterface } from './featured-podcast';
import { ContentFeaturedProductsInterface } from './featured-products';
import { ContentFeaturedWorkInterface } from './featured-work';
import { ContentImageInterface } from './image';
import { ContentPodcastInterface } from './podcasts';
import { ContentServicesInterface } from './services';
import { ContentTextInterface } from './text';
import { ContentTextImageInterface } from './text-image';
import { ContentWorkInterface } from './work';
import { ContentYoutubeInterface } from './youtube';

export type ContentBlockInterface = ContentBlogInterface | ContentClientLogosInterface | ContentFeaturedPodcastInterface | ContentFeaturedProductsInterface | ContentFeaturedWorkInterface | ContentImageInterface | ContentPodcastInterface | ContentServicesInterface | ContentTextImageInterface | ContentTextInterface | ContentWorkInterface | ContentYoutubeInterface;
