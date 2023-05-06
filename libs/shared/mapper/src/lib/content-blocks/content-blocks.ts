import { ContentBlockInterface, MappingContentBlocksFunction, MetaType } from '@deardigital/shared/interfaces';
import { BlogsStoryblok, ClientLogosStoryblok, FeaturedPodcastStoryblok, FeaturedProductsStoryblok, FeaturedWorkStoryblok, ImageStoryblok, PageStoryblok, PodcastsStoryblok, ServicesStoryblok, TextImageStoryblok, TextStoryblok, WorksStoryblok, YoutubeStoryblok } from '@deardigital/shared/schema';
import isEmpty from 'lodash.isempty';
import { mapContentBlockBlog } from './blog';
import { mapClientLogosContent } from './client-logos';
import { mapFeaturedPodcastContent } from './featured-podcast';
import { mapFeaturedProductsContent } from './featured-products';
import { mapFeaturedWorkContent } from './featured-work';
import { mapImageContent } from './image';
import { mapPodcastContent } from './podcast';
import { mapServicesContent } from './services';
import { mapTextContent } from './text';
import { mapTextImageContent } from './text-image';
import { mapWorkContent } from './work';
import { mapYoutubeContent } from './youtube';

const componentMapping = new Map<string, MappingContentBlocksFunction<unknown, MetaType, ContentBlockInterface>
>([
  ['blogs', (block, meta) => mapContentBlockBlog(block as BlogsStoryblok, meta)],
  ['clientLogos', (block, meta) => mapClientLogosContent(block as ClientLogosStoryblok, meta)],
  ['featuredPodcast', (block, meta) => mapFeaturedPodcastContent(block as FeaturedPodcastStoryblok)],
  ['featuredProducts', (block, meta) => mapFeaturedProductsContent(block as FeaturedProductsStoryblok, meta)],
  ['featuredWork', (block, meta) => mapFeaturedWorkContent(block as FeaturedWorkStoryblok, meta)],
  ['image', (block) => mapImageContent(block as ImageStoryblok)],
  ['podcasts', (block, meta) => mapPodcastContent(block as PodcastsStoryblok, meta)],
  ['services', (block, meta) => mapServicesContent(block as ServicesStoryblok, meta)],
  ['textImage', (block) => mapTextImageContent(block as TextImageStoryblok)],
  ['text', (block) => mapTextContent(block as TextStoryblok)],
  ['works', (block, meta) => mapWorkContent(block as WorksStoryblok, meta)],
  ['youtube', (block, meta) => mapYoutubeContent(block as YoutubeStoryblok, meta)],
]);

export function contentBlocksMapper(
  blocks: PageStoryblok["contentBlocks"] | undefined,
  meta: MetaType,
): ContentBlockInterface[] {
  if (!blocks || isEmpty(blocks)) {
    return [];
  }

  return blocks.map((block) => {
    if (!block?.component) {
      throw new Error('Content block cannot be mapped because __typename is undefined.');
    }

    const component = componentMapping.get(block.component);
    if (!component) {
      throw new Error(`Content block of type ${block.component} is missing a contentBlocksMapper.`);
    }

    return component(block, meta);
  })
}
